import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  CalendarCheck,
  Check,
  PartyPopper,
  Users,
  CircleCheck,
  CircleX,
  Clock3,
  Stethoscope,
  User,
  NotebookPen,
  ArrowLeft,
  CalendarDays,
  Trash2,
  ShieldCheck,
  CreditCard,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import {
  BRANCHES,
  getBranchById,
  generateSlots,
  dateKey,
  dayNameAr,
  isOpenDay,
} from "../data/branches";
import { TEST_CATEGORIES } from "../data/tests";
import { useBooking } from "../context/BookingContext";
import BookingStepper from "../components/booking/BookingStepper";
import BookingSteps from "../components/booking/BookingSteps";
import { Reveal, EASE } from "../components/motion";

function BranchStep({ branch, setBranch }) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-extrabold text-navy-900 mb-2">اختر الفرع</h3>
      <p className="text-slate-500 mb-7">اختر الفرع الأقرب إليك — لكل فرع طاقم وساعات خاصة.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BRANCHES.map((b, i) => {
          const active = branch?.id === b.id;
          return (
            <motion.button
              key={b.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, ease: EASE }}
              onClick={() => setBranch(b)}
              whileHover={{ y: -6 }}
              className={`relative group rounded-3xl overflow-hidden text-right transition-all duration-300 ${
                active
                  ? "ring-2 ring-gold-500 shadow-gold"
                  : "ring-1 ring-navy-900/8 hover:ring-gold-400/50 shadow-card"
              }`}
            >
              <div className="relative h-40">
                <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                {active && (
                  <motion.span
                    layoutId="branch-check"
                    className="absolute top-3 left-3 flex items-center justify-center w-8 h-8 rounded-full bg-gold-grad text-navy-950"
                  >
                    <Check className="w-4.5 h-4.5" strokeWidth={3} />
                  </motion.span>
                )}
                <div className="absolute bottom-3 right-4 left-4">
                  <p className="text-[11px] font-bold text-gold-400">{b.area}</p>
                  <p className="text-white font-extrabold">{b.name}</p>
                </div>
              </div>
              <div className="bg-white p-4 space-y-2.5 text-xs text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  {b.address}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  يوميًا {b.hours.open}:00 — {b.hours.close}:00
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function DateStep({ branch, date, setDate }) {
  const days = useMemo(() => {
    const arr = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      arr.push(d);
    }
    return arr;
  }, []);

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-extrabold text-navy-900 mb-2">اختر اليوم</h3>
      <p className="text-slate-500 mb-7">
        <span className="font-extrabold text-navy-900">{branch.name}</span> — الأيام المعتادة
        أرقام أسعار خاصة للفرع.
      </p>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {days.map((d, i) => {
          const open = isOpenDay(branch, d);
          const key = dateKey(d);
          const active = date && dateKey(date) === key;
          const today = i === 0;
          const dNum = d.getDate();
          const dName = dayNameAr(d).replace("يوم ", "");
          return (
            <motion.button
              key={key}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03, ease: EASE }}
              disabled={!open}
              onClick={() => setDate(d)}
              className={`relative rounded-2xl px-3 py-4 flex flex-col items-center gap-1.5 ring-1 transition-all ${
                !open
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed ring-slate-100"
                  : active
                  ? "bg-navy-900 text-white ring-navy-900 shadow-lift scale-105"
                  : "bg-white text-navy-900 ring-navy-900/8 hover:ring-gold-400/60 hover:-translate-y-1 shadow-card"
              }`}
            >
              {today && open && (
                <span
                  className={`absolute -top-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-black shadow ${
                    active ? "bg-gold-grad text-navy-950" : "bg-navy-900 text-gold-300"
                  }`}
                >
                  اليوم
                </span>
              )}
              <span className="text-[11px] font-bold opacity-80">{dName}</span>
              <span className="text-2xl font-black">{dNum}</span>
              <span className="text-[10px] opacity-70">
                {new Intl.DateTimeFormat("ar-EG", { month: "long" }).format(d)}
              </span>
              {!open && (
                <span className="absolute inset-0 flex items-center justify-center rounded-2xl bg-slate-100/80">
                  <span className="rotate-[-20deg] text-[10px] font-black text-slate-400 border border-slate-300 rounded-full px-2 py-0.5">
                    عطلة
                  </span>
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function TimeStep({ branch, date, hour, setHour }) {
  const { slotUsage } = useBooking();
  const slots = useMemo(() => generateSlots(branch, date), [branch, date]);
  const isToday = () => {
    const d = new Date(date);
    const now = new Date();
    return d.getDate() === now.getDate() && d.getMonth() === now.getMonth();
  };

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-extrabold text-navy-900 mb-2">اختر الساعة</h3>
      <p className="text-slate-500 mb-7">
        سعة كل موعد <span className="font-black text-navy-900">{branch.capacity} متضر</span> — الأزرة
        متأخر، والرمادي ممتلئ أو منتهي.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {slots.map((s) => {
          const used = slotUsage(branch.id, date, s.hour);
          const remaining = Math.max(branch.capacity - used, 0);
          const full = remaining === 0;
          const active = hour === s.hour;
          const past = isToday() && new Date().getHours() >= s.hour;
          const disabled = full || past;
          return (
            <motion.button
              key={s.hour}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: s.hour * 0.015, ease: EASE }}
              disabled={disabled}
              onClick={() => setHour(s.hour)}
              className={`relative rounded-2xl p-4 flex flex-col items-center gap-1.5 ring-1 transition-all overflow-hidden ${
                disabled
                  ? "bg-slate-100 text-slate-300 cursor-not-allowed ring-slate-100"
                  : active
                  ? "bg-navy-900 text-white ring-navy-900 shadow-lift"
                  : "bg-white text-navy-900 ring-navy-900/8 hover:ring-gold-400/60 hover:-translate-y-1 shadow-card"
              }`}
            >
              <Clock3 className="w-4.5 h-4.5 opacity-80" />
              <span className="font-black text-lg" dir="ltr">
                {s.time}
              </span>
              <span
                className={`text-[11px] font-bold rounded-full px-2.5 py-0.5 ${
                  disabled
                    ? "text-slate-400"
                    : active
                    ? "bg-white/15"
                    : remaining <= 2
                    ? "bg-red-50 text-red-500"
                    : "bg-emerald-50 text-emerald-600"
                }`}
              >
                {full ? (
                  <>
                    <CircleX className="inline w-3 h-3 mb-0.5" /> ممتلئ
                  </>
                ) : past ? (
                  "انتهى"
                ) : (
                  <>
                    <CircleCheck className="inline w-3 h-3 mb-0.5" /> {remaining} متاح
                  </>
                )}
              </span>
              <span className="absolute bottom-0 right-0 left-0 h-1 bg-slate-100">
                <motion.span
                  animate={{ width: `${(used / branch.capacity) * 100}%` }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={`block h-full ${
                    full ? "bg-slate-300" : remaining <= 2 ? "bg-red-400" : "bg-emerald-400"
                  }`}
                />
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function DetailsStep({ form, setForm }) {
  const [search, setSearch] = useState("");
  const allTests = TEST_CATEGORIES.flatMap((c) => c.tests.map((t) => ({ ...t, cat: c.name })));
  const shown = search
    ? allTests.filter((t) => t.name.includes(search))
    : allTests.slice(0, 12);

  const toggleTest = (name) => {
    setForm((f) => ({
      ...f,
      tests: f.tests.includes(name) ? f.tests.filter((t) => t !== name) : [...f.tests, name],
    }));
  };

  const input =
    "w-full rounded-2xl bg-slate-50 ring-1 ring-navy-900/8 px-4 py-3.5 font-bold text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/60 focus:bg-white transition-all";

  return (
    <div className="space-y-7">
      <div>
        <h3 className="text-xl md:text-2xl font-extrabold text-navy-900 mb-2">بياناتك</h3>
        <p className="text-slate-500">
          نستخدم بياناتك فقط لتأكيد موعدك وإرسال النتائج. راجع التفاصيل ثم أكّد.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="flex items-center gap-2 font-bold text-navy-900 mb-2.5">
            <User className="w-4 h-4 text-gold-500" /> الاسم الكامل
          </span>
          <input
            className={input}
            placeholder="مثال: أحمد محمد"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </label>
        <label className="block">
          <span className="flex items-center gap-2 font-bold text-navy-900 mb-2.5">
            <Phone className="w-4 h-4 text-gold-500" /> رقم الهاتف
          </span>
          <input
            className={input}
            placeholder="01xxxxxxxxx"
            dir="ltr"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value.replace(/[^0-9+]/g, "") }))}
          />
        </label>
      </div>

      <div>
        <span className="flex items-center gap-2 font-bold text-navy-900 mb-3">
          <Stethoscope className="w-4 h-4 text-gold-500" /> التحاليل المطلوبة (اختياري)
        </span>
        <input
          className={`${input} mb-4`}
          placeholder="ابحث عن تحاليل... مثال: سكر تراكمي"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-2.5">
          {shown.map((t) => {
            const selected = form.tests.includes(t.name);
            return (
              <motion.button
                key={t.name}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleTest(t.name)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold ring-1 transition-all ${
                  selected
                    ? "bg-navy-900 text-white ring-navy-900 shadow-lift"
                    : "bg-white text-slate-600 ring-navy-900/10 hover:ring-brand-400/50"
                }`}
              >
                {selected && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                {t.name}
                <span className={`text-[10px] ${selected ? "text-gold-500" : "text-slate-400"}`}>
                  {t.price} ج.م
                </span>
              </motion.button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-slate-400">
          {form.tests.length > 0
            ? `تم اختيار ${form.tests.length} تحاليل`
            : "يمكنك تركه فارغاً واختيار التحاليل داخل الميعاد"}
        </p>
      </div>

      <label className="block">
        <span className="flex items-center gap-2 font-bold text-navy-900 mb-2.5">
          <NotebookPen className="w-4 h-4 text-gold-500" /> ملاحظات إضافية
        </span>
        <textarea
          className={`${input} min-h-[110px] resize-none`}
          placeholder="أي تعاليل خاصة أو حالة طبية نراعيها..."
          value={form.notes}
          onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
        />
      </label>
    </div>
  );
}

function Confirmation({ booking, onCancel, onNewBooking }) {
  const branch = getBranchById(booking.branchId);
  const slot = generateSlots(branch, new Date(booking.date)).find((s) => s.hour === booking.hour);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
        className="mx-auto flex items-center justify-center w-24 h-24 rounded-3xl bg-gold-grad text-navy-950 shadow-gold"
      >
        <PartyPopper className="w-12 h-12" />
      </motion.div>
      <h3 className="mt-7 text-3xl font-black text-navy-900">تم تأكيد موعدك بنجاح!</h3>
      <p className="mt-2 text-slate-500">
        ستصلك رسالة تأكيد على هاتفك، ويمكنك إدارة الموعد من صفحة «مواعيدي».
      </p>

      <div className="mx-auto max-w-md mt-9 rounded-[2rem] bg-white ring-1 ring-navy-900/8 shadow-soft p-7">
        <p className="text-xs font-bold text-slate-400">رقم الحجز المرجعي</p>
        <p className="mt-1.5 text-2xl font-black text-gold-500 tracking-widest" dir="ltr">
          {booking.id}
        </p>
        <div className="mt-6 space-y-3 text-right">
          {[
            [CalendarDays, `${dayNameAr(booking.date)} ${new Date(booking.date).toLocaleDateString("ar-EG")}`],
            [Clock3, slot?.time || ""],
            [MapPin, `${branch.name} — ${branch.area}`],
            [User, booking.name],
            [Phone, booking.phone],
          ].map(([Icon, val], i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm font-bold text-navy-900"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-gold-500">
                <Icon className="w-4.5 h-4.5" />
              </span>
              {val}
            </div>
          ))}
          {booking.tests.length > 0 && (
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 mb-2.5">التحاليل المطلوبة:</p>
              <div className="flex flex-wrap gap-1.5">
                {booking.tests.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link
          to="/my-bookings"
          className="btn-primary px-8 py-4 text-navy-950"
        >
          إدارة مواعيدي
          <ArrowLeft className="w-4.5 h-4.5" />
        </Link>
        <button
          onClick={onCancel}
          className="btn px-8 py-4 ring-1 ring-red-200 text-red-500 hover:bg-red-50"
        >
          <Trash2 className="w-4.5 h-4.5" />
          إلغاء هذا الموعد
        </button>
        <button
          onClick={onNewBooking}
          className="btn px-8 py-4 ring-1 ring-navy-900/10 text-navy-900 hover:bg-slate-50"
        >
          حجز موعد آخر
        </button>
      </div>
    </motion.div>
  );
}

function Summary({ step, branch, date, hour, form }) {
  const slot = hour && branch ? generateSlots(branch, date).find((s) => s.hour === hour) : null;
  const { slotUsage } = useBooking();
  const used = branch && date && hour ? slotUsage(branch.id, date, hour) : 0;
  const items = [
    { label: "الفرع", value: branch ? `${branch.name}` : "—", active: step >= 0 },
    { label: "اليوم", value: date ? `${dayNameAr(date)} ${new Date(date).toLocaleDateString("ar-EG")}` : "—", active: step >= 1 },
    { label: "الساعة", value: slot?.time || "—", active: step >= 2 },
  ];
  return (
    <div className="relative rounded-3xl bg-navy-950 noise p-7 sticky top-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="relative">
        <h4 className="flex items-center gap-2 font-extrabold text-white">
          <CalendarCheck className="w-5 h-5 text-gold-400" />
          ملخص الحجز
        </h4>
        <div className="mt-6 space-y-4">
          {items.map((it) => (
            <div key={it.label} className="flex items-center justify-between gap-3">
              <span className="text-sm text-slate-400">{it.label}</span>
              <span
                className={`text-sm font-extrabold ${
                  it.active ? "text-white" : "text-slate-600"
                }`}
              >
                {it.value}
              </span>
            </div>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-sm text-slate-400">التحاليل المختارة</span>
            <span className="font-extrabold text-white">{form.tests.length || "—"}</span>
          </div>
          {slot && branch && (
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3.5 flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                <Users className="w-4 h-4" /> سعة الساعة المختارة
              </span>
              <span className="text-sm font-black text-emerald-300" dir="ltr">
                {used}/{branch.capacity}
              </span>
            </div>
          )}
        </div>
        <div className="mt-6 rounded-2xl bg-gold-500/10 ring-1 ring-gold-400/25 p-4 space-y-2.5 text-xs text-gold-200">
          <p className="flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-gold-400" />
            حجز مجاني بدون دفع مسبق
          </p>
          <p className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-brand-300" />
            الدفع في المعامل أو بالتأكيد
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-300" />
            إلغاء مجاني حتى 6 ساعات قبل الموعد
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Booking() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { addBooking, cancelBooking } = useBooking();

  const [step, setStep] = useState(0);
  const [branch, setBranch] = useState(null);
  const [date, setDate] = useState(null);
  const [hour, setHour] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", tests: [], notes: "" });
  const [confirmed, setConfirmed] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const b = params.get("branch");
    if (b) setBranch(getBranchById(b));
  }, [params]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, confirmed]);

  const canNext = [!!branch, !!date, hour !== null, form.name.trim().length >= 3 && form.phone.trim().length >= 10][
    step
  ];

  const handleNext = () => {
    if (step === 3) {
      const booking = addBooking({
        branchId: branch.id,
        dateKey: dateKey(date),
        date: date.toISOString(),
        hour,
        time: generateSlots(branch, date).find((s) => s.hour === hour).time,
        name: form.name.trim(),
        phone: form.phone.trim(),
        tests: form.tests,
        notes: form.notes.trim(),
        status: "confirmed",
      });
      setConfirmed(booking);
      setError("");
      return;
    }
    setStep((s) => s + 1);
    setError("");
  };

  const reset = () => {
    setStep(0);
    setBranch(null);
    setDate(null);
    setHour(null);
    setForm({ name: "", phone: "", tests: [], notes: "" });
    setConfirmed(null);
    navigate("/booking");
  };

  return (
    <main className="min-h-screen bg-cream relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-grid-light" />
      <div className="absolute top-0 inset-x-0 h-[300px] bg-navy-grad rounded-b-[3rem]" />
      <div className="absolute top-0 inset-x-0 h-[300px] bg-grid-dark opacity-50 rounded-b-[3rem]" />

      <div className="relative container-x">
        <Reveal className="text-center mb-10">
          <span className="chip bg-gold-grad text-navy-950">
            <Sparkles className="w-4 h-4" />
            نظام الحجز الذكي
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-black text-white">حجز موعدك في دقيقة</h1>
          <p className="mt-3 text-slate-300/80">اختر الفرع ثم اليوم ثم الساعة — والباقى علينا.</p>
        </Reveal>

        {!confirmed && (
          <>
            <Reveal delay={0.1} className="mb-12">
              <BookingStepper current={step} />
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="rounded-[2rem] bg-white ring-1 ring-navy-900/5 shadow-soft p-6 md:p-10 min-h-[540px]">
                  {step === 0 && (
                    <BookingSteps step={step} onNext={handleNext} canNext={canNext}>
                      <BranchStep branch={branch} setBranch={setBranch} />
                    </BookingSteps>
                  )}
                  {step === 1 && (
                    <BookingSteps
                      step={step}
                      onNext={handleNext}
                      onBack={() => setStep(0)}
                      canNext={canNext}
                    >
                      <DateStep branch={branch} date={date} setDate={setDate} />
                    </BookingSteps>
                  )}
                  {step === 2 && (
                    <BookingSteps
                      step={step}
                      onNext={handleNext}
                      onBack={() => setStep(1)}
                      canNext={canNext}
                    >
                      <TimeStep branch={branch} date={date} hour={hour} setHour={setHour} />
                    </BookingSteps>
                  )}
                  {step === 3 && (
                    <BookingSteps
                      step={step}
                      onNext={handleNext}
                      onBack={() => setStep(2)}
                      canNext={canNext}
                      nextLabel="تأكيد الحجز"
                    >
                      <DetailsStep form={form} setForm={setForm} />
                    </BookingSteps>
                  )}
                  {error && (
                    <p className="mt-4 text-center text-sm font-bold text-red-500">{error}</p>
                  )}
                </div>
              </div>

              <div className="hidden lg:block">
                <Summary step={step} branch={branch} date={date} hour={hour} form={form} />
              </div>
            </div>
          </>
        )}

        <AnimatePresence>
          {confirmed && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Confirmation
                booking={confirmed}
                onCancel={() => {
                  cancelBooking(confirmed.id);
                  reset();
                }}
                onNewBooking={reset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
