import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dateKey } from "../data/branches";

const BookingContext = createContext(null);
const STORAGE_KEY = "alnour_bookings_v1";

const load = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const uid = () =>
  `ALN-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(load);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (data) => {
    const booking = { ...data, id: uid(), createdAt: Date.now() };
    setBookings((prev) => [...prev, booking]);
    return booking;
  };

  const cancelBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const bookingsFor = (branchId, date) => {
    const key = dateKey(date);
    return bookings.filter(
      (b) => b.branchId === branchId && b.dateKey === key && b.status !== "cancelled"
    );
  };

  const slotUsage = (branchId, date, hour) => {
    return bookingsFor(branchId, date).filter((b) => b.hour === hour).length;
  };

  const myBookings = useMemo(
    () => bookings.filter((b) => b.status !== "cancelled").sort((a, b) => b.createdAt - a.createdAt),
    [bookings]
  );

  const updateBookingStatus = (id, status) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  const allBookings = useMemo(
    () => [...bookings].sort((a, b) => b.createdAt - a.createdAt),
    [bookings]
  );

  const adminStats = useMemo(() => {
    const total = bookings.length;
    const confirmed = bookings.filter((b) => b.status === "confirmed").length;
    const completed = bookings.filter((b) => b.status === "completed").length;
    const cancelled = bookings.filter((b) => b.status === "cancelled").length;
    const today = dateKey(new Date());
    const todayBookings = bookings.filter((b) => b.dateKey === today && b.status !== "cancelled").length;
    return { total, confirmed, completed, cancelled, todayBookings };
  }, [bookings]);

  return (
    <BookingContext.Provider
      value={{ bookings, addBooking, cancelBooking, bookingsFor, slotUsage, myBookings, allBookings, updateBookingStatus, adminStats }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
