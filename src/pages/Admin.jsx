import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  CalendarCheck,
  CalendarX,
  Clock,
  TrendingUp,
  Users,
  Search,
  Filter,
  ChevronDown,
  Eye,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  MapPin,
  Phone,
  StickyNote,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { getBranchById, dayNameAr } from "../data/branches";
import { Reveal, EASE } from "../components/motion";

const STATUS_MAP = {
  confirmed: { label: "مؤكد", color: "bg-emerald-50 text-emerald-700 ring-emerald-200", icon: CheckCircle2 },
  completed: { label: "مكتمل", color: "bg-blue-50 text-blue-700 ring-blue-200", icon: CheckCircle2 },
  cancelled: { label: "ملغي", color: "bg-red-50 text-red-600 ring-red-200", icon: XCircle },
};

function StatCard({ icon: Icon, label, value, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, ease: EASE }}
      className="rounded-2xl bg-white ring-1 ring-navy-900/5 shadow-card p-5 flex items-center gap-4"
    >
      <span className={`flex items-center justify-center w-12 h-12 rounded-xl ${color}`}>
        <Icon className="w-5.5 h-5.5" />
      </span>
      <div>
        <p className="text-2xl font-black text-navy-900">{value}</p>
        <p className="text-xs font-bold text-slate-400">{label}</p>
      </div>
    </motion.div>
  );
}

