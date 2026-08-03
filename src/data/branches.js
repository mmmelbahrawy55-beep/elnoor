export const BRANCHES = [
  {
    id: "downtown",
    name: "الفرع الرئيسي",
    area: "وسط البلد",
    address: "شارع طلعت حرب، عمارة النور، الدور الثاني، وسط البلد",
    phone: "02-24567890",
    mobile: "01000001111",
    hours: { open: 9, close: 21 },
    days: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
    capacity: 8,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
    features: ["مركز الرعاية الملكية", "قسم النساء والخصوبة", "معمل PCR"],
  },
  {
    id: "mohandessin",
    name: "فرع المهندسين",
    area: "الجيزة",
    address: "شارع جامعة الدول العربية، برج النور، المهندسين",
    phone: "02-33445566",
    mobile: "01000002222",
    hours: { open: 9, close: 21 },
    days: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
    capacity: 6,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
    features: ["خدمة سحب منازل", "قسم الأطفال", "نتائج فورية"],
  },
  {
    id: "nasr-city",
    name: "فرع مدينة نصر",
    area: "القاهرة",
    address: "شارع عباس العقاد، بجوار أكاديمية النور، مدينة نصر",
    phone: "02-26891234",
    mobile: "01000003333",
    hours: { open: 8, close: 22 },
    days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
    capacity: 10,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    features: ["أكبر فروعنا", "مركز الأورام", "مواقف مجانية"],
  },
];

export const WORKING_DAYS = [
  "السبت",
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
];

export const getBranchById = (id) => BRANCHES.find((b) => b.id === id) || BRANCHES[0];

export const dateKey = (date) => {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

export const dayNameAr = (date) => {
  return new Intl.DateTimeFormat("ar-EG", { weekday: "long" }).format(new Date(date));
};

export const isOpenDay = (branch, date) => {
  const name = dayNameAr(date);
  return branch.days.includes(name);
};

export const generateSlots = (branch, date) => {
  const slots = [];
  for (let h = branch.hours.open; h < branch.hours.close; h++) {
    slots.push({
      hour: h,
      time: `${String(h % 12 === 0 ? 12 : h % 12)}:00 ${h < 12 ? "ص" : "م"}`,
    });
  }
  return slots;
};
