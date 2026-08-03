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

  return (
    <BookingContext.Provider
      value={{ bookings, addBooking, cancelBooking, bookingsFor, slotUsage, myBookings }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
