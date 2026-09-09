'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  Bot,
  BrainCircuit,
  Check,
  Clock3,
  Code2,
  Film,
  Fingerprint,
  Gift,
  Layers3,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const practice = [
  {
    icon: Code2,
    number: '01',
    title: 'Веб‑сервисы и приложения',
    text: 'Кастомные задачники, интерактивные сервисы и аналоги Trello, Canva и Duolingo без знания кода — через вайбкодинг.',
    tone: 'blue',
  },
  {
    icon: Bot,
    number: '02',
    title: 'Автономные ИИ‑агенты',
    text: 'Умные боты на MyBotica для анализа конкурентов, парсинга новостей и автоматической подготовки контента 24/7.',
    tone: 'cyan',
  },
  {
    icon: Film,
    number: '03',
    title: 'Продающий визуал и ИИ‑видео',
    text: 'Единые нейрофотосессии, карусели для соцсетей и сложные ролики с цифровыми аватарами без съёмочной группы.',
    tone: 'violet',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Маркетинговые стратегии',
    text: 'Глубинная аналитика ЦА, точные смыслы, коммерческие предложения и готовые контент‑планы под любую нишу.',
    tone: 'lime',
  },
];

const format = [
  { icon: Clock3, title: '2 живых практических дня', text: 'Реальные демонстрации, разборы кейсов и работа с передовыми нейросетями.', wide: true },
  { icon: Award, title: 'Домашние задания с проверкой кураторов', text: 'Практика после каждого эфира, персональная обратная связь и готовые рабочие решения.' },
  { icon: Bot, title: 'Доступ к MyBotica', text: 'Авторская ИИ‑платформа и приветственные токены.' },
  { icon: Layers3, title: 'Библиотека промптов', text: 'Проверенные формулы и алгоритмы точных запросов.' },
  { icon: Users, title: 'Чат с участниками', text: 'Сообщество специалистов и предпринимателей для обмена опытом и заказами.' },
  { icon: ShieldCheck, title: 'Факапы и безопасность', text: 'Главные ошибки и юридические тонкости работы с ИИ.', accent: true },
];

const days = [
  {
    day: '01',
    title: '16 сентября — Собираем свою ИИ‑систему',
    items: [
      'Находим сильные смыслы и создаём на их основе тексты, визуал и продающие материалы.',
      'Собираем помощника в MyBotica, который анализирует рынок и помогает готовить контент.',
      'Создаём без программирования первый полезный веб‑сервис под свою задачу.',
      'Соединяем контент, помощника и сервис в одну рабочую систему.',
    ],
    result: 'Готовая система для создания контента, работающий ИИ‑помощник и первая версия собственного сервиса.',
  },
  {
    day: '02',
    title: '17 сентября — Улучшаем и доводим до результата',
    items: [
      'Создаём киношное видео, цифрового аватара и рекламные материалы.',
      'Настраиваем ИИ‑помощника на повторяющиеся задачи.',
      'Добавляем в веб‑сервис нужные функции и доводим его до готового продукта.',
      'Упаковываем результат для своего бизнеса, портфолио или продажи клиентам.',
    ],
    result: 'Готовые материалы, настроенный ИИ‑помощник, работающий веб‑продукт и план его внедрения или продажи.',
  },
];

const outcomes = [
  ['НАВЫКИ НОВОЙ ЭРЫ ИИ', 'Вайбкодинг, автономные ИИ‑агенты на MyBotica и медиаконтент премиум‑уровня.'],
  ['СВОБОДНОЕ ВРЕМЯ', 'До 80% рутины можно делегировать умным нейропомощникам.'],
  ['ПОРТФЕЛЬ ПРОЕКТОВ', 'Своя база инструментов: от нейрофотосессий до веб‑приложений.'],
  ['ОФИЦИАЛЬНЫЙ ИИ ID', 'Именной документ школы, подтверждающий прохождение курса и выполненные задания.'],
  ['ЭКОНОМИЯ И РОСТ ДОХОДА', 'Замена подписок своими разработками и план выхода на чек от 100 000 ₽.'],
];