function BookingRow({ b, onStatusChange, onView }) {
  const branch = getBranchById(b.branchId);
  const st = STATUS_MAP[b.status] || STATUS_MAP.confirmed;
  const Icon = st.icon;
  const dateObj = new Date(b.date);

  return (
    <motion.tr
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors"
    >
      <td className="px-4 py-3.5">
        <p className="text-sm font-black text-gold-500 tracking-wider" dir="ltr">{b.id}</p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          {new Date(b.createdAt).toLocaleDateString("ar-EG", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
        </p>
      </td>
      <td className="px-4 py-3.5">
        <p className="text-sm font-bold text-navy-900">{b.name}</p>
        <p className="text-[11px] text-slate-400" dir="ltr">{b.phone}</p>
      </td>
      <td className="px-4 py-3.5 hidden md:table-cell">
        <p className="text-sm font-bold text-navy-900">{branch.name}</p>
        <p className="text-[11px] text-slate-400">{branch.area}</p>
      </td>
      <td className="px-4 py-3.5 hidden lg:table-cell">
        <p className="text-sm font-bold text-navy-900">{dayNameAr(dateObj)}</p>
        <p className="text-[11px] text-slate-400">{dateObj.toLocaleDateString("ar-EG")}</p>
      </td>
      <td className="px-4 py-3.5 hidden lg:table-cell">
        <p className="text-sm font-bold text-navy-900" dir="ltr">{b.time}</p>
      </td>
      <td className="px-4 py-3.5 hidden sm:table-cell">
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold rounded-full px-2.5 py-1 ring-1 ${st.color}`}>
          <Icon className="w-3 h-3" />
          {st.label}
        </span>
      </td>
      <td className="px-4 py-3.5">
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onView(b)}
            className="p-1.5 rounded-lg hover:bg-navy-900/5 text-slate-400 hover:text-navy-900 transition-colors"
            title="عرض التفاصيل"
          >
            <Eye className="w-4 h-4" />
          </button>
          {b.status === "confirmed" && (
            <>
              <button
                onClick={() => onStatusChange(b.id, "completed")}
                className="p-1.5 rounded-lg hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-colors"
                title="تحديد كمكتمل"
              >
                <CheckCircle2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onStatusChange(b.id, "cancelled")}
                className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"
                title="إلغاء الحجز"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </td>
    </motion.tr>
  );
}

function BookingDetail({ booking, onClose, onStatusChange }) {
  const branch = getBranchById(booking.branchId);
  const st = STATUS_MAP[booking.status] || STATUS_MAP.confirmed;
  const dateObj = new Date(booking.date);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-[2rem] shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-extrabold text-navy-900">تفاصيل الحجز</h3>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 transition-colors">
            <XCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl bg-slate-50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">رقم الحجز</span>
              <span className="text-sm font-black text-gold-500 tracking-wider" dir="ltr">{booking.id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">الحالة</span>
              <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold rounded-full px-2.5 py-1 ring-1 ${st.color}`}>
                {st.label}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">تاريخ الإنشاء</span>
              <span className="text-xs font-bold text-navy-900">
                {new Date(booking.createdAt).toLocaleDateString("ar-EG", { month: "long", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-gold-500/5 ring-1 ring-gold-400/20 p-4 space-y-3">
            <h4 className="text-xs font-black text-gold-600">معلومات الموعد</h4>
            <div className="flex items-center gap-3 text-sm font-bold text-navy-900">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
              {branch.name} — {branch.area}
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-navy-900">
              <CalendarCheck className="w-4 h-4 text-gold-500 shrink-0" />
              {dayNameAr(dateObj)} — {dateObj.toLocaleDateString("ar-EG")}
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-navy-900">
              <Clock className="w-4 h-4 text-gold-500 shrink-0" />
              <span dir="ltr">{booking.time}</span>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 space-y-3">
            <h4 className="text-xs font-black text-slate-400">بيانات العميل</h4>
            <div className="flex items-center gap-3 text-sm font-bold text-navy-900">
              <Users className="w-4 h-4 text-slate-400 shrink-0" />
              {booking.name}
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-navy-900" dir="ltr">
              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
              {booking.phone}
            </div>
            {booking.tests?.length > 0 && (
              <div className="pt-2 border-t border-slate-200">
                <p className="text-[11px] font-bold text-slate-400 mb-2">التحاليل:</p>
                <div className="flex flex-wrap gap-1.5">
                  {booking.tests.map((t) => (
                    <span key={t} className="rounded-full bg-navy-900/5 text-navy-900 text-[11px] font-bold px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {booking.notes && (
              <div className="pt-2 border-t border-slate-200">
                <p className="text-[11px] font-bold text-slate-400 mb-1">ملاحظات:</p>
                <p className="text-sm text-navy-900">{booking.notes}</p>
              </div>
            )}
          </div>

          {booking.status === "confirmed" && (
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => { onStatusChange(booking.id, "completed"); onClose(); }}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 text-white py-3 text-sm font-bold hover:bg-emerald-600 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                مكتمل
              </button>
              <button
                onClick={() => { onStatusChange(booking.id, "cancelled"); onClose(); }}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-red-500 text-white py-3 text-sm font-bold hover:bg-red-600 transition-colors"
              >
                <XCircle className="w-4 h-4" />
                إلغاء
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Admin() {
  const { allBookings, updateBookingStatus, adminStats } = useBooking();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [branchFilter, setBranchFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filtered = useMemo(() => {
    return allBookings.filter((b) => {
      const matchSearch =
        !search ||
        b.name.includes(search) ||
        b.id.toLowerCase().includes(search.toLowerCase()) ||
        b.phone.includes(search);
      const matchStatus = statusFilter === "all" || b.status === statusFilter;
      const matchBranch = branchFilter === "all" || b.branchId === branchFilter;
      return matchSearch && matchStatus && matchBranch;
    });
  }, [allBookings, search, statusFilter, branchFilter]);

  return (
    <main className="min-h-screen bg-cream relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-grid-light" />
      <div className="absolute top-0 inset-x-0 h-[300px] bg-navy-grad rounded-b-[3rem]" />
      <div className="absolute top-0 inset-x-0 h-[300px] bg-grid-dark opacity-50 rounded-b-[3rem]" />

      <div className="relative container-x">
        <Reveal className="text-center mb-10">
          <span className="chip bg-gold-grad text-navy-950">
            <LayoutDashboard className="w-4 h-4" />
            لوحة التحكم
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-black text-white">مرحباً بك في لوحة التحكم</h1>
          <p className="mt-3 text-slate-300/80">إدارة وتعديل جميع الحجوزات من مكان واحد.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <StatCard icon={BarChart3} label="إجمالي الحجوزات" value={adminStats.total} color="bg-gold-500/10 text-gold-500" delay={0.1} />
            <StatCard icon={CalendarCheck} label="مؤكدة" value={adminStats.confirmed} color="bg-emerald-50 text-emerald-500" delay={0.15} />
            <StatCard icon={TrendingUp} label="مكتملة" value={adminStats.completed} color="bg-blue-50 text-blue-500" delay={0.2} />
            <StatCard icon={Clock} label="حجوزات اليوم" value={adminStats.todayBookings} color="bg-purple-50 text-purple-500" delay={0.25} />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-[2rem] bg-white ring-1 ring-navy-900/5 shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="بحث بالاسم أو رقم الحجز أو الهاتف..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 rounded-xl bg-slate-50 ring-1 ring-navy-900/5 text-sm font-bold text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all"
                />
              </div>
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none px-4 py-3 pr-9 rounded-xl bg-slate-50 ring-1 ring-navy-900/5 text-sm font-bold text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all cursor-pointer"
                >
                  <option value="all">كل الحالات</option>
                  <option value="confirmed">مؤكد</option>
                  <option value="completed">مكتمل</option>
                  <option value="cancelled">ملغي</option>
                </select>
                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={branchFilter}
                  onChange={(e) => setBranchFilter(e.target.value)}
                  className="appearance-none px-4 py-3 pr-9 rounded-xl bg-slate-50 ring-1 ring-navy-900/5 text-sm font-bold text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all cursor-pointer"
                >
                  <option value="all">كل الفروع</option>
                  <option value="downtown">الفرع الرئيسي — وسط البلد</option>
                  <option value="mohandessin">فرع المهندسين</option>
                  <option value="nasr-city">فرع مدينة نصر</option>
                </select>
                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                    <th className="px-4 py-3">رقم الحجز</th>
                    <th className="px-4 py-3">العميل</th>
                    <th className="px-4 py-3 hidden md:table-cell">الفرع</th>
                    <th className="px-4 py-3 hidden lg:table-cell">اليوم</th>
                    <th className="px-4 py-3 hidden lg:table-cell">الساعة</th>
                    <th className="px-4 py-3 hidden sm:table-cell">الحالة</th>
                    <th className="px-4 py-3">إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {filtered.length > 0 ? (
                      filtered.map((b) => (
                        <BookingRow
                          key={b.id}
                          b={b}
                          onStatusChange={updateBookingStatus}
                          onView={setSelectedBooking}
                        />
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="px-4 py-16 text-center">
                          <AlertTriangle className="mx-auto w-10 h-10 text-slate-300 mb-3" />
                          <p className="text-sm font-bold text-slate-400">
                            {allBookings.length === 0 ? "لا توجد حجوزات بعد" : "لا توجد نتائج مطابقة للبحث"}
                          </p>
                        </td>
                      </tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {filtered.length > 0 && (
              <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50">
                <p className="text-[11px] font-bold text-slate-400">
                  عرض {filtered.length} من أصل {allBookings.length} حجز
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {selectedBooking && (
          <BookingDetail
            booking={selectedBooking}
            onClose={() => setSelectedBooking(null)}
            onStatusChange={updateBookingStatus}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
