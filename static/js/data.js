const categories = ["گردنبند", "گوشواره", "دستبند", "انگشتر"]
const collections = [
  { title: "مروارید",         image: "static/images/collections/col_morvarid.webp" },
  { title: "مینیمال روزمره",  image: "static/images/collections/col_minimal.webp" },
  { title: "ویژه",            image: "static/images/collections/col_special.webp" },
  { title: "سنگ طبیعی",       image: "static/images/collections/col_stone.webp" }
]
const materials = ["طلا", "نقره", "استیل", "برنج آبکاری"]
const genders = ["زنانه", "مردانه", "یونیسکس"]
const features = ["مناسب هدیه", "ضد حساسیت", "ضد آب", "قابل سفارشی‌سازی"]

const products = [
  { id: 1, title: "گردنبند مروارید مینیمال", desc: "مروارید طبیعی با زنجیر ظریف.", price: 1210000, category: "گردنبند", collection: "مروارید", material: "طلا", gender: "زنانه", features: ["مناسب هدیه", "ضد حساسیت"], images: ["static/images/products/p1-1.jpg", "static/images/products/p1-2.jpg"] },
  { id: 2, title: "گوشواره حلقه‌ای طلایی", desc: "", price: 980000, category: "گوشواره", collection: "مینیمال روزمره", material: "طلا", gender: "زنانه", features: ["ضد آب"], images: ["static/images/products/p2-1.jpg"] },
  { id: 3, title: "دستبند زنجیری", desc: "زنجیر ظریف با قفل مغناطیسی.", price: 1200000, category: "دستبند", collection: "مینیمال روزمره", material: "برنج آبکاری", gender: "یونیسکس", features: ["ضد آب", "مناسب هدیه"], images: ["static/images/products/p3-1.jpg"] },
  { id: 4, title: "گردنبند قلبی", desc: "طرح قلب با نگین کوچک.", price: 1350000, category: "گردنبند", collection: "ویژه", material: "نقره", gender: "زنانه", features: ["مناسب هدیه"], images: ["static/images/products/p4-1.jpg"] },
  { id: 5, title: "گوشواره مرواریدی", desc: "", price: 890000, category: "گوشواره", collection: "مروارید", material: "نقره", gender: "زنانه", features: ["ضد حساسیت"], images: ["static/images/products/p5-1.jpg"] },
  { id: 6, title: "دستبند سنگ طبیعی", desc: "سنگ‌های رنگی دست‌چین.", price: 1100000, category: "دستبند", collection: "سنگ طبیعی", material: "استیل", gender: "یونیسکس", features: ["ضد آب", "قابل سفارشی‌سازی"], images: ["static/images/products/p6-1.jpg"] },
  { id: 7, title: "گردنبند لایه‌ای", desc: "دو لایه با طول قابل تنظیم.", price: 1650000, category: "گردنبند", collection: "ویژه", material: "طلا", gender: "زنانه", features: ["مناسب هدیه", "قابل سفارشی‌سازی"], images: ["static/images/products/p7-1.jpg"] },
  { id: 8, title: "انگشتر مینیمال", desc: "", price: 950000, category: "انگشتر", collection: "مینیمال روزمره", material: "طلا", gender: "یونیسکس", features: ["ضد حساسیت"], images: ["static/images/products/p8-1.jpg"] },
  { id: 9, title: "انگشتر مردانه استیل", desc: "طرح ساده و مقاوم.", price: 720000, category: "انگشتر", collection: "سنگ طبیعی", material: "استیل", gender: "مردانه", features: ["ضد آب"], images: ["static/images/products/p9-1.jpg"] },
  { id: 10, title: "ست مروارید هدیه", desc: "گردنبند و گوشواره در جعبه هدیه.", price: 2400000, category: "گردنبند", collection: "مروارید", material: "نقره", gender: "زنانه", features: ["مناسب هدیه"], images: ["static/images/products/p10-1.jpg"] }
]
