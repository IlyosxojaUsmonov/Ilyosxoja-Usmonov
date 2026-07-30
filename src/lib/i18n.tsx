import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "uz" | "en" | "ru";

export const LANGS: Lang[] = ["uz", "en", "ru"];

type Dict = Record<string, Record<Lang, string>>;

export const dict: Dict = {
  // nav
  "nav.home": { uz: "Bosh sahifa", en: "Home", ru: "Главная" },
  "nav.about": { uz: "Men haqimda", en: "About", ru: "Обо мне" },
  "nav.projects": { uz: "Loyihalar", en: "Projects", ru: "Проекты" },
  "nav.services": { uz: "Xizmatlar", en: "Services", ru: "Услуги" },
  "nav.pricing": { uz: "Narxlar", en: "Pricing", ru: "Цены" },
  "nav.blog": { uz: "Blog", en: "Blog", ru: "Блог" },
  "nav.resume": { uz: "Rezyume", en: "Resume", ru: "Резюме" },
  "nav.contact": { uz: "Aloqa", en: "Contact", ru: "Контакты" },

  // theme
  "theme.toggle": { uz: "Mavzuni o'zgartirish", en: "Toggle theme", ru: "Переключить тему" },
  "theme.light": { uz: "Yorug' rejim", en: "Light mode", ru: "Светлая тема" },
  "theme.dark": { uz: "Qorong'u rejim", en: "Dark mode", ru: "Тёмная тема" },

  // home
  "home.role": { uz: "Junior yangi boshlovchi", en: "Junior beginner", ru: "Junior начинающий" },
  "home.tagline": {
    uz: "Zamonaviy, tezkor va responsive web saytlar hamda web ilovalar yaratishga ixtisoslashgan Junior Frontend Developer.",
    en: "A Junior Frontend Developer specialized in building modern, fast, and responsive websites and web applications.",
    ru: "Junior Frontend Developer, специализирующийся на создании современных, быстрых и адаптивных сайтов и веб-приложений.",
  },
  "home.cta.projects": { uz: "Loyihalarni ko'rish", en: "View Projects", ru: "Смотреть проекты" },
  "home.cta.contact": { uz: "Bog'lanish", en: "Contact Me", ru: "Связаться" },
  "home.stats.projects": { uz: "Bajarilgan loyihalar", en: "Projects Completed", ru: "Завершённых проектов" },
  "home.stats.since": { uz: "Frilanserlik boshlangan", en: "Freelancing since", ru: "Фриланс с" },
  "home.stats.tech": { uz: "Asosiy texnologiyalar", en: "Core Technologies", ru: "Основные технологии" },
  "home.stats.responsive": { uz: "Responsive dizayn", en: "Responsive Design", ru: "Адаптивный дизайн" },
  "home.tech.title": { uz: "Ishlatadigan texnologiyalarim", en: "My Tech Stack", ru: "Мой стек технологий" },
  "home.tech.sub": { uz: "Har kuni ishlatiladigan asboblar to'plami", en: "The toolkit I reach for every day", ru: "Инструменты, которые я использую каждый день" },
  "home.featured.title": { uz: "Tanlangan ishlar", en: "Featured Work", ru: "Избранные работы" },
  "home.featured.sub": { uz: "So'nggi loyihalarim — tafsilotlar bilan tanishing", en: "Recent work — explore the details", ru: "Недавние проекты — изучите детали" },
  "home.featured.all": { uz: "Barcha loyihalar", en: "See all projects", ru: "Все проекты" },
  "home.why.title": { uz: "Nima uchun men bilan ishlaysiz", en: "Why Work With Me", ru: "Почему работать со мной" },
  "home.why.1.t": { uz: "Tez yetkazib berish", en: "Fast Delivery", ru: "Быстрая сдача" },
  "home.why.1.d": { uz: "Deadline'larga qat'iy amal qilaman va sifatni saqlab qolaman.", en: "Ship on time without compromising quality.", ru: "Сдаю в срок без потери качества." },
  "home.why.2.t": { uz: "Piksel-aniq dizayn", en: "Pixel-Perfect Design", ru: "Пиксель-перфект дизайн" },
  "home.why.2.d": { uz: "Figma'dan kodgacha — har bir detal joyida.", en: "Figma to code with every detail preserved.", ru: "От Figma до кода — каждая деталь на месте." },
  "home.why.3.t": { uz: "Toza va kengaytiriladigan kod", en: "Clean Scalable Code", ru: "Чистый масштабируемый код" },
  "home.why.3.d": { uz: "Kelajakda oson qo'llab-quvvatlanadigan arxitektura.", en: "Architecture that stays maintainable long-term.", ru: "Архитектура, которую легко поддерживать." },
  "home.why.4.t": { uz: "Aniq muloqot", en: "Clear Communication", ru: "Чёткая коммуникация" },
  "home.why.4.d": { uz: "Jarayonning har bosqichida ochiq va tushunarli.", en: "Transparent updates through every stage.", ru: "Прозрачные обновления на каждом этапе." },
  "home.closing.title": { uz: "Loyihangizni birga boshlaymizmi?", en: "Ready to start your project?", ru: "Готовы начать проект?" },
  "home.closing.sub": { uz: "G'oyangizni yuboring — 24 soat ichida javob beraman.", en: "Send your idea — I reply within 24 hours.", ru: "Отправьте идею — отвечу в течение 24 часов." },
  "home.available": { uz: "Frilans uchun ochiq", en: "Available for freelance", ru: "Открыт для фриланса" },

  // about
  "about.title": { uz: "Men haqimda", en: "About Me", ru: "Обо мне" },
  "about.kicker": { uz: "Junior yangi boshlovchi · Mars IT School", en: "Junior beginner · Mars IT School", ru: "Junior начинающий · Mars IT School" },
  "about.p1": {
    uz: "Men Ilyosxoja Usmonovman — zamonaviy web saytlar va interaktiv web ilovalarni yaratishga qiziqadigan Junior Frontend Developerman. Mars IT School'da o'qiyman va HTML, CSS, JavaScript, React.js hamda Tailwind CSS bilan ishlashni yaxshi ko'raman.",
    en: "I'm Ilyosxoja Usmonov — a Junior Frontend Developer passionate about building modern websites and interactive web apps. I study at Mars IT School and work daily with HTML, CSS, JavaScript, React.js and Tailwind CSS.",
    ru: "Я Ilyosxoja Usmonov — Junior Frontend Developer, увлечённый созданием современных сайтов и интерактивных веб-приложений. Учусь в Mars IT School и ежедневно работаю с HTML, CSS, JavaScript, React.js и Tailwind CSS.",
  },
  "about.p2": {
    uz: "Frontend dunyosiga qiziqishim oddiy HTML sahifalardan boshlangan. Bugungi kunda esa full-stack loyihalar ustida ishlayman va backend integratsiyasini o'rganib boraman.",
    en: "My journey started with plain HTML pages. Today I'm building full-stack projects and steadily growing into backend integration.",
    ru: "Мой путь начался с простых HTML-страниц. Сегодня я работаю над full-stack проектами и постепенно осваиваю backend-интеграцию.",
  },
  "about.p3": {
    uz: "Mening yondashuvim: toza kod, detalarga e'tibor va foydalanuvchi birinchi o'rinda. Har bir piksel maqsad bilan joylashgan bo'lishi kerak.",
    en: "My approach is simple: clean code, attention to detail, and user-first design. Every pixel should have a purpose.",
    ru: "Мой подход прост: чистый код, внимание к деталям и дизайн, ориентированный на пользователя. Каждый пиксель должен иметь цель.",
  },
  "about.p4": {
    uz: "Uzoq muddatli maqsadim — bilimli full-stack developer va ishonchli frilanser bo'lish, biznes va shaxsiy loyihalar uchun raqamli mahsulotlar yaratish.",
    en: "My long-term goal is to grow into a well-rounded full-stack developer and reliable freelancer creating digital products for businesses and personal brands.",
    ru: "Моя долгосрочная цель — стать опытным full-stack разработчиком и надёжным фрилансером, создающим цифровые продукты для бизнеса и личных брендов.",
  },
  "about.skills": { uz: "Ko'nikma va asboblar", en: "Skills & Tools", ru: "Навыки и инструменты" },
  "about.edu": { uz: "Ta'lim va o'sish yo'li", en: "Education & Learning Journey", ru: "Образование и путь развития" },
  "about.process": { uz: "Qanday ishlayman", en: "How I Work", ru: "Как я работаю" },
  "about.personal": { uz: "Kod tashqarisida", en: "Beyond Code", ru: "За пределами кода" },
  "about.personal.body": {
    uz: "Doim yangi narsa o'rganishni yaxshi ko'raman. Minimal dizayn, detalar va toza tartibga alohida qiziqaman.",
    en: "I love learning something new every day. Minimal design, small details, and clean order genuinely excite me.",
    ru: "Люблю учиться чему-то новому каждый день. Минималистичный дизайн, детали и чистый порядок меня вдохновляют.",
  },
  "about.present": { uz: "Hozirgi", en: "Present", ru: "Настоящее время" },
  "about.edu.desc": {
    uz: "HTML, CSS, JavaScript, React va Tailwind CSS bo'yicha chuqur o'rganish.",
    en: "Deep-dive into HTML, CSS, JavaScript, React and Tailwind CSS.",
    ru: "Углублённое изучение HTML, CSS, JavaScript, React и Tailwind CSS.",
  },
  "about.freelance.start": { uz: "Frilans faoliyati boshlanishi", en: "Freelance journey begins", ru: "Начало фриланс-деятельности" },
  "about.freelance.desc": {
    uz: "Birinchi mijoz loyihalari: AdBlogger.uz, Dugoba Resort.",
    en: "First client work: AdBlogger.uz, Dugoba Resort.",
    ru: "Первые клиентские проекты: AdBlogger.uz, Dugoba Resort.",
  },
  "about.next": { uz: "Keyingi bosqich", en: "Next milestone", ru: "Следующий этап" },
  "about.fullstack": { uz: "Full-stack yo'nalishida o'sish", en: "Growing into full-stack", ru: "Рост в направлении full-stack" },

  // projects
  "projects.title": { uz: "Loyihalar", en: "Projects", ru: "Проекты" },
  "projects.intro": {
    uz: "Har bir loyiha — yechilgan muammo. Quyida oxirgi ishlarim va ular qanday yaratilgani.",
    en: "Every project is a solved problem. Below is a look at recent work and how each came to life.",
    ru: "Каждый проект — это решённая задача. Ниже — мои недавние работы и как они были созданы.",
  },
  "projects.kicker": { uz: "Ish portfeli", en: "Selected work", ru: "Портфолио" },
  "projects.features": { uz: "Asosiy imkoniyatlar", en: "Key Features", ru: "Ключевые возможности" },
  "projects.tech": { uz: "Texnologiyalar", en: "Tech Stack", ru: "Технологии" },
  "projects.challenge": { uz: "Muammo va yechim", en: "Challenge & Solution", ru: "Задача и решение" },
  "projects.result": { uz: "Natija", en: "Result", ru: "Результат" },
  "projects.visit": { uz: "Saytga o'tish", en: "Visit site", ru: "Перейти на сайт" },
  "projects.more.title": { uz: "Yangi loyihalar tez orada", en: "More Projects Coming Soon", ru: "Новые проекты скоро" },
  "projects.more.sub": { uz: "Ustida ishlayotgan yangi ishlarim bilan tez orada bo'lishaman.", en: "New case studies are on the way — stay tuned.", ru: "Новые кейсы уже в работе — следите за обновлениями." },

  // services
  "services.title": { uz: "Xizmatlar", en: "Services", ru: "Услуги" },
  "services.sub": { uz: "Biznesingiz va g'oyangizga mos yechimlar.", en: "Solutions tailored to your business or idea.", ru: "Решения, адаптированные под ваш бизнес или идею." },
  "services.kicker": { uz: "Nima taklif qilaman", en: "What I offer", ru: "Что я предлагаю" },
  "services.process": { uz: "Ish jarayonim", en: "My Process", ru: "Мой процесс работы" },
  "services.faq": { uz: "Ko'p beriladigan savollar", en: "Frequently Asked Questions", ru: "Часто задаваемые вопросы" },
  "services.includes": { uz: "Nimalarni o'z ichiga oladi:", en: "What's included:", ru: "Что включено:" },

  // pricing
  "pricing.title": { uz: "Narxlar", en: "Pricing", ru: "Цены" },
  "pricing.sub": { uz: "Ochiq va tushunarli paketlar. Shaxsiylashtirilgan takliflar ham mavjud.", en: "Transparent packages. Custom quotes on request.", ru: "Прозрачные пакеты. Индивидуальные предложения по запросу." },
  "pricing.kicker": { uz: "Paketlar", en: "Packages", ru: "Пакеты" },
  "pricing.popular": { uz: "Eng mashhur", en: "Most Popular", ru: "Самый популярный" },
  "pricing.choose": { uz: "Tanlash", en: "Choose plan", ru: "Выбрать" },
  "pricing.compare": { uz: "Paketlarni solishtiring", en: "Compare plans", ru: "Сравнить пакеты" },
  "pricing.custom": { uz: "Maxsus loyiha kerakmi?", en: "Custom project?", ru: "Нужен индивидуальный проект?" },
  "pricing.custom.body": { uz: "G'oyangiz noyob bo'lsa — men bilan bog'laning va maxsus taklif oling.", en: "If your idea is unique, get in touch for a custom quote.", ru: "Если ваша идея уникальна — свяжитесь со мной для индивидуального предложения." },
  "pricing.perProject": { uz: "loyiha", en: "project", ru: "проект" },

  // blog
  "blog.title": { uz: "Blog", en: "Blog", ru: "Блог" },
  "blog.sub": { uz: "Frontend, JavaScript va React haqida yozuvlar.", en: "Notes on frontend, JavaScript and React.", ru: "Заметки о frontend, JavaScript и React." },
  "blog.kicker": { uz: "Yozuvlar", en: "Writing", ru: "Статьи" },
  "blog.subscribe": { uz: "Telegram kanaliga a'zo bo'ling", en: "Follow on Telegram", ru: "Подписаться в Telegram" },
  "blog.read": { uz: "Batafsil", en: "Read more", ru: "Подробнее" },
  "blog.min": { uz: "daqiqa", en: "min read", ru: "мин чтения" },
  "blog.telegram.sub": {
    uz: "Yangi maqolalar va coding kunlik yozuvlar uchun Telegram kanalimga qo'shiling.",
    en: "Join my Telegram channel for new articles and daily coding notes.",
    ru: "Подпишитесь на мой Telegram-канал для новых статей и ежедневных заметок о коде.",
  },

  // resume
  "resume.title": { uz: "Rezyume", en: "Resume", ru: "Резюме" },
  "resume.summary": { uz: "Qisqacha ma'lumot", en: "Summary", ru: "Кратко" },
  "resume.summary.body": {
    uz: "Junior Frontend Developer, React va Tailwind CSS bilan zamonaviy interfeyslar yaratadi. Full-stack tomon o'sib bormoqda.",
    en: "Junior Frontend Developer crafting modern interfaces with React and Tailwind CSS, growing toward full-stack.",
    ru: "Junior Frontend Developer, создающий современные интерфейсы на React и Tailwind CSS, развивается в направлении full-stack.",
  },
  "resume.education": { uz: "Ta'lim", en: "Education", ru: "Образование" },
  "resume.skills": { uz: "Texnik ko'nikmalar", en: "Technical Skills", ru: "Технические навыки" },
  "resume.exp": { uz: "Frilanser tajribasi", en: "Freelance Experience", ru: "Фриланс-опыт" },
  "resume.lang": { uz: "Tillar", en: "Languages", ru: "Языки" },
  "resume.download": { uz: "CV yuklab olish", en: "Download CV", ru: "Скачать CV" },
  "resume.open": { uz: "Ochib ko'rish", en: "Open preview", ru: "Открыть" },
  "resume.present": { uz: "hozirgi", en: "present", ru: "настоящее время" },
  "resume.testimonials": { uz: "Mijozlar fikri (namuna)", en: "Testimonials (sample)", ru: "Отзывы (пример)" },
  "resume.testimonial.text": {
    uz: "Loyiha vaqtida yetkazildi, natija kutganimdan yaxshi chiqdi.",
    en: "Delivered on time and the result exceeded expectations.",
    ru: "Проект сдан в срок, результат превзошёл ожидания.",
  },
  "resume.sampleClient": { uz: "Namuna mijoz", en: "Sample client", ru: "Пример клиента" },

  // contact
  "contact.title": { uz: "Aloqa", en: "Get in touch", ru: "Связаться" },
  "contact.sub": { uz: "Yangi loyihalar uchun ochiqman. Yozing — tez javob beraman.", en: "Open for new projects. Drop a message — I'll get back fast.", ru: "Открыт для новых проектов. Напишите — отвечу быстро." },
  "contact.kicker": { uz: "Yozing", en: "Say hello", ru: "Напишите" },
  "contact.form.name": { uz: "Ismingiz", en: "Your name", ru: "Ваше имя" },
  "contact.form.email": { uz: "Email", en: "Email", ru: "Email" },
  "contact.form.message": { uz: "Xabaringiz", en: "Your message", ru: "Ваше сообщение" },
  "contact.form.send": { uz: "Yuborish", en: "Send message", ru: "Отправить" },
  "contact.form.sent": { uz: "Xabaringiz yuborildi. Tez orada javob beraman!", en: "Message received. I'll reply shortly!", ru: "Сообщение получено. Скоро отвечу!" },
  "contact.next": { uz: "Keyingi qadamlar", en: "What Happens Next", ru: "Что дальше" },
  "contact.available": { uz: "Hozirda frilans loyihalari uchun ochiqman", en: "Currently available for freelance projects", ru: "Сейчас открыт для фриланс-проектов" },
  "contact.closing": { uz: "Keling, birga ajoyib narsa yaratamiz.", en: "Let's build something great together.", ru: "Давайте создадим что-то отличное вместе." },
  "contact.telegramChannel": { uz: "Telegram kanal", en: "Telegram channel", ru: "Telegram-канал" },
  "contact.step1": { uz: "24 soat ichida javob beraman", en: "I'll respond within 24 hours", ru: "Отвечу в течение 24 часов" },
  "contact.step2": { uz: "Loyihani muhokama qilamiz", en: "We'll discuss your project", ru: "Обсудим ваш проект" },
  "contact.step3": { uz: "Taklif va vaqt jadvalini yuboraman", en: "You'll get a proposal & timeline", ru: "Отправлю предложение и сроки" },

  // footer
  "footer.tag": { uz: "Frontend Developer · Toshkent, O'zbekiston", en: "Frontend Developer · Tashkent, Uzbekistan", ru: "Frontend Developer · Ташкент, Узбекистан" },
  "footer.rights": { uz: "Barcha huquqlar himoyalangan.", en: "All rights reserved.", ru: "Все права защищены." },
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
    if (saved && LANGS.includes(saved)) setLangState(saved);
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

export function tr<T extends Record<Lang, string>>(map: T, lang: Lang): string {
  return map[lang];
}

export function trList<T extends Record<Lang, string[]>>(map: T, lang: Lang): string[] {
  return map[lang];
}