function RegistrationWidget({ deadline }: { deadline?: number }) {
  const [open, setOpen] = useState(false);
  const fallbackUrl = (() => {
    if (typeof window === 'undefined') return 'https://xeniabaranova-school.ru/pl/lite/widget/widget?id=1652829';
    const params = new URLSearchParams(window.location.search);
    params.set('id', '1652829');
    params.set('ref', document.referrer);
    params.set('loc', window.location.href);
    return `https://xeniabaranova-school.ru/pl/lite/widget/widget?${params.toString()}`;
  })();

  useEffect(() => {
    const openFromCta = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest('a[href="#register"]');
      if (!link) return;
      event.preventDefault();
      setOpen(true);
    };
    document.addEventListener('click', openFromCta);
    return () => document.removeEventListener('click', openFromCta);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="registration-entry registration-entry-teaser">
        <div className="registration-entry-top"><span>Бесплатное участие</span><b>0 ₽</b></div>
        <h3>16–17 сентября</h3>
        <ul><li><Check />Каждый день в 12:00</li><li><Check />Онлайн · два практических эфира</li></ul>
        {deadline !== undefined && <EventCountdown deadline={deadline} />}
        <DialogTrigger render={<Button className="registration-cta" />}>
          Зарегистрироваться бесплатно <ArrowRight />
        </DialogTrigger>
        <small><ShieldCheck /> Официальная регистрация школы · данные защищены</small>
      </div>
      <DialogContent className="registration-modal registration-modal-custom">
        <DialogHeader className="registration-modal-head">
          <DialogTitle>Регистрация на «Новую Эру ИИ»</DialogTitle>
          <DialogDescription>16–17 сентября · каждый день в 12:00 · участие бесплатно</DialogDescription>
        </DialogHeader>
        <div className="registration-modal-body">
          <GetCourseWidget />
          <a className="registration-fallback" href={fallbackUrl} target="_blank" rel="noreferrer">Не загружается форма? Открыть отдельно ↗</a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function GetCourseWidget() {
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot || slot.dataset.widgetLoaded === 'true') return;
    slot.dataset.widgetLoaded = 'true';

    const script = document.createElement('script');
    script.id = '71612b8b2e97fffce6755a93f9834697d09b0788';
    script.src = 'https://xeniabaranova-school.ru/pl/lite/widget/script?id=1652829';
    script.async = true;
    script.addEventListener('load', () => {
      document.dispatchEvent(new Event('StartWidget71612b8b2e97fffce6755a93f9834697d09b0788'));
    }, { once: true });
    slot.appendChild(script);
  }, []);

  return <div ref={slotRef} className="registration-frame-wrap registration-widget" />;
}

function AutoLoopVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '600px 0px' });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad) videoRef.current?.play().catch(() => undefined);
  }, [shouldLoad]);

  return <video ref={videoRef} autoPlay muted loop playsInline preload="none" poster={poster} src={shouldLoad ? src : undefined} aria-label={label} />;
}

function HeroFilm({ asset }: { asset: (name: string) => string }) {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const player = video.current;
    if (!player || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    player.defaultMuted = true;
    player.muted = true;
    const play = () => { if (!document.hidden) void player.play().catch(() => {}); };
    play();
    player.addEventListener('canplay', play);
    document.addEventListener('visibilitychange', play);
    return () => { player.removeEventListener('canplay', play); document.removeEventListener('visibilitychange', play); };
  }, []);
  return <div className="fresh-hero-film" aria-hidden="true">
    <video ref={video} autoPlay muted loop playsInline preload="auto" poster={asset('ksenia-earth-seamless-v3.jpg')} disablePictureInPicture>
      <source src={asset('ksenia-earth-seamless-v4.mp4')} type="video/mp4" />
      <source src={asset('ksenia-earth-seamless-v4.webm')} type="video/webm" />
    </video>
  </div>;
}

function SchoolAuthority() {
  return <section className="authority shell" aria-label="Достижения Ксении Барановой">
    <article><b>400 000+</b><span>учеников прошли<br />программы школы</span></article>
    <article><b>Госдума РФ</b><span>приглашённый эксперт<br />по искусственному интеллекту</span></article>
    <article><b>GetAward 2026</b><span>победитель в номинации<br />«Обучение года»</span></article>
    <article><b>Лицензия</b><span>образовательная школа<br />с официальной лицензией</span></article>
  </section>;
}

