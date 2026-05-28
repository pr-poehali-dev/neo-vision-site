/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";



const HERO_IMAGE = "https://cdn.poehali.dev/projects/92d02ca1-0bdd-44ca-ab36-98f14d8745e6/files/cf1ff47e-8609-4655-81c0-6f22f7926deb.jpg";
const IT_IMAGE = "https://cdn.poehali.dev/projects/92d02ca1-0bdd-44ca-ab36-98f14d8745e6/files/cb4a132e-1a71-465f-b2b6-1e37c68c491f.jpg";
const BUILD_IMAGE = "https://cdn.poehali.dev/projects/92d02ca1-0bdd-44ca-ab36-98f14d8745e6/files/e986aa74-d61a-4837-9428-e3f024d58ded.jpg";

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Главная", href: "#hero" },
    { label: "Строительство", href: "#construction" },
    { label: "ИТ-решения", href: "#it" },
    { label: "Технологии", href: "#tech" },
    { label: "Цены", href: "#prices" },
    { label: "Блог", href: "#blog" },
    { label: "О компании", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-dark-border" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center">
          <img src="https://cdn.poehali.dev/projects/92d02ca1-0bdd-44ca-ab36-98f14d8745e6/bucket/d6e6281f-78aa-4a8d-acf1-215c6f56d717.png" alt="Нео-Вижен" className="h-10 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-neon transition-colors duration-200 font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#consult" className="hidden lg:block btn-neon px-5 py-2 rounded-lg text-sm font-semibold">
          Консультация
        </a>

        <button className="lg:hidden text-gray-400 hover:text-neon" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden glass border-t border-dark-border px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-300 hover:text-neon py-1 text-sm" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#consult" className="btn-neon text-center px-4 py-2 rounded-lg text-sm font-semibold mt-2" onClick={() => setMenuOpen(false)}>
            Получить консультацию
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Нео-Вижен" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/70 via-dark-bg/40 to-dark-bg" />
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-neon/10 animate-rotate-slow hidden xl:block" />
      <div className="absolute top-1/3 right-16 w-40 h-40 rounded-full border border-neon/5 animate-rotate-slow hidden xl:block" style={{ animationDirection: "reverse", animationDuration: "14s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="tech-tag mb-6 inline-block">ООО «Нео-Вижен» — Екатеринбург</div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none mb-6 animate-slide-up">
            СТРОИТЕЛЬСТВО<br />
            <span className="neon-text">&amp; ИТ:</span>{" "}
            <span className="text-white">СОЗДАЁМ</span><br />
            <span className="neon-gold">УМНЫЕ ОБЪЕКТЫ</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-slide-up delay-200">
            Синергия современного строительства и цифровых технологий. BIM-моделирование, IoT-системы и облачные платформы для объектов любого масштаба.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
            <a href="#consult" className="btn-gold px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
              <Icon name="MessageCircle" size={18} />
              Получить консультацию
            </a>
            <a href="#construction" className="btn-neon px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2">
              <Icon name="ArrowRight" size={18} />
              Наши услуги
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up delay-500">
            {[
              { value: "150+", label: "Объектов сдано" },
              { value: "12 лет", label: "На рынке" },
              { value: "98%", label: "Клиентов довольны" },
              { value: "40+", label: "Специалистов" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-neon/30 pl-4">
                <div className="font-display text-2xl font-bold neon-text ticker">{s.value}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-gray-600 text-xs tracking-widest uppercase">Прокрутить</span>
        <Icon name="ChevronDown" size={20} className="text-neon" />
      </div>
    </section>
  );
}

// ── Services Overview ─────────────────────────────────────────────────────────
function ServicesOverview() {
  return (
    <section className="py-20 relative">
      <div className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="tech-tag mb-4 inline-block">Направления деятельности</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            ДВА НАПРАВЛЕНИЯ —<br />
            <span className="neon-text">ОДИН ПАРТНЁР</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <a href="#construction" className="group relative overflow-hidden rounded-2xl border border-dark-border card-hover block">
            <img src={BUILD_IMAGE} alt="Строительство" className="w-full h-64 object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/60 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center">
                  <Icon name="Building2" size={20} className="text-neon" />
                </div>
                <span className="tech-tag">Строительство</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-2">ОТ ПРОЕКТА ДО СДАЧИ</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Промышленное и гражданское строительство, реконструкция, инженерные сети. Полный цикл под ключ.</p>
              <div className="flex items-center gap-2 mt-4 text-neon text-sm font-semibold group-hover:gap-4 transition-all">
                Подробнее <Icon name="ArrowRight" size={16} />
              </div>
            </div>
          </a>

          <a href="#it" className="group relative overflow-hidden rounded-2xl border border-dark-border card-hover block">
            <img src={IT_IMAGE} alt="ИТ-решения" className="w-full h-64 object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/60 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-neon-gold/10 border border-neon-gold/30 flex items-center justify-center">
                  <Icon name="Cpu" size={20} className="text-neon-gold" />
                </div>
                <span className="gold-tag">ИТ-решения</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-2">ЦИФРОВИЗАЦИЯ ПРОЦЕССОВ</h3>
              <p className="text-gray-400 text-sm leading-relaxed">BIM-моделирование, IoT для стройплощадок, цифровые двойники, облачные системы управления.</p>
              <div className="flex items-center gap-2 mt-4 text-neon-gold text-sm font-semibold group-hover:gap-4 transition-all">
                Подробнее <Icon name="ArrowRight" size={16} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Construction Section ──────────────────────────────────────────────────────
function Construction() {
  const services = [
    {
      icon: "Factory",
      title: "Промышленное строительство",
      desc: "Заводы, склады, производственные комплексы. Проектирование и строительство с соблюдением всех нормативов.",
      price: "от 25 000 ₽/м²",
      tags: ["Проект", "Надзор", "Сдача"],
    },
    {
      icon: "Building",
      title: "Гражданское строительство",
      desc: "Жилые дома, офисные центры, торговые площади. Современные материалы и технологии.",
      price: "от 35 000 ₽/м²",
      tags: ["BIM", "Дроны", "Смарт"],
    },
    {
      icon: "Wrench",
      title: "Реконструкция и ремонт",
      desc: "Капитальный ремонт, реновация фасадов, перепланировка с учётом несущих конструкций.",
      price: "от 12 000 ₽/м²",
      tags: ["Обследование", "3D-план"],
    },
    {
      icon: "Zap",
      title: "Инженерные сети",
      desc: "Электроснабжение, водоснабжение, вентиляция, слаботочные системы и автоматизация.",
      price: "по смете",
      tags: ["Монтаж", "Пусконаладка"],
    },
    {
      icon: "Bolt",
      title: "Объекты энергетики",
      desc: "Строительство подстанций, трансформаторных пунктов, линий электропередачи, объектов возобновляемой энергетики.",
      price: "по смете",
      tags: ["ЛЭП", "Подстанции", "ВИЭ"],
    },
  ];

  const projects = [
    { title: "Бизнес-центр «Горизонт»", area: "15 000 м²", months: "18 мес.", tag: "Офисный центр" },
    { title: "Логистический комплекс ТЭК", area: "32 000 м²", months: "24 мес.", tag: "Промышленный" },
    { title: "ЖК «Северный»", area: "8 500 м²", months: "14 мес.", tag: "Жилой" },
  ];

  return (
    <section id="construction" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="tech-tag mb-4 inline-block">Строительные услуги</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              СТРОИТЕЛЬСТВО<br />
              <span className="neon-text">ПОД КЛЮЧ</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Используем дроны для мониторинга, 3D-печать элементов конструкций и «умные» материалы нового поколения.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div key={s.title} className="bg-dark-card rounded-2xl border border-dark-border p-6 card-hover flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center">
                <Icon name={s.icon as any} size={24} className="text-neon" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto">
                {s.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="text-neon font-bold text-sm">{s.price}</div>
            </div>
          ))}
        </div>

        <div className="bg-dark-card rounded-2xl border border-dark-border p-8">
          <h3 className="font-display text-2xl font-bold text-white mb-6">РЕАЛИЗОВАННЫЕ ОБЪЕКТЫ</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="border border-dark-border rounded-xl p-5 hover:border-neon/30 transition-colors">
                <span className="gold-tag mb-3 inline-block">{p.tag}</span>
                <h4 className="font-semibold text-white mb-3">{p.title}</h4>
                <div className="flex gap-6">
                  <div>
                    <div className="text-neon font-bold text-lg">{p.area}</div>
                    <div className="text-gray-500 text-xs">Площадь</div>
                  </div>
                  <div>
                    <div className="text-neon-gold font-bold text-lg">{p.months}</div>
                    <div className="text-gray-500 text-xs">Срок</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── IT Solutions ───────────────────────────────────────────────────────────────
function ITSolutions() {
  const solutions = [
    { icon: "Box", title: "BIM-моделирование", desc: "Полная цифровая модель объекта с визуализацией, коллизиями и спецификациями материалов.", color: "neon" },
    { icon: "LayoutDashboard", title: "Системы управления", desc: "Внедрение 1С, Битрикс24 и специализированных платформ для строительных компаний.", color: "neon" },
    { icon: "Wifi", title: "IoT для стройплощадок", desc: "Датчики контроля, видеонаблюдение с аналитикой, контроль доступа в реальном времени.", color: "gold" },
    { icon: "Layers", title: "Цифровые двойники", desc: "Виртуальная копия здания для мониторинга инженерных систем и планирования ТО.", color: "gold" },
    { icon: "Cloud", title: "Облачный документооборот", desc: "Хранение проектной документации, согласование и контроль версий онлайн.", color: "neon" },
    { icon: "Shield", title: "Кибербезопасность", desc: "Защита строительных данных, разграничение прав доступа, аудит безопасности.", color: "neon" },
    { icon: "Smartphone", title: "Мобильные приложения", desc: "Разработка приложений для прорабов, заказчиков и инспекторов: фотоотчёты, задачи, контроль сроков — всё в смартфоне.", color: "gold" },
    { icon: "BarChart3", title: "Аналитика и отчётность", desc: "Дашборды и BI-системы для руководителей: ключевые показатели стройки в реальном времени.", color: "neon" },
    { icon: "ScanLine", title: "Геодезия и 3D-сканирование", desc: "Лазерное сканирование объектов, создание точных облаков точек и обмерных чертежей.", color: "gold" },
    { icon: "GitBranch", title: "Интеграции и API", desc: "Подключение строительного ПО к ERP, CRM и государственным системам (ЕГРН, ГИС ЖКХ).", color: "neon" },
    { icon: "MonitorSmartphone", title: "Веб-порталы для объектов", desc: "Личный кабинет для заказчика: онлайн-мониторинг хода строительства, документы, финансы.", color: "gold" },
  ];

  return (
    <section id="it" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid xl:grid-cols-2 gap-16 items-start">
          <div>
            <div className="gold-tag mb-4 inline-block">ИТ-решения</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              ЦИФРОВИЗАЦИЯ<br />
              <span className="neon-gold">СТРОИТЕЛЬСТВА</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Внедряем технологии, которые сокращают сроки строительства на 20%, снижают потери материалов на 15% и обеспечивают полный контроль над проектом в реальном времени.
            </p>

            <div className="bg-dark-card rounded-2xl border border-neon-gold/20 p-6">
              <div className="gold-tag mb-3 inline-block">Кейс</div>
              <h4 className="font-semibold text-white mb-3">IoT на ЖК «Северный»</h4>
              <div className="space-y-3">
                {[
                  { label: "Снижение потерь материалов", value: "−15%" },
                  { label: "Контроль доступа", value: "24/7" },
                  { label: "Экономия времени", value: "−20%" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{r.label}</span>
                    <span className="text-neon-gold font-bold">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.map((s) => (
              <div key={s.title} className="bg-dark-card rounded-xl border border-dark-border p-5 card-hover">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${s.color === "gold" ? "bg-neon-gold/10 border border-neon-gold/20" : "bg-neon/10 border border-neon/20"}`}>
                  <Icon name={s.icon as any} size={20} className={s.color === "gold" ? "text-neon-gold" : "text-neon"} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{s.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Technologies ──────────────────────────────────────────────────────────────
function Technologies() {
  const techs = [
    { name: "BIM / Autodesk Revit", desc: "Полноценное 3D-моделирование с расчётом коллизий, спецификаций и сметной стоимости. Передача модели заказчику на всём жизненном цикле здания.", icon: "Box", level: 95 },
    { name: "IoT & Сенсорные сети", desc: "Датчики температуры, влажности, вибрации, RFID-метки на материалах, системы видеоаналитики — полный мониторинг площадки 24/7.", icon: "Wifi", level: 88 },
    { name: "Облачные платформы", desc: "Развёртывание на Yandex Cloud, интеграция с 1С и Битрикс24, мобильные приложения для прорабов и заказчиков.", icon: "Cloud", level: 92 },
    { name: "Цифровые двойники", desc: "Создание виртуального двойника объекта для мониторинга инженерных систем, предиктивного обслуживания и оптимизации энергопотребления.", icon: "Layers", level: 80 },
    { name: "Дроны и аэрофотосъёмка", desc: "Регулярный обход строительной площадки, создание ортофотопланов и 3D-моделей рельефа, контроль хода строительства.", icon: "Plane", level: 85 },
    { name: "AI & Видеоаналитика", desc: "Автоматическое распознавание нарушений ТБ на площадке, подсчёт рабочих и техники, детектирование аномалий.", icon: "Brain", level: 75 },
  ];

  return (
    <section id="tech" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="tech-tag mb-4 inline-block">Технологический стек</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            ТЕХНОЛОГИИ,<br />
            <span className="neon-text">КОТОРЫЕ МЫ ИСПОЛЬЗУЕМ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {techs.map((t) => (
            <div key={t.name} className="bg-dark-card rounded-2xl border border-dark-border p-6 card-hover">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={t.icon as any} size={22} className="text-neon" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">{t.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-dark-border rounded-full overflow-hidden">
                      <div className="h-full shimmer-bar rounded-full" style={{ width: `${t.level}%` }} />
                    </div>
                    <span className="text-neon text-xs font-bold">{t.level}%</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Promotions ────────────────────────────────────────────────────────────────
function Promotions() {
  const promos = [
    { badge: "🔥 Акция", title: "Бесплатный ИТ-аудит", desc: "Для строительных проектов от 5 000 м² — бесплатный аудит ИТ-инфраструктуры и рекомендации по оптимизации.", until: "До 31 июля 2026", cta: "Получить аудит", color: "gold" },
    { badge: "💡 Спецпредложение", title: "BIM под ключ −20%", desc: "При заказе BIM-моделирования совместно со строительством объекта — скидка 20% на ИТ-блок.", until: "До 30 июня 2026", cta: "Узнать подробнее", color: "neon" },
    { badge: "⚡ Быстрый старт", title: "IoT за 2 недели", desc: "Развёртывание базовой IoT-системы контроля на стройплощадке всего за 2 недели. Фиксированная цена.", until: "Постоянное предложение", cta: "Рассчитать стоимость", color: "neon" },
  ];

  return (
    <section id="promos" className="py-20 relative">
      <div className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="gold-tag mb-4 inline-block">Актуальные предложения</div>
          <h2 className="font-display text-4xl font-bold text-white">
            АКЦИИ И<br />
            <span className="neon-gold">СПЕЦПРЕДЛОЖЕНИЯ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((p) => (
            <div key={p.title} className={`bg-dark-card rounded-2xl p-6 flex flex-col gap-4 ${p.color === "gold" ? "border border-neon-gold/30" : "neon-border"}`}>
              <div className="text-sm font-semibold">{p.badge}</div>
              <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="text-gray-600 text-xs">{p.until}</div>
              <a href="#consult" className={`text-center py-3 rounded-xl font-semibold text-sm transition-all ${p.color === "gold" ? "btn-gold" : "btn-neon"}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Prices ────────────────────────────────────────────────────────────────────
function Prices() {
  const [calcType, setCalcType] = useState("office");
  const [area, setArea] = useState(500);
  const [services, setServices] = useState<string[]>([]);

  const PRICE_PER_M2: Record<string, number> = {
    office: 38000,
    warehouse: 26000,
    residential: 42000,
    industrial: 28000,
  };

  const IT_ADDONS: Record<string, number> = {
    bim: 450,
    iot: 320,
    twin: 280,
    cloud: 150,
  };

  const itCost = services.reduce((s, k) => s + (IT_ADDONS[k] || 0) * area, 0);
  const buildCost = PRICE_PER_M2[calcType] * area;
  const total = buildCost + itCost;

  const toggleService = (k: string) =>
    setServices((prev) => prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]);

  const typeLabels: Record<string, string> = {
    office: "Офисный",
    warehouse: "Складской",
    residential: "Жилой",
    industrial: "Промышленный",
  };

  const itOptions = [
    { key: "bim", label: "BIM-моделирование", price: "450 ₽/м²" },
    { key: "iot", label: "IoT-система", price: "320 ₽/м²" },
    { key: "twin", label: "Цифровой двойник", price: "280 ₽/м²" },
    { key: "cloud", label: "Облачный документооборот", price: "150 ₽/м²" },
  ];

  return (
    <section id="prices" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="tech-tag mb-4 inline-block">Стоимость услуг</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            ПРОЗРАЧНОЕ<br />
            <span className="neon-text">ЦЕНООБРАЗОВАНИЕ</span>
          </h2>
        </div>

        <div className="grid xl:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-dark-card rounded-2xl border border-dark-border overflow-hidden">
              <div className="px-6 py-4 border-b border-dark-border">
                <h3 className="font-display text-lg font-bold text-white">СТРОИТЕЛЬСТВО</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-border">
                    <th className="text-left px-6 py-3 text-gray-500 text-xs uppercase tracking-wider">Тип объекта</th>
                    <th className="text-right px-6 py-3 text-gray-500 text-xs uppercase tracking-wider">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Жилые здания", "35 000 – 55 000 ₽/м²"],
                    ["Офисные центры", "30 000 – 45 000 ₽/м²"],
                    ["Промышленные объекты", "22 000 – 32 000 ₽/м²"],
                    ["Склады и логистика", "18 000 – 28 000 ₽/м²"],
                    ["Проектирование", "от 1 500 ₽/м²"],
                  ].map(([type, price]) => (
                    <tr key={type} className="border-b border-dark-border/50 hover:bg-dark-border/20 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm">{type}</td>
                      <td className="px-6 py-3 text-neon text-sm font-semibold text-right">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-dark-card rounded-2xl border border-dark-border overflow-hidden">
              <div className="px-6 py-4 border-b border-dark-border">
                <h3 className="font-display text-lg font-bold text-white">ИТ-РЕШЕНИЯ</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-border">
                    <th className="text-left px-6 py-3 text-gray-500 text-xs uppercase tracking-wider">Услуга</th>
                    <th className="text-right px-6 py-3 text-gray-500 text-xs uppercase tracking-wider">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["BIM-моделирование", "от 450 ₽/м²"],
                    ["IoT-система", "от 320 ₽/м²"],
                    ["Цифровой двойник", "от 280 ₽/м²"],
                    ["Внедрение ПО (1С)", "от 150 000 ₽"],
                    ["Облачная платформа", "от 25 000 ₽/мес"],
                    ["Аудит ИТ-инфраструктуры", "от 80 000 ₽"],
                  ].map(([service, price]) => (
                    <tr key={service} className="border-b border-dark-border/50 hover:bg-dark-border/20 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm">{service}</td>
                      <td className="px-6 py-3 text-neon-gold text-sm font-semibold text-right">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-dark-card rounded-2xl neon-border p-8">
            <h3 className="font-display text-xl font-bold text-white mb-6">КАЛЬКУЛЯТОР СТОИМОСТИ</h3>

            <div className="space-y-6">
              <div>
                <label className="text-gray-400 text-sm mb-3 block">Тип объекта</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(typeLabels).map(([k, v]) => (
                    <button
                      key={k}
                      onClick={() => setCalcType(k)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${calcType === k ? "btn-neon" : "bg-dark-border text-gray-400 hover:text-gray-200"}`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-3 flex justify-between">
                  <span>Площадь объекта</span>
                  <span className="text-neon font-bold">{area.toLocaleString()} м²</span>
                </label>
                <input
                  type="range"
                  min={100}
                  max={50000}
                  step={100}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full accent-neon"
                />
                <div className="flex justify-between text-gray-600 text-xs mt-1">
                  <span>100 м²</span>
                  <span>50 000 м²</span>
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-3 block">ИТ-опции (добавляются к базовой стоимости)</label>
                <div className="space-y-2">
                  {itOptions.map((o) => (
                    <label key={o.key} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() => toggleService(o.key)}
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${services.includes(o.key) ? "bg-neon border-neon" : "border-dark-border group-hover:border-neon/40"}`}
                        >
                          {services.includes(o.key) && <Icon name="Check" size={12} className="text-dark-bg" />}
                        </div>
                        <span className="text-gray-300 text-sm">{o.label}</span>
                      </div>
                      <span className="text-gray-500 text-xs">{o.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-dark-border pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Строительство</span>
                  <span className="text-white font-medium">{buildCost.toLocaleString()} ₽</span>
                </div>
                {itCost > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">ИТ-решения</span>
                    <span className="text-neon-gold font-medium">{itCost.toLocaleString()} ₽</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-3 border-t border-dark-border">
                  <span className="text-white font-semibold">Итого (ориентировочно)</span>
                  <span className="font-display text-2xl font-bold neon-text">{total.toLocaleString()} ₽</span>
                </div>
                <p className="text-gray-600 text-xs">* Расчёт приблизительный. Точная стоимость определяется после обследования объекта.</p>
                <a href="#consult" className="btn-gold w-full text-center py-3 rounded-xl font-bold text-sm block mt-2">
                  Получить точный расчёт
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Blog ──────────────────────────────────────────────────────────────────────
function Blog() {
  const articles = [
    { tag: "BIM", title: "BIM-технологии: будущее строительства уже здесь", desc: "Как информационное моделирование зданий меняет всю цепочку создания объекта — от проектирования до эксплуатации.", date: "15 мая 2026", read: "7 мин" },
    { tag: "IoT", title: "Как IoT меняет стройплощадки: реальные кейсы", desc: "Истории компаний, которые внедрили датчики и видеоаналитику — и сэкономили миллионы на потерях материалов.", date: "2 мая 2026", read: "5 мин" },
    { tag: "Документооборот", title: "Цифровизация документооборота в строительстве", desc: "Переход на облачный документооборот экономит до 40% времени на согласование и исключает потерю документов.", date: "18 апреля 2026", read: "6 мин" },
    { tag: "Энергоэффективность", title: "Энергоэффективные здания: ИТ-решения для снижения затрат", desc: "Умные системы управления климатом и освещением могут снизить счета за энергию на 25–40%.", date: "5 апреля 2026", read: "8 мин" },
  ];

  return (
    <section id="blog" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="tech-tag mb-4 inline-block">Экспертный блог</div>
            <h2 className="font-display text-4xl font-bold text-white">
              СТАТЬИ И<br />
              <span className="neon-text">КЕЙСЫ</span>
            </h2>
          </div>
          <a href="#blog" className="btn-neon px-5 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2">
            Все статьи <Icon name="ArrowRight" size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="bg-dark-card rounded-2xl border border-dark-border p-6 card-hover flex flex-col gap-3 cursor-pointer">
              <span className="tech-tag inline-block w-fit">{a.tag}</span>
              <h3 className="font-semibold text-white leading-snug">{a.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.desc}</p>
              <div className="flex items-center gap-3 text-gray-600 text-xs">
                <span>{a.date}</span>
                <span>·</span>
                <span>{a.read} чтения</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  const team = [
    { name: "Палкин Евгений Станиславович", role: "Генеральный директор", bio: "20 лет в строительной отрасли. Руководил возведением объектов суммарной площадью более 500 000 м²." },
    { name: "Кирилл Новиков", role: "ИТ-директор (CTO)", bio: "Эксперт по BIM и цифровизации строительства. Автор 12 внедрённых IoT-решений для стройплощадок." },
    { name: "Марина Белова", role: "Главный инженер-проектировщик", bio: "BIM-менеджер с сертификатом Autodesk. Реализовала проекты для крупнейших застройщиков Екатеринбурга." },
  ];

  const partners = ["Autodesk", "Yandex Cloud", "1С", "Microsoft", "КНАУФ", "Lafarge"];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid xl:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="tech-tag mb-4 inline-block">О компании</div>
            <img src="https://cdn.poehali.dev/projects/92d02ca1-0bdd-44ca-ab36-98f14d8745e6/bucket/d6e6281f-78aa-4a8d-acf1-215c6f56d717.png" alt="Нео-Вижен" className="h-16 w-auto object-contain mb-6" style={{ filter: "brightness(0) invert(1)" }} />
            <p className="text-gray-400 leading-relaxed mb-4">
              Основана в 2014 году как строительная компания. В 2019 году запустили собственный ИТ-отдел и начали цифровизацию объектов. Сегодня мы — единственная компания в Екатеринбурге, предоставляющая полный цикл: от проекта до «умного дома».
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Работаем с застройщиками, промышленными предприятиями, девелоперами и государственными организациями. Лицензия СРО, допуски к проектированию и строительству объектов любой сложности.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Award", label: "Лицензия СРО" },
                { icon: "MapPin", label: "Екатеринбург и область" },
                { icon: "Clock", label: "Пн–Пт 9:00–18:00" },
                { icon: "Users", label: "40+ специалистов" },
              ].map((i) => (
                <div key={i.label} className="flex items-center gap-3 text-sm text-gray-400">
                  <Icon name={i.icon as any} size={16} className="text-neon flex-shrink-0" />
                  {i.label}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {team.map((m) => (
              <div key={m.name} className="bg-dark-card rounded-xl border border-dark-border p-5 flex gap-4 card-hover">
                <div className="w-12 h-12 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={22} className="text-neon" />
                </div>
                <div>
                  <div className="font-semibold text-white">{m.name}</div>
                  <div className="text-neon text-sm mb-1">{m.role}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-dark-border rounded-2xl p-8">
          <h3 className="font-display text-xl font-bold text-white mb-6 text-center">ПАРТНЁРЫ И ТЕХНОЛОГИИ</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <div key={p} className="bg-dark-border rounded-xl px-6 py-3 text-gray-300 font-semibold text-sm hover:text-neon border border-transparent hover:border-neon/30 transition-all">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SEND_CONSULT_URL = "https://functions.poehali.dev/a122e580-f427-4545-9803-87577eb3f5af";

// ── Consult Form ──────────────────────────────────────────────────────────────
function ConsultForm() {
  const [direction, setDirection] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", task: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(SEND_CONSULT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, direction }),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить заявку. Попробуйте позвонить нам напрямую.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consult" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-tag mb-4 inline-block">Быстрый запрос</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              ПОЛУЧИТЕ<br />
              <span className="neon-gold">КОНСУЛЬТАЦИЮ</span>
            </h2>
            <p className="text-gray-400 mt-4">Ответим в течение 2 часов в рабочее время</p>
          </div>

          {submitted ? (
            <div className="bg-dark-card rounded-2xl border border-neon/30 p-12 text-center animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-neon/10 border border-neon flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={32} className="text-neon" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">ЗАЯВКА ОТПРАВЛЕНА!</h3>
              <p className="text-gray-400">Свяжемся с вами в течение 2 часов в рабочее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-dark-card rounded-2xl neon-border p-8 space-y-6">
              <div>
                <label className="text-gray-400 text-sm mb-3 block">Направление</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: "build", label: "Строительство", icon: "Building2" },
                    { key: "it", label: "ИТ-решения", icon: "Cpu" },
                  ].map((d) => (
                    <button
                      type="button"
                      key={d.key}
                      onClick={() => setDirection(d.key)}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border font-medium text-sm transition-all ${direction === d.key ? "border-neon text-neon bg-neon/10" : "border-dark-border text-gray-400 hover:border-neon/30"}`}
                    >
                      <Icon name={d.icon as any} size={16} />
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Имя</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Петров"
                  className="w-full bg-dark-border border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-neon focus:outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Телефон</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (900) 000-00-00"
                  className="w-full bg-dark-border border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-neon focus:outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Краткое описание задачи</label>
                <textarea
                  rows={4}
                  value={form.task}
                  onChange={(e) => setForm({ ...form, task: e.target.value })}
                  placeholder="Опишите ваш объект или задачу..."
                  className="w-full bg-dark-border border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-neon focus:outline-none transition-all text-sm resize-none"
                />
              </div>

              {error && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button type="submit" disabled={loading} className="btn-gold w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                <Icon name={loading ? "Loader" : "Send"} size={18} className={loading ? "animate-spin" : ""} />
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>

              <p className="text-gray-600 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Contacts ──────────────────────────────────────────────────────────────────
function Contacts() {
  return (
    <section id="contacts" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="tech-tag mb-4 inline-block">Контакты</div>
          <h2 className="font-display text-4xl font-bold text-white">
            СВЯЖИТЕСЬ<br />
            <span className="neon-text">С НАМИ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: "MapPin", title: "Адрес", lines: ["г. Екатеринбург", "ул. Чемпионов, д. 5"] },
            { icon: "Phone", title: "Телефоны", lines: ["+7 (914) 372-25-25 — основной", "+7 (995) 565-63-30 — автоответчик"] },
            { icon: "Clock", title: "Часы работы", lines: ["Пн–Пт: 9:00–18:00", "Сб–Вс: по договорённости"] },
          ].map((c) => (
            <div key={c.title} className="bg-dark-card rounded-2xl border border-dark-border p-6 card-hover">
              <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center mb-4">
                <Icon name={c.icon as any} size={18} className="text-neon" />
              </div>
              <h3 className="font-semibold text-white mb-2">{c.title}</h3>
              {c.lines.map((l) => <p key={l} className="text-gray-400 text-sm">{l}</p>)}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-dark-card rounded-2xl border border-dark-border p-6">
            <h3 className="font-semibold text-white mb-4">Онлайн-каналы</h3>
            <div className="space-y-3">
              {[
                { icon: "Mail", label: "info@neo-vision.ru" },
                { icon: "MessageCircle", label: "WhatsApp: +7 (900) 000-00-00" },
                { icon: "Send", label: "Telegram: @neovision_ekb" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-gray-400 text-sm">
                  <Icon name={c.icon as any} size={16} className="text-neon" />
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-card rounded-2xl border border-dark-border overflow-hidden relative min-h-40">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center animate-pulse-neon">
                <Icon name="MapPin" size={22} className="text-neon" />
              </div>
              <span className="text-gray-400 text-sm">Екатеринбург, ул. Чемпионов, 5</span>
              <a href="https://yandex.ru/maps" target="_blank" rel="noopener" className="btn-neon px-4 py-2 rounded-lg text-xs font-semibold mt-1">
                Открыть карту
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="https://cdn.poehali.dev/projects/92d02ca1-0bdd-44ca-ab36-98f14d8745e6/bucket/d6e6281f-78aa-4a8d-acf1-215c6f56d717.png" alt="Нео-Вижен" className="h-8 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
          <p className="text-gray-600 text-sm text-center">
            © 2026 ООО «Нео-Вижен». Строительство и ИТ-решения, Екатеринбург.
          </p>
          <div className="flex gap-4">
            {["Building2", "Cpu", "Phone"].map((icon) => (
              <div key={icon} className="w-8 h-8 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center hover:border-neon/30 hover:text-neon transition-all cursor-pointer text-gray-500">
                <Icon name={icon as any} size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark-bg)" }}>
      <Navbar />
      <Hero />
      <ServicesOverview />
      <Construction />
      <ITSolutions />
      <Technologies />
      <Promotions />
      <Prices />
      <Blog />
      <About />
      <ConsultForm />
      <Contacts />
      <Footer />
    </div>
  );
}