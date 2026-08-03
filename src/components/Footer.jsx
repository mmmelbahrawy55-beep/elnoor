import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CalendarCheck,
  ArrowLeft,
  Heart,
} from "lucide-react";
import Logo from "./Logo";

const socials = [
  { Icon: Facebook, label: "فيسبوك" },
  { Icon: Instagram, label: "انستجرام" },
  { Icon: Twitter, label: "تويتر" },
  { Icon: Youtube, label: "يوتيوب" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-slate-400 overflow-hidden">
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="relative container-x pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">
          <div>
            <Logo light />
            <p className="mt-6 leading-relaxed text-slate-400/80 max-w-sm">
              منذ 2001 نضمن دقة النتائج وراحة المريض في المقام الأول. ثلاث فروع بأحدث الأجهزة
              العالمية في قلب القاهرة والجيزة.
            </p>
            <div className="flex gap-3 mt-7">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06] hover:bg-gold-grad hover:text-navy-950 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3.5">
              {[
                ["/", "الرئيسية"],
                ["/services", "الخدمات والأسعار"],
                ["/booking", "حجز موعد"],
                ["/about", "عن المعمل"],
                ["/my-bookings", "مواعيدي"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2.5 hover:text-gold-400 transition-colors duration-300 group"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-gold-500/60 group-hover:-translate-x-1 transition-transform" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-lg mb-6">فروعنا</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4.5 h-4.5 text-gold-400 mt-0.5 shrink-0" />
                <a href="https://www.google.com/maps/search/?api=1&query=30.0444,31.2357" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  وسط البلد — طلعت حرب
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4.5 h-4.5 text-gold-400 mt-0.5 shrink-0" />
                <a href="https://www.google.com/maps/search/?api=1&query=30.0561,31.2026" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  المهندسين — جامعة الدول العربية
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4.5 h-4.5 text-gold-400 mt-0.5 shrink-0" />
                <a href="https://www.google.com/maps/search/?api=1&query=30.0593,31.3378" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  مدينة نصر — عباس العقاد
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-3">
                <Phone className="w-4.5 h-4.5 text-gold-400 mt-0.5 shrink-0" />
                <span dir="ltr">02-2456 7890</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4.5 h-4.5 text-gold-400 mt-0.5 shrink-0" />
                <span dir="ltr">0100 000 1111</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4.5 h-4.5 text-gold-400 mt-0.5 shrink-0" />
                info@alnourlab.com
              </li>
            </ul>
            <Link to="/booking" className="btn-primary mt-7 px-6 py-3.5 text-navy-950">
              <CalendarCheck className="w-4.5 h-4.5" />
              احجز فوراً
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} معمل النور للتحاليل الطبية — جميع الحقوق محفوظة</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold-400 transition-colors">سياسة الخصوصية</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-gold-400 transition-colors">الشروط والأحكام</a>
            <span className="text-white/10">|</span>
            <p className="flex items-center gap-2">
              صُنع بـ
              <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
              من أجل صحتك
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