function EventCountdown({ deadline }: { deadline: number }) {
  const getSecondsLeft = () => Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  const [secondsLeft, setSecondsLeft] = useState(getSecondsLeft);

  useEffect(() => {
    setSecondsLeft(getSecondsLeft());
    const timer = window.setInterval(() => setSecondsLeft(getSecondsLeft()), 1000);
    return () => window.clearInterval(timer);
  }, [deadline]);

  const isFinished = secondsLeft === 0;
  const timerValue = `${String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:${String(secondsLeft % 60).padStart(2, '0')}`;

  if (isFinished) return null;

  return <div className="fresh-countdown">
    <span className="fresh-countdown-label">Закрепите стоимость 0 ₽</span>
    <strong>{timerValue}</strong>
  </div>;
}

function FreshUrgencyPopup({ deadline }: { deadline: number }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 60_000);
    return () => window.clearTimeout(timer);
  }, []);

  return <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent className="fresh-urgency-popup">
      <DialogHeader className="fresh-popup-head">
        <span className="fresh-popup-kicker">НОВАЯ ЭРА ИИ <span>2 дня · онлайн</span></span>
        <DialogTitle>Ваш следующий шаг —<br /><em>вместе с ИИ.</em></DialogTitle>
        <DialogDescription>Присоединяйтесь к бесплатному курсу и начните применять ИИ к своим задачам.</DialogDescription>
      </DialogHeader>
      <div className="fresh-popup-gift"><span aria-hidden="true"><Gift /></span><div><small>ПОДАРОК ЗА РЕГИСТРАЦИЮ</small><b>Ваша личная карта роста с ИИ</b><p>Сильная роль, подходящие инструменты и первый шаг — по результатам теста.</p></div></div>
      <EventCountdown deadline={deadline} />
      <a className="fresh-popup-cta" href="#register" onClick={() => setOpen(false)}>Зарегистрироваться бесплатно <ArrowRight aria-hidden="true" /></a>
      <button className="fresh-popup-later" onClick={() => setOpen(false)}>Пока посмотрю программу</button>
    </DialogContent>
  </Dialog>;
}

type HomeProps = {
  variant?: 'full' | 'short';
  assetBase?: string;
  theme?: 'classic' | 'sky' | 'cosmic' | 'fresh';
};

