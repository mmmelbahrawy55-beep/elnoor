export const TEST_CATEGORIES = [
  {
    id: "blood",
    name: "تحاليل الدم الأساسية",
    icon: "Droplet",
    color: "from-rose-500 to-red-600",
    tests: [
      { name: "صورة دم كاملة CBC", price: 120, time: "30 دقيقة" },
      { name: "تعداد الدم التفصيلي", price: 180, time: "45 دقيقة" },
      { name: "سرعة الترسيب ESR", price: 60, time: "ساعة" },
      { name: "نسبة السيولة INR", price: 90, time: "30 دقيقة" },
    ],
  },
  {
    id: "sugar",
    name: "تحاليل السكر والغدد",
    icon: "Activity",
    color: "from-amber-400 to-orange-500",
    tests: [
      { name: "سكر صائم FBS", price: 40, time: "30 دقيقة" },
      { name: "سكر تراكمي HbA1c", price: 150, time: "ساعة" },
      { name: "منحنى السكر (3 ساعات)", price: 250, time: "3 ساعات" },
      { name: "هرمونات الغدة الدرقية", price: 320, time: "24 ساعة" },
    ],
  },
  {
    id: "liver",
    name: "وظائف الكلى والكبد",
    icon: "Stethoscope",
    color: "from-emerald-400 to-teal-600",
    tests: [
      { name: "وظائف الكبد الشاملة", price: 180, time: "ساعة" },
      { name: "وظائف الكلى", price: 160, time: "ساعة" },
      { name: "حمض البوليك", price: 70, time: "30 دقيقة" },
      { name: "أنزيمات العضلات", price: 140, time: "ساعة" },
    ],
  },
  {
    id: "hormones",
    name: "الهرمونات والخصوبة",
    icon: "HeartPulse",
    color: "from-fuchsia-500 to-purple-600",
    tests: [
      { name: "هرمونات الحمل والخصوبة", price: 450, time: "24 ساعة" },
      { name: "الهرمونات التناسلية", price: 380, time: "24 ساعة" },
      { name: "هرمون الحليب Prolactin", price: 160, time: "24 ساعة" },
      { name: "تحاليل ما قبل الزواج", price: 500, time: "48 ساعة" },
    ],
  },
  {
    id: "vitamins",
    name: "الفيتامينات والتغذية",
    icon: "Leaf",
    color: "from-lime-400 to-green-600",
    tests: [
      { name: "فيتامين د D3", price: 280, time: "24 ساعة" },
      { name: "فيتامين ب12", price: 220, time: "24 ساعة" },
      { name: "الحديد ومخزونه Ferritin", price: 200, time: "ساعة" },
      { name: "كالسيوم وفوسفور", price: 110, time: "ساعة" },
    ],
  },
  {
    id: "immunity",
    name: "المناعة والأورام",
    icon: "ShieldPlus",
    color: "from-sky-400 to-blue-700",
    tests: [
      { name: "مؤشرات الالتهاب CRP", price: 90, time: "30 دقيقة" },
      { name: "مؤشرات الأورام (Pack)", price: 850, time: "48 ساعة" },
      { name: "تحليل الجراثيم والحساسية", price: 400, time: "48 ساعة" },
      { name: "الأجسام المضادة المناعية", price: 350, time: "24 ساعة" },
    ],
  },
  {
    id: "molecular",
    name: "التحاليل الجزيئية",
    icon: "Dna",
    color: "from-cyan-400 to-blue-600",
    tests: [
      { name: "فحص PCR دقيق", price: 350, time: "12 ساعة" },
      { name: "البصمة الوراثية DNA", price: 1200, time: "72 ساعة" },
      { name: "فحوصات البكتيريا والميكروبيولوجي", price: 300, time: "72 ساعة" },
      { name: "تحاليل الأنيميا الوراثية", price: 500, time: "48 ساعة" },
    ],
  },
];

export const getCategoryIcon = (name) => name;
