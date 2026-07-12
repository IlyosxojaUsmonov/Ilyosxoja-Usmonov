import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "uz" | "en";

type Dict = Record<string, { uz: string; en: string }>;

// Keep translations centralized. Use t("key") in components.
export const dict: Dict = {
  // nav
  "nav.home": { uz: "Bosh sahifa", en: "Home" },
  "nav.about": { uz: "Men haqimda", en: "About" },
  "nav.projects": { uz: "Loyihalar", en: "Projects" },
  "nav.services": { uz: "Xizmatlar", en: "Services" },
  "nav.pricing": { uz: "Narxlar", en: "Pricing" },
  "nav.blog": { uz: "Blog", en: "Blog" },
  "nav.resume": { uz: "Rezyume", en: "Resume" },
  "nav.contact": { uz: "Aloqa", en: "Contact" },

  // home
  "home.role": {
    uz: "Junior yangi boshlovchi",
    en: "Junior beginner",
  },
  "home.tagline": {
    uz: "Zamonaviy, tezkor va responsive web saytlar hamda web ilovalar yaratishga ixtisoslashgan Junior Frontend Developer.",
    en: "A Junior Frontend Developer specialized in building modern, fast, and responsive websites and web applications.",
  },
  "home.cta.projects": { uz: "Loyihalarni ko'rish", en: "View Projects" },
  "home.cta.contact": { uz: "Bog'lanish", en: "Contact Me" },
  "home.stats.projects": { uz: "Bajarilgan loyihalar", en: "Projects Completed" },
  "home.stats.since": { uz: "Frilanserlik boshlangan", en: "Freelancing since" },
  "home.stats.tech": { uz: "Asosiy texnologiyalar", en: "Core Technologies" },
  "home.stats.responsive": { uz: "Responsive dizayn", en: "Responsive Design" },
  "home.tech.title": { uz: "Ishlatadigan texnologiyalarim", en: "My Tech Stack" },
  "home.tech.sub": { uz: "Har kuni ishlatiladigan asboblar to'plami", en: "The toolkit I reach for every day" },
  "home.featured.title": { uz: "Tanlangan ishlar", en: "Featured Work" },
  "home.featured.sub": { uz: "So'nggi loyihalarim — tafsilotlar bilan tanishing", en: "Recent work — explore the details" },
  "home.featured.all": { uz: "Barcha loyihalar", en: "See all projects" },
  "home.why.title": { uz: "Nima uchun men bilan ishlaysiz", en: "Why Work With Me" },
  "home.why.1.t": { uz: "Tez yetkazib berish", en: "Fast Delivery" },
  "home.why.1.d": { uz: "Deadline'larga qat'iy amal qilaman va sifatni saqlab qolaman.", en: "Ship on time without compromising quality." },
  "home.why.2.t": { uz: "Piksel-aniq dizayn", en: "Pixel-Perfect Design" },
  "home.why.2.d": { uz: "Figma'dan kodgacha — har bir detal joyida.", en: "Figma to code with every detail preserved." },
  "home.why.3.t": { uz: "Toza va kengaytiriladigan kod", en: "Clean Scalable Code" },
  "home.why.3.d": { uz: "Kelajakda oson qo'llab-quvvatlanadigan arxitektura.", en: "Architecture that stays maintainable long-term." },
  "home.why.4.t": { uz: "Aniq muloqot", en: "Clear Communication" },
  "home.why.4.d": { uz: "Jarayonning har bosqichida ochiq va tushunarli.", en: "Transparent updates through every stage." },
  "home.closing.title": { uz: "Loyihangizni birga boshlaymizmi?", en: "Ready to start your project?" },
  "home.closing.sub": { uz: "G'oyangizni yuboring — 24 soat ichida javob beraman.", en: "Send your idea — I reply within 24 hours." },

  // about
  "about.title": { uz: "Men haqimda", en: "About Me" },
  "about.kicker": { uz: "Junior yangi boshlovchi · Mars IT School", en: "Junior beginner · Mars IT School" },
  "about.p1": {
    uz: "Men Ilyosxoja Usmonovman — zamonaviy web saytlar va interaktiv web ilovalarni yaratishga qiziqadigan Junior Frontend Developerman. Mars IT School'da o'qiyman va HTML, CSS, JavaScript, React.js hamda Tailwind CSS bilan ishlashni yaxshi ko'raman.",
    en: "I'm Ilyosxoja Usmonov — a Junior Frontend Developer passionate about building modern websites and interactive web apps. I study at Mars IT School and work daily with HTML, CSS, JavaScript, React.js and Tailwind CSS.",
  },
  "about.p2": {
    uz: "Frontend dunyosiga qiziqishim oddiy HTML sahifalardan boshlangan. Bugungi kunda esa full-stack loyihalar ustida ishlayman va backend integratsiyasini o'rganib boraman.",
    en: "My journey started with plain HTML pages. Today I'm building full-stack projects and steadily growing into backend integration.",
  },
  "about.p3": {
    uz: "Mening yondashuvim: toza kod, detalarga e'tibor va foydalanuvchi birinchi o'rinda. Har bir piksel maqsad bilan joylashgan bo'lishi kerak.",
    en: "My approach is simple: clean code, attention to detail, and user-first design. Every pixel should have a purpose.",
  },
  "about.p4": {
    uz: "Uzoq muddatli maqsadim — bilimli full-stack developer va ishonchli frilanser bo'lish, biznes va shaxsiy loyihalar uchun raqamli mahsulotlar yaratish.",
    en: "My long-term goal is to grow into a well-rounded full-stack developer and reliable freelancer creating digital products for businesses and personal brands.",
  },
  "about.skills": { uz: "Ko'nikma va asboblar", en: "Skills & Tools" },
  "about.edu": { uz: "Ta'lim va o'sish yo'li", en: "Education & Learning Journey" },
  "about.process": { uz: "Qanday ishlayman", en: "How I Work" },
  "about.personal": { uz: "Kod tashqarisida", en: "Beyond Code" },
  "about.personal.body": {
    uz: "Doim yangi narsa o'rganishni yaxshi ko'raman. Minimal dizayn, detalar va toza tartibga alohida qiziqaman.",
    en: "I love learning something new every day. Minimal design, small details, and clean order genuinely excite me.",
  },

  // projects
  "projects.title": { uz: "Loyihalar", en: "Projects" },
  "projects.intro": {
    uz: "Har bir loyiha — yechilgan muammo. Quyida oxirgi ishlarim va ular qanday yaratilgani.",
    en: "Every project is a solved problem. Below is a look at recent work and how each came to life.",
  },
  "projects.features": { uz: "Asosiy imkoniyatlar", en: "Key Features" },
  "projects.tech": { uz: "Texnologiyalar", en: "Tech Stack" },
  "projects.challenge": { uz: "Muammo va yechim", en: "Challenge & Solution" },
  "projects.result": { uz: "Natija", en: "Result" },
  "projects.visit": { uz: "Saytga o'tish", en: "Visit site" },
  "projects.more.title": { uz: "Yangi loyihalar tez orada", en: "More Projects Coming Soon" },
  "projects.more.sub": { uz: "Ustida ishlayotgan yangi ishlarim bilan tez orada bo'lishaman.", en: "New case studies are on the way — stay tuned." },

  // services
  "services.title": { uz: "Xizmatlar", en: "Services" },
  "services.sub": { uz: "Biznesingiz va g'oyangizga mos yechimlar.", en: "Solutions tailored to your business or idea." },
  "services.process": { uz: "Ish jarayonim", en: "My Process" },
  "services.faq": { uz: "Ko'p beriladigan savollar", en: "Frequently Asked Questions" },
  "services.includes": { uz: "Nimalarni o'z ichiga oladi:", en: "What's included:" },

  // pricing
  "pricing.title": { uz: "Narxlar", en: "Pricing" },
  "pricing.sub": { uz: "Ochiq va tushunarli paketlar. Shaxsiylashtirilgan takliflar ham mavjud.", en: "Transparent packages. Custom quotes on request." },
  "pricing.popular": { uz: "Eng mashhur", en: "Most Popular" },
  "pricing.choose": { uz: "Tanlash", en: "Choose plan" },
  "pricing.compare": { uz: "Paketlarni solishtiring", en: "Compare plans" },
  "pricing.custom": { uz: "Maxsus loyiha kerakmi?", en: "Custom project?" },
  "pricing.custom.body": { uz: "G'oyangiz noyob bo'lsa — men bilan bog'laning va maxsus taklif oling.", en: "If your idea is unique, get in touch for a custom quote." },

  // blog
  "blog.title": { uz: "Blog", en: "Blog" },
  "blog.sub": { uz: "Frontend, JavaScript va React haqida yozuvlar.", en: "Notes on frontend, JavaScript and React." },
  "blog.subscribe": { uz: "Telegram kanaliga a'zo bo'ling", en: "Follow on Telegram" },
  "blog.read": { uz: "Batafsil", en: "Read more" },
  "blog.min": { uz: "daqiqa", en: "min read" },

  // resume
  "resume.title": { uz: "Rezyume", en: "Resume" },
  "resume.summary": { uz: "Qisqacha ma'lumot", en: "Summary" },
  "resume.summary.body": {
    uz: "Junior Frontend Developer, React va Tailwind CSS bilan zamonaviy interfeyslar yaratadi. Full-stack tomon o'sib bormoqda.",
    en: "Junior Frontend Developer crafting modern interfaces with React and Tailwind CSS, growing toward full-stack.",
  },
  "resume.education": { uz: "Ta'lim", en: "Education" },
  "resume.skills": { uz: "Texnik ko'nikmalar", en: "Technical Skills" },
  "resume.exp": { uz: "Frilanser tajribasi", en: "Freelance Experience" },
  "resume.lang": { uz: "Tillar", en: "Languages" },
  "resume.download": { uz: "CV yuklab olish", en: "Download CV" },

  // contact
  "contact.title": { uz: "Aloqa", en: "Get in touch" },
  "contact.sub": { uz: "Yangi loyihalar uchun ochiqman. Yozing — tez javob beraman.", en: "Open for new projects. Drop a message — I'll get back fast." },
  "contact.form.name": { uz: "Ismingiz", en: "Your name" },
  "contact.form.email": { uz: "Email", en: "Email" },
  "contact.form.message": { uz: "Xabaringiz", en: "Your message" },
  "contact.form.send": { uz: "Yuborish", en: "Send message" },
  "contact.form.sent": { uz: "Xabaringiz yuborildi. Tez orada javob beraman!", en: "Message received. I'll reply shortly!" },
  "contact.next": { uz: "Keyingi qadamlar", en: "What Happens Next" },
  "contact.available": { uz: "Hozirda frilans loyihalari uchun ochiqman", en: "Currently available for freelance projects" },
  "contact.closing": { uz: "Keling, birga ajoyib narsa yaratamiz.", en: "Let's build something great together." },

  // footer
  "footer.tag": { uz: "Frontend Developer · Toshkent, O'zbekiston", en: "Frontend Developer · Tashkent, Uzbekistan" },
  "footer.rights": { uz: "Barcha huquqlar himoyalangan.", en: "All rights reserved." },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "uz" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key);

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