export default function Home({ variant = 'full', assetBase = './', theme = 'classic' }: HomeProps) {
  const isShort = variant === 'short';
  const asset = (name: string) => `${assetBase}${name}`;
  const themeClass = theme === 'cosmic' ? 'theme-sky theme-cosmic' : theme === 'fresh' ? 'theme-sky theme-fresh' : theme === 'sky' ? 'theme-sky' : '';
  const isFresh = theme === 'fresh';
  const [offerDeadline] = useState(() => Date.now() + 180_000);

  return (
    <main className={`site ${isShort ? 'site-short' : 'site-full'} ${themeClass}`}>
      {isFresh && !isShort && <FreshUrgencyPopup deadline={offerDeadline} />}
      <div className="hero-stage" id="top">
        <header className="topbar shell">
          <a href="#top" className="logo" aria-label="16–17 сентября, начало в 12:00">
            {isFresh ? <span className="date-mark date-mark-inline">16–17 сентября <i>· 12:00</i></span> : <span className="date-mark"><em>16–17</em><i>СЕН · 12:00</i></span>}
          </a>
          <div className="top-facts">
              <span><b>16–17 СЕНТЯБРЯ</b>каждый день в 12:00</span>
            <span><b>ONLINE</b>из любой точки</span>
            <a href="#register">Занять место <ArrowRight /></a>
          </div>
        </header>

        <section className="hero shell">
          <div className="hero-copy">
            <div className="pill">{isFresh ? <><Clock3 aria-hidden="true" /><b>2 дня</b><span>Бесплатный онлайн‑курс</span></> : <><span>NEW</span> ПРАКТИЧЕСКИЙ 2‑ДНЕВНЫЙ ОНЛАЙН‑КУРС</>}</div>
            <h1>Новая<br /><em>Эра ИИ</em></h1>
            <p className="hero-subtitle">{isFresh ? <>По‑старому больше не работает.<br />Теперь ценят не знание нейросетей, а умение собирать из них работающие системы.</> : 'Создание контента, автоматизация и вайбкодинг для бизнеса и фриланса'}</p>
            <p className="hero-description">{isFresh ? 'За два дня перейдите от отдельных сервисов к собственной системе: контент, ИИ‑агенты и веб‑продукты под задачи бизнеса.' : 'За два дня попробуйте ИИ на задачах своего бизнеса: от контента до первого агента и веб‑сервиса.'}</p>
            <div className="hero-rotator" aria-label="На курсе: фото и видео высшего качества, автономные ИИ-агенты на MyBotica и собственные веб-сервисы без кода">
              <span>Фото и ИИ‑видео высшего качества</span>
              <span>Автономные ИИ‑агенты на MyBotica</span>
              <span>Собственный веб‑сервис без кода</span>
            </div>
            <div className="hero-action">
              <a href="#register">Занять место бесплатно <ArrowRight /></a>
              {isFresh ? <div className="fresh-offer-card"><p className="fresh-price"><span>Участие в курсе</span><span className="fresh-price-old"><s>5 900 ₽</s></span><b>0 ₽</b></p><EventCountdown deadline={offerDeadline} /></div> : <p><b>0 ₽</b><span>Участие<br />бесплатное</span></p>}
            </div>
            {isFresh && <HeroFilm asset={asset} />}
            <div className="hero-proof">
              <span><b>16–17.09</b><small>каждый день в 12:00</small></span>
              <span><b>9 работ</b><small>в вашем портфолио</small></span>
              <span><b>Практика</b><small>на ваших задачах</small></span>
            </div>
            {!isShort && <a className="gift-teaser" href={isFresh ? '#fresh-gift' : '#gift'}><Gift /><span><small>ПОДАРОК ЗА РЕГИСТРАЦИЮ</small><b>{isFresh ? 'Персональная карта: ваш ИИ‑архетип, стек и первый маршрут' : 'Персональный тест «Ваш ИИ‑архетип»'}</b></span><ArrowRight /></a>}
          </div>

          <div className="hero-visual">
            <div className="visual-field"><b>ИИ</b><span>БИЗНЕС<br />КОНТЕНТ<br />КОД</span></div>
            <img className="hero-person-image" src={asset('ksenia-red.webp')} width="1751" height="2400" fetchPriority="high" decoding="async" alt="Ксения Баранова — автор курса" />
            <div className="author-tag"><small>АВТОР КУРСА</small><b>Ксения Баранова</b><span>16 лет в образовании<br />400 000+ учеников</span></div>
          </div>
        </section>
      </div>

      {isFresh && !isShort && <section className="fresh-gift-reveal" id="fresh-gift">
        <div className="shell fresh-gift-wrap">
          <div className="fresh-gift-copy">
            <small className="fresh-gift-kicker"><span aria-hidden="true"><Gift /></span>ПОДАРОК СРАЗУ ПОСЛЕ РЕГИСТРАЦИИ</small>
            <h2>Получите индивидуальный <em>ИИ-профиль и карту развития</em></h2>
            <p>Сразу после регистрации вы попадете в бот, где сможете пройти быстрый тест.</p>
            <p>Всего за <strong>4 вопроса</strong> система определит ваши сильные стороны, покажет ваш идеальный набор нейросетей (от Midjourney и Kling до Cursor и Claude) и подскажет, какие повседневные задачи поручить искусственному интеллекту в первую очередь.</p>
            <p className="fresh-gift-summary">Получите персональный маршрут под свой склад ума и задачи!</p>
            <a href="#register">Получить карту бесплатно <ArrowRight /></a>
          </div>
          <div className="fresh-result-card fresh-result-example" aria-label="Пример персонального результата теста">
            <div className="fresh-result-top"><span className="fresh-window-dots" aria-hidden="true"><i /><i /><i /></span><span>ПРИМЕР ИИ-ПРОФИЛЯ</span><b>02 / 04</b></div>
            <small>ОТЧЁТ ОБ ИИ‑АРХЕТИПЕ</small>
            <h3>Креатор‑<br /><em>визионер</em></h3>
            <p>Вы мыслите образами, эмоциями и визуалом. Ваша сила — зацепить внимание с первых секунд.</p>
            <div className="fresh-result-superpower"><small>ВАША СУПЕРСИЛА</small><b>Креативность<br />и чувство стиля</b></div>
            <div className="fresh-result-columns">
              <div className="fresh-result-stack"><small>ВАШИ НЕЙРОСЕТИ</small><span>Midjourney</span><span>Flux</span><span>Kling</span><span>Runway</span></div>
              <div className="fresh-result-delegate"><small>ЧТО ПОРУЧИТЬ ИИ СНАЧАЛА</small><p>Фотосессии, монтаж, цифровые аватары и рекламные креативы.</p></div>
            </div>
            <div className="fresh-result-ready"><Check /> Персональный маршрут готов</div>
          </div>
        </div>
      </section>}

      {!isFresh && <SchoolAuthority />}

      <section className="register shell" id="register">
        <div className="register-copy"><small>БЕСПЛАТНЫЙ ПРАКТИКУМ</small><h2>Примените ИИ<br />к своей задаче</h2><p>Приходите с идеей или рабочим проектом. На эфирах разберём, как ускорить контент и собрать первых ИИ‑помощников.{!isShort && ' После регистрации получите тест «Ваш ИИ‑архетип».'}</p></div>
        <RegistrationWidget deadline={isFresh ? offerDeadline : undefined} />
      </section>

      <section className="section shell practice-section">
        <header className="section-heading">
          <div><small>ТОЛЬКО ПРАКТИКА</small><h2>Что будем<br /><em>изучать</em></h2></div>
          <p>Не наблюдать за чужими кейсами, а собирать работающие ИИ‑связки прямо во время эфиров.</p>
        </header>
        <div className="practice-grid">
          {practice.map(({ icon: Icon, number, title, text, tone }) => (
            <article className={`practice-card ${tone}`} key={title}>
              <div className="card-top"><span>{number}</span><div><Icon /></div></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="passport-band" id="passport">
        <div className="shell passport-wrap">
          <div className="passport-copy"><small>ОФИЦИАЛЬНОЕ ПОДТВЕРЖДЕНИЕ</small><h2>Ваш цифровой<br /><em>ИИ ID</em></h2><p>Именной документ школы подтверждает прохождение двухдневного курса и выполненные задания.</p><ul className="passport-requirements"><li><Check />Быть на обоих днях</li><li><Check />Выполнить домашние задания</li></ul></div>
          <div className="passport-card">
            <div className="passport-head"><Sparkles /><span>НОВАЯ ЭРА · ИИ ID</span><small>УЧАСТНИК · 2026</small></div>
            <div className={`passport-portrait${isFresh ? ' passport-portrait-white' : ''}`}><img src={asset(isFresh ? 'ksenia-white-id.png' : 'ksenia-red.webp')} loading="lazy" decoding="async" alt="Пример фотографии в цифровом ИИ ID" /></div>
            <div className="passport-identity"><small>ИМЕННОЙ ЦИФРОВОЙ ДОКУМЕНТ</small><strong>КСЕНИЯ<br />БАРАНОВА</strong><span>ИИ‑КРЕАТОР · СОЗДАТЕЛЬ АГЕНТОВ</span></div>
            <div className="passport-holo"><span>ID</span></div>
            <div className="passport-serial">ID · KB 0009 / 2026</div>
            <div className="passport-foot"><span>3 ДНЯ · ДОМАШНИЕ ЗАДАНИЯ</span><b><ShieldCheck /> VERIFIED</b></div>
          </div>
          <div className="portfolio-badge"><b>9</b><span>готовых работ<br />под реальные проекты</span></div>
        </div>
      </section>

      <section className="audience-section shell">
        <div className="audience-intro"><small>КОМУ ПОДОЙДЁТ</small><h2>Не «технарям».<br /><em>Тем, кто хочет больше.</em></h2><p>Вам не нужно уметь программировать. На курсе вы собираете ИИ‑систему под свою реальную работу и доход.</p></div>
        <div className="audience-grid">
          <article><span>01</span><h3>Экспертам</h3><p>Упаковать знания, ускорить контент и создать цифровой продукт.</p></article>
          <article><span>02</span><h3>Предпринимателям</h3><p>Автоматизировать процессы и заменить часть дорогих сервисов.</p></article>
          <article><span>03</span><h3>Маркетологам</h3><p>Делать стратегии, визуал и креативы быстрее и сильнее рынка.</p></article>
          <article><span>04</span><h3>Фрилансерам</h3><p>Расширить линейку услуг и выйти на более высокий чек.</p></article>
        </div>
      </section>

      <section className="section shell format-section">
        <header className="section-heading">
          <div><small>ФОРМАТ ОБУЧЕНИЯ</small><h2>Всё, чтобы<br /><em>дойти до результата</em></h2></div>
          <p>Короткий интенсивный формат, живая практика и поддержка без месяцев теории.</p>
        </header>
        <div className="format-grid">
          {format.map(({ icon: Icon, title, text, wide, accent }, index) => (
            <article key={title} className={`${wide ? 'wide' : ''} ${accent ? 'accent' : ''}`}>
              <Icon /><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="program-section" id="program">
        <div className="shell">
          <header className="section-heading inverse">
            <div><small>ПРОГРАММА ОБУЧЕНИЯ</small><h2>Два дня.<br /><em>Одна рабочая система.</em></h2></div>
            <p>Соберите связку из контента, ИИ‑помощника и собственного веб‑сервиса.</p>
          </header>
          <div className="day-list">
            {days.map((day) => (
              <article className="day-card" key={day.day}>
                <div className="day-number"><small>ДЕНЬ</small><b>{day.day}</b></div>
                <div className="day-copy"><h3>{day.title}</h3><ul>{day.items.map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
                <div className="day-result"><small>РЕЗУЛЬТАТ</small><p>{day.result}</p></div>
              </article>
            ))}
          </div>
          <aside className="program-safety-note">
            <span aria-hidden="true"><ShieldCheck /></span>
            <div><small>ВАЖНО В ОБА ДНЯ</small><h3>Учимся замечать и исправлять ошибки ИИ</h3><p>На каждом примере разбираем, почему нейросеть выдаёт слабый результат, как проверять её работу, защищать данные и безопасно использовать тексты, изображения и видео.</p></div>
          </aside>
          <a href="#register" className="program-cta">Занять место на курсе <ArrowRight /></a>
        </div>
      </section>

      <section className="practice-manifesto">
        <div className="shell manifesto-wrap">
          <div className="manifesto-number">9</div>
          <div><small>ГЛАВНАЯ ФИШКА КУРСА</small><h2>Практика и готовые<br /><em>изделия на руках</em></h2><p>Вы научитесь собирать автономных ИИ‑агентов на MyBotica, генерировать киношный визуал и запускать веб‑сервисы через вайбкодинг прямо во время эфиров.</p></div>
        </div>
      </section>

      <section className="section shell results-section">
        <header className="section-heading">
          <div><small>ВАШЕ ПОРТФОЛИО</small><h2>Не конспекты.<br /><em>Готовые продукты.</em></h2></div>
          <p>Уже во время курса вы собираете девять работ, которые можно применять в бизнесе, показывать клиентам и продавать.</p>
        </header>
        <div className="portfolio-preview">
          <article className="portfolio-agent">
            <div className="artifact-head"><span>01</span><b>MYBOTICA · ИИ‑АГЕНТ</b></div>
            <Bot />
            <h3>Автономный ИИ‑агент<br />на MyBotica</h3>
            <p>Созданный на платформе MyBotica агент мониторит рынок, собирает инфоповоды и готовит материалы 24/7 — без программирования.</p>
            <div className="agent-actions">
              <div className="agent-status"><i /> Система активна</div>
              <a className="mybotica-link" href="https://mybotica.pro/" target="_blank" rel="noreferrer">Познакомиться с MyBotica <ArrowRight /></a>
            </div>
          </article>
          <article className="portfolio-media">
            <div className="artifact-head"><span>02</span><b>ИИ‑МЕДИА · ГОТОВЫЕ РАБОТЫ</b></div>
            <div className="video-showcase">
              <figure><AutoLoopVideo src={asset('ai-video-01.mp4')} poster={asset('ai-video-01-poster.jpg')} label="Пример рекламной ИИ-истории" /><figcaption>ИИ‑ИСТОРИЯ · ЦИКЛ</figcaption></figure>
              <figure><AutoLoopVideo src={asset('ai-video-02.mp4')} poster={asset('ai-video-02-poster.jpg')} label="Пример видео с цифровым аватаром" /><figcaption>DIGITAL AVATAR · LOOP</figcaption></figure>
            </div>
            <h3>ИИ‑видео: от идеи до готового ролика</h3><p>Сценарий, визуальный стиль, генерация сцен, цифровые аватары и финальный монтаж — без съёмочной группы.</p>
          </article>
          <article className="portfolio-app"><div className="artifact-head"><span>03</span><b>VIBE CODE</b></div><div className="app-window"><i /><i /><i /><span>Ваш веб‑сервис</span></div><Code2 /><h3>Собственное приложение</h3><p>Рабочий сервис под вашу задачу — собранный через промпты без программиста.</p></article>
        </div>
      </section>

      <section className="outcomes-section">
        <div className="shell outcomes-wrap">
          <div className="outcomes-title"><small>ВСЕГО ЗА 3 ДНЯ</small><h2>Что останется<br /><em>у вас</em></h2></div>
          <div className="outcomes-list">
            {outcomes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      {!isShort && <section className="gift-section" id="gift">
        <div className="shell gift-wrap">
          <div className="gift-copy">
            <div className="gift-kicker"><Gift /> Подарок за регистрацию <b>0 ₽</b></div>
            <h2>Ваш персональный<br /><em>ИИ‑профиль</em></h2>
            <p className="gift-lead">Пройдите авторский ИИ‑тест и получите персональную карту роста — не абстрактный результат, а понятный маршрут к деньгам и свободному времени.</p>
            <div className="gift-benefits">
              <article><Fingerprint /><div><h3>Ваш ИИ‑архетип</h3><p>Узнаете уникальный тип, скрытые суперсилы и свой естественный стиль работы с ИИ.</p></div></article>
              <article><BrainCircuit /><div><h3>Персональный стек нейросетей</h3><p>От Midjourney до Cursor и Claude — инструменты, которые дадут именно вам максимальный буст в доходе.</p></div></article>
              <article><Workflow /><div><h3>Приоритет для делегирования</h3><p>Поймёте, что именно нужно передать ИИ в первую очередь, чтобы быстрее освободить время и вырасти.</p></div></article>
            </div>
            <a href="#register">Получить ИИ‑тест бесплатно <ArrowRight /></a>
          </div>

          <div className="result-photo" aria-label="Пример результата теста: архетип Креатор-Визионер">
            <div className="result-browser-bar"><i /><i /><i /><span>Ваш персональный результат</span></div>
            <div className="result-report">
              <div className="result-report-head">
                <span>ОТЧЁТ ОБ ИИ‑АРХЕТИПЕ</span>
                <b>02 / 04</b>
              </div>
              <div className="result-emblem"><Sparkles /><small>ВАШ ИИ‑АРХЕТИП</small></div>
              <h3>Креатор‑<br /><em>Визионер</em></h3>
              <p className="result-intro">Вы мыслите образами, эмоциями и визуалом. Ваша сила — зацепить внимание с первых секунд.</p>
              <div className="result-strength"><small>ВАША СУПЕРСИЛА</small><strong>Креативность<br />и чувство стиля</strong></div>
              <div className="result-details">
                <article><small>ИДЕАЛЬНЫЙ СТЕК</small><div className="result-chips"><span>Midjourney</span><span>Flux</span><span>Kling</span><span>Runway</span></div></article>
                <article><small>ДЕЛЕГИРОВАТЬ СНАЧАЛА</small><p>Фотосессии, монтаж, цифровые аватары и рекламные креативы.</p></article>
              </div>
              <div className="result-stamp"><Check /><span>ПЕРСОНАЛЬНЫЙ<br />МАРШРУТ ГОТОВ</span></div>
            </div>
          </div>
        </div>
      </section>}

      {isFresh && <SchoolAuthority />}

      <footer className="site-footer" id="footer">
        <div className="shell footer-main">
          <div className="footer-brand">
            <a href="#top" className="footer-name">Ксения Баранова</a>
            <strong>Новая Эра ИИ</strong>
            <p>Практический двухдневный онлайн‑курс по ИИ: контент, автономные агенты, автоматизация и собственные веб‑сервисы без кода.</p>
            <a className="footer-email" href="mailto:hello@xeniabaranova-school.ru">hello@xeniabaranova-school.ru</a>
          </div>

          <div className="footer-action">
            <small>ЗАНЯТЬ МЕСТО НА ОНЛАЙН‑КУРСЕ</small>
            <h3>Войдите в Новую Эру ИИ<br />за три практических дня</h3>
            <a href="#register">Занять место бесплатно <ArrowRight /></a>
            <nav>
              <a href="https://xeniabaranova-school.ru/politica" target="_blank" rel="noreferrer">Политика обработки данных</a>
              <a href="https://xeniabaranova-school.ru/oferta_vibe-code" target="_blank" rel="noreferrer">Публичная оферта</a>
            </nav>
          </div>
        </div>

        <div className="shell footer-bottom">
          <p>© 2026 Ксения Баранова. Все права защищены.</p>
          <p>ИП Баранова Ксения Николаевна · ИНН 027402381827 · ОГРНИП 317028000116318</p>
          <p>Лицензия № Л035‑01198‑02/00172850 · Министерство образования и науки</p>
        </div>
      </footer>
    </main>
  );
}
