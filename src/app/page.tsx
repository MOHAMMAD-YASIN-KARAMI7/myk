import type { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'محمد یاسین کرمی',
  description:
    'وب‌سایت شخصی محمد یاسین کرمی؛ فعال حوزه هوش مصنوعی، برنامه‌نویسی، تکنولوژی و ساخت محصولات دیجیتال.',
  path: '/',
});

const skills = [
  ['01', 'هوش مصنوعی', 'AI، مدل‌های زبانی و ساخت ابزارهای هوشمند'],
  ['02', 'برنامه‌نویسی', 'Python، وب و تبدیل ایده به محصول'],
  ['03', 'محصول و کسب‌وکار', 'ایده‌پردازی، ساخت، رشد و تجربه کاربری'],
];

const projects = [
  { n: '01', title: 'MYK Platform', text: 'یک اکوسیستم دیجیتال برای پروژه‌ها، محتوا، آموزش و فناوری.', tag: 'PLATFORM' },
  { n: '02', title: 'AI Experiments', text: 'آزمایش ایده‌های تازه با هوش مصنوعی و مدل‌های زبانی.', tag: 'ARTIFICIAL INTELLIGENCE' },
  { n: '03', title: 'Digital Projects', text: 'طراحی و ساخت تجربه‌های وب با تمرکز روی جزئیات و کاربرد واقعی.', tag: 'WEB / PRODUCT' },
];

export default function Page() {
  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="محمد یاسین کرمی">MYK<span>.</span></a>
        <div className="nav-links">
          <a href="#about">درباره من</a>
          <a href="#work">پروژه‌ها</a>
          <a href="#contact">ارتباط</a>
        </div>
        <a className="nav-cta" href="mailto:officiallcapitanyasin@gmail.com">شروع یک گفتگو ↗</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> محمد یاسین کرمی · سازنده و یادگیرنده</div>
          <h1>ایده‌ها را<br /><em>واقعی</em> می‌کنم.</h1>
          <p>در تقاطع هوش مصنوعی، برنامه‌نویسی و محصول دیجیتال؛ یاد می‌گیرم، می‌سازم و هر بار یک قدم جلوتر می‌روم.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">مشاهده کارها <span>↓</span></a>
            <a className="text-link" href="mailto:officiallcapitanyasin@gmail.com">officiallcapitanyasin@gmail.com ↗</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="halo" />
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="monogram">م<br /><small>ی</small></div>
          <div className="art-label label-top">BUILD / LEARN / GROW</div>
          <div className="art-label label-bottom">36° 48′ N · 53° 11′ E</div>
        </div>
      </section>

      <section className="statement" id="about">
        <p className="section-kicker">01 — درباره من</p>
        <div>
          <h2>من فقط دنبال یادگیری نیستم؛<br /><span>می‌خواهم چیزی بسازم.</span></h2>
          <p className="statement-text">برای من تکنولوژی زمانی جذاب می‌شود که از یک مفهوم به یک تجربه واقعی تبدیل شود. به همین دلیل پروژه‌محور یاد می‌گیرم و بین کد، طراحی، هوش مصنوعی و کسب‌وکار ارتباط ایجاد می‌کنم.</p>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-head"><p className="section-kicker">02 — تمرکز</p><span>چیزهایی که دوست دارم بسازم</span></div>
        <div className="skill-grid">
          {skills.map(([n, title, text]) => <article className="skill-card" key={n}><small>{n}</small><h3>{title}</h3><p>{text}</p><span className="arrow">↗</span></article>)}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-head"><p className="section-kicker">03 — پروژه‌ها</p><span>Selected work</span></div>
        <div className="project-list">
          {projects.map((project) => <article className="project-card" key={project.n}><div className="project-index">{project.n}</div><div className="project-main"><span>{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p></div><div className="project-arrow">↗</div></article>)}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-kicker">04 — ارتباط</p>
        <h2>یک ایده دارید؟<br /><em>بیایید بسازیم.</em></h2>
        <a className="contact-email" href="mailto:officiallcapitanyasin@gmail.com">officiallcapitanyasin@gmail.com</a>
      </section>

      <footer><span>© 2026 محمد یاسین کرمی</span><span>ساخته شده با کنجکاوی و کد.</span></footer>
    </main>
  );
}
