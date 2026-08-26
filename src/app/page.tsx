import type { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'کوروش بزرگ | میراث یک شاهنشاه',
  description: 'سایتی یادبود برای کوروش بزرگ؛ روایتی از زندگی، میراث و منشور کوروش.',
  path: '/',
});

const timeline = [
  ['۰۱', 'آغاز', 'کوروش، بنیان‌گذار شاهنشاهی هخامنشی، در سده ششم پیش از میلاد ظهور کرد.'],
  ['۰۲', 'پاسارگاد', 'پاسارگاد به عنوان پایتخت و مجموعه‌ای باشکوه از آغاز یک عصر تازه در تاریخ ایران شکل گرفت.'],
  ['۰۳', 'گسترش', 'با پیروزی‌های پیاپی، قلمرو هخامنشی به یکی از بزرگ‌ترین قدرت‌های جهان باستان تبدیل شد.'],
  ['۰۴', 'میراث', 'نام کوروش قرن‌ها بعد نیز با مفهوم فرمانروایی، مدارا و ساختن یک امپراتوری چندفرهنگی گره خورده است.'],
];

export default function Page() {
  return (
    <main className="cyrus-site" dir="rtl">
      <div className="grain" aria-hidden="true" />
      <div className="stars" aria-hidden="true" />

      <header className="nav">
        <a href="#top" className="seal">𐎤</a>
        <div className="nav-center">
          <a href="#story">داستان</a>
          <a href="#legacy">میراث</a>
          <a href="#timeline">خط زمان</a>
        </div>
        <a href="#cylinder" className="nav-mark">C · ۵۵۹ BC</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-meta">یادبود کوروش بزرگ <span>·</span> شاهنشاه هخامنشی</div>
        <div className="hero-title-wrap">
          <p className="ancient">𐎤𐎢𐎽𐎢𐏁</p>
          <h1>کوروش<br /><i>بزرگ</i></h1>
          <p className="hero-sub">نامی که در تاریخ ماند؛ <strong>قدرتی که فقط با شمشیر تعریف نشد.</strong></p>
        </div>
        <div className="hero-symbol" aria-hidden="true">
          <div className="wing wing-left" />
          <div className="wing wing-right" />
          <div className="figure">𓂀</div>
          <span className="orbit-line o1" /><span className="orbit-line o2" />
        </div>
        <div className="scroll-cue"><span /> برای دیدن روایت پایین بروید</div>
      </section>

      <section className="manifesto" id="story">
        <div className="section-no">۰۱</div>
        <div className="manifesto-copy">
          <p className="eyebrow">یک روایت از ایران باستان</p>
          <h2>پیش از آنکه<br /><em>افسانه</em> شود،<br />یک انسان بود.</h2>
          <p>کوروش دوم، که بعدها به «کوروش بزرگ» شناخته شد، بنیان‌گذار شاهنشاهی هخامنشی بود. روایت زندگی او در میان تاریخ، منابع باستانی و سنت‌های گوناگون شکل گرفته است؛ روایتی که هنوز پس از بیش از دو هزار سال، ذهن انسان را درگیر می‌کند.</p>
        </div>
        <div className="quote-card">
          <span className="quote-mark">“</span>
          <p>یک فرمانروا را می‌توان با وسعت سرزمینش سنجید؛ اما میراثش را با اثری که بر انسان‌ها می‌گذارد.</p>
          <small>— روایتی معاصر از میراث کوروش</small>
        </div>
      </section>

      <section className="cylinder" id="cylinder">
        <div className="cylinder-art" aria-hidden="true">
          <div className="cylinder-glow" />
          <div className="clay-cylinder"><div className="clay-text">𐎧 𐎢 𐎼 𐎢 𐏁<small>𐎡 𐎹 𐎠</small></div></div>
        </div>
        <div className="cylinder-copy">
          <p className="eyebrow">منشور کوروش</p>
          <h2>صدای یک<br /><em>استوانه</em></h2>
          <p>منشور کوروش، نوشته‌ای به خط میخی اکدی بر روی یک استوانه سفالی است که در بابل کشف شد. تفسیر و اهمیت تاریخی آن موضوع پژوهش‌های فراوان بوده و نباید آن را ساده‌سازی کرد؛ اما بدون تردید یکی از شناخته‌شده‌ترین آثار مرتبط با کوروش است.</p>
          <div className="fact-row"><span>قرن ششم پ.م.</span><span>بابل</span><span>خط میخی</span></div>
        </div>
      </section>

      <section className="legacy" id="legacy">
        <div className="section-head"><p className="eyebrow">۰۲ — میراث</p><span>THE LEGACY</span></div>
        <div className="legacy-grid">
          <article><b>01</b><h3>فرمانروایی</h3><p>تجربه‌ای از ساختن یک امپراتوری گسترده با ملت‌ها و فرهنگ‌های گوناگون.</p></article>
          <article><b>02</b><h3>پاسارگاد</h3><p>نخستین پایتخت هخامنشی؛ جایی که معماری و قدرت سیاسی در یک چشم‌انداز ماندگار کنار هم قرار گرفتند.</p></article>
          <article><b>03</b><h3>نام ماندگار</h3><p>از منابع یونانی تا روایت‌های ایرانی و کتاب مقدس، تصویر کوروش در فرهنگ‌های مختلف ادامه پیدا کرد.</p></article>
        </div>
      </section>

      <section className="timeline" id="timeline">
        <div className="timeline-title"><p className="eyebrow">۰۳ — خط زمان</p><h2>روایت<br /><em>در زمان</em></h2></div>
        <div className="timeline-list">
          {timeline.map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="pasargadae">
        <div className="mountain" />
        <div className="pasargadae-content"><p className="ancient">𐎱𐎠𐎿𐎠𐎼𐎥𐎠𐎭𐎠</p><h2>پاسارگاد</h2><p>سنگ‌هایی که هنوز ایستاده‌اند؛ روایتی که هنوز تمام نشده.</p></div>
      </section>

      <footer>
        <div><span className="footer-seal">𐎤</span><strong>کوروش بزرگ</strong><small>یادبود یک نام ماندگار</small></div>
        <p>تاریخ را فقط نخوان؛<br /><em>از آن چیزی بساز که ارزش ماندن داشته باشد.</em></p>
        <span className="year">MYK · 2026</span>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');
        :root { --gold:#c9a45c; --gold2:#f0d18d; --ink:#090806; --paper:#eee5d3; --muted:#a99f8d; }
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:var(--ink);color:var(--paper);font-family:Vazirmatn,sans-serif} a{color:inherit;text-decoration:none}.cyrus-site{overflow:hidden;background:radial-gradient(circle at 70% 5%,#211b10 0,#090806 35%,#050504 100%);min-height:100vh}.grain{position:fixed;inset:0;pointer-events:none;opacity:.075;z-index:20;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E")}.stars{position:fixed;inset:0;pointer-events:none;opacity:.25;background-image:radial-gradient(#e5c887 1px,transparent 1px);background-size:83px 83px;mask-image:linear-gradient(#000,transparent 75%)}.nav{height:82px;border-bottom:1px solid #ffffff14;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;position:absolute;top:0;left:0;right:0;z-index:5}.seal,.footer-seal{font-size:28px;color:var(--gold);border:1px solid #c9a45c55;border-radius:50%;width:43px;height:43px;display:grid;place-items:center}.nav-center{display:flex;gap:42px;font-size:13px;color:#bdb4a3}.nav-center a:hover{color:var(--gold2)}.nav-mark{font-family:serif;font-size:12px;letter-spacing:2px;color:#8f887b}.hero{min-height:100vh;position:relative;display:flex;align-items:center;padding:120px 10vw 70px}.hero-meta{position:absolute;top:112px;right:10vw;font-size:11px;letter-spacing:2px;color:#968d7d}.hero-meta span{color:var(--gold);padding:0 10px}.hero-title-wrap{position:relative;z-index:2;max-width:690px}.ancient{font-family:serif;letter-spacing:9px;color:#b69452;font-size:20px;margin:0 0 20px;opacity:.8}.hero h1{font-family:Playfair Display,serif;font-size:clamp(82px,13vw,190px);line-height:.77;margin:0;letter-spacing:-7px;font-weight:600}.hero h1 i,.manifesto h2 em,.cylinder h2 em,.timeline h2 em{font-weight:500;color:var(--gold2);font-style:italic}.hero-sub{font-size:17px;line-height:2;color:#aaa193;max-width:500px;margin:48px 0 0}.hero-sub strong{color:#e1d8c8;font-weight:500}.hero-symbol{position:absolute;width:min(47vw,620px);height:min(47vw,620px);left:7vw;top:50%;transform:translateY(-46%);opacity:.62}.hero-symbol:before{content:"";position:absolute;inset:10%;border:1px solid #c9a45c35;border-radius:50%;box-shadow:0 0 90px #c9a45c12}.figure{position:absolute;inset:25%;display:grid;place-items:center;font-size:130px;color:#c9a45c12;filter:drop-shadow(0 0 30px #c9a45c55)}.wing{position:absolute;top:37%;width:42%;height:18%;border-top:1px solid #c9a45c77}.wing-left{left:0;transform:rotate(12deg);border-radius:100% 0 0 0}.wing-right{right:0;transform:rotate(-12deg);border-radius:0 100% 0 0}.orbit-line{position:absolute;border:1px solid #c9a45c35;border-radius:50%}.o1{inset:18% 0;transform:rotate(-14deg)}.o2{inset:0 18%;transform:rotate(19deg)}.scroll-cue{position:absolute;bottom:38px;right:10vw;font-size:10px;letter-spacing:2px;color:#71695c;display:flex;align-items:center;gap:14px}.scroll-cue span{height:1px;width:45px;background:var(--gold)}section{position:relative}.manifesto{padding:150px 10vw;display:grid;grid-template-columns:110px 1.2fr .8fr;gap:50px;border-top:1px solid #ffffff0d;background:linear-gradient(180deg,#0a0907,#11100c)}.section-no{font-family:serif;color:#75684f;font-size:18px}.eyebrow{color:var(--gold);font-size:11px;letter-spacing:3px;margin:0 0 28px}.manifesto h2{font-family:Playfair Display,serif;font-size:clamp(48px,6vw,86px);line-height:1.02;font-weight:500;margin:0 0 40px}.manifesto-copy>p:last-child,.cylinder-copy>p:not(.eyebrow){color:#aaa193;line-height:2.1;max-width:590px;font-size:15px}.quote-card{align-self:end;border-top:1px solid #c9a45c55;padding:45px 0 0}.quote-mark{font-family:serif;font-size:75px;color:var(--gold);line-height:.3}.quote-card p{font-family:Playfair Display,serif;font-size:26px;line-height:1.6;color:#d7cdbb}.quote-card small{color:#776f62}.cylinder{display:grid;grid-template-columns:1fr 1fr;min-height:720px;background:#14110b;border-top:1px solid #c9a45c1f}.cylinder-art{display:grid;place-items:center;position:relative;background:radial-gradient(circle,#3a2b16 0,#181209 42%,#0a0907 75%)}.cylinder-glow{position:absolute;width:390px;height:390px;border-radius:50%;background:#c9a45c18;filter:blur(45px)}.clay-cylinder{width:170px;height:390px;border-radius:48% 48% 40% 40%;background:linear-gradient(90deg,#6e4c28,#b7864a 35%,#e1b66e 53%,#80562d 76%,#4d321b);transform:rotate(16deg);box-shadow:30px 40px 80px #000;display:grid;place-items:center;position:relative}.clay-cylinder:after{content:"";position:absolute;inset:4% 13%;border:1px dashed #40291466;border-radius:45%}.clay-text{font-family:serif;color:#432b17;writing-mode:vertical-rl;letter-spacing:7px;font-size:28px}.clay-text small{font-size:13px}.cylinder-copy{padding:130px 10vw 100px 8vw}.cylinder h2{font-family:Playfair Display,serif;font-size:clamp(55px,7vw,100px);line-height:.9;font-weight:500;margin:0 0 45px}.fact-row{display:flex;gap:35px;border-top:1px solid #ffffff18;margin-top:55px;padding-top:22px;color:#817766;font-size:11px}.legacy{padding:150px 10vw;background:#0a0907}.section-head{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ffffff15;padding-bottom:20px}.section-head .eyebrow{margin:0}.section-head>span{font-family:serif;color:#5f574a;letter-spacing:4px;font-size:11px}.legacy-grid{display:grid;grid-template-columns:repeat(3,1fr);margin-top:80px}.legacy-grid article{padding:25px 45px;border-right:1px solid #ffffff14;min-height:280px}.legacy-grid article:first-child{padding-right:0}.legacy-grid article:last-child{border:0}.legacy-grid b{font-family:serif;color:var(--gold);font-weight:400}.legacy-grid h3{font-family:Playfair Display,serif;font-size:42px;font-weight:500;margin:35px 0 20px}.legacy-grid p{color:#928a7c;line-height:2;font-size:14px}.timeline{padding:150px 10vw;display:grid;grid-template-columns:.7fr 1.3fr;gap:10vw;background:#0f0d09}.timeline-title h2{font-family:Playfair Display,serif;font-size:90px;font-weight:500;line-height:.9;margin:0}.timeline-list article{display:grid;grid-template-columns:80px 1fr;gap:25px;padding:32px 0;border-top:1px solid #ffffff14}.timeline-list article>span{font-family:serif;color:#766548}.timeline-list h3{font-family:Playfair Display,serif;font-size:31px;margin:0 0 10px;font-weight:500}.timeline-list p{margin:0;color:#928a7c;line-height:2}.pasargadae{height:650px;overflow:hidden;display:grid;place-items:center;background:linear-gradient(#09080688,#090806),radial-gradient(ellipse at 50% 100%,#59462a,#0a0907 60%)}.mountain{position:absolute;bottom:-190px;width:120%;height:430px;background:#17130c;clip-path:polygon(0 100%,0 72%,16% 56%,27% 68%,41% 42%,53% 60%,65% 31%,75% 57%,89% 40%,100% 62%,100% 100%)}.pasargadae-content{text-align:center;z-index:1}.pasargadae-content .ancient{font-size:18px}.pasargadae h2{font-family:Playfair Display,serif;font-size:100px;font-weight:500;margin:0}.pasargadae-content>p:last-child{color:#9c907b}footer{padding:65px 10vw;border-top:1px solid #ffffff14;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;gap:30px}footer>div{display:grid;grid-template-columns:auto 1fr;column-gap:15px;align-items:center}footer strong{font-family:Playfair Display,serif;font-size:22px;font-weight:500}footer small{grid-column:2;color:#6f6759;font-size:10px}footer p{margin:0;color:#8c8374;line-height:1.8;text-align:center;font-size:13px}footer em{color:#c8bda9}.year{text-align:left;color:#625a4d;font-size:10px;letter-spacing:3px}
        @media(max-width:800px){.nav-center{display:none}.nav{padding:0 6vw}.hero{padding:150px 7vw 100px;min-height:900px;align-items:flex-start}.hero-meta{right:7vw;top:105px}.hero h1{font-size:86px;letter-spacing:-4px}.hero-symbol{width:90vw;height:90vw;left:5vw;top:55%;opacity:.38}.hero-sub{font-size:14px;margin-top:35px}.manifesto,.cylinder,.timeline{display:block;padding:100px 7vw}.manifesto{padding-top:100px}.section-no{margin-bottom:55px}.quote-card{margin-top:70px}.cylinder{padding:0}.cylinder-art{height:500px}.cylinder-copy{padding:85px 7vw}.legacy{padding:100px 7vw}.legacy-grid{display:block;margin-top:45px}.legacy-grid article,.legacy-grid article:first-child{border-right:0;border-bottom:1px solid #ffffff14;padding:35px 0;min-height:0}.timeline-title{margin-bottom:70px}.timeline-title h2{font-size:70px}.timeline-list article{grid-template-columns:50px 1fr}.pasargadae{height:520px}.pasargadae h2{font-size:65px}footer{padding:50px 7vw;display:block;text-align:center}footer>div{justify-content:center}footer p{margin:45px 0}.year{display:block;text-align:center}.clay-cylinder{width:130px;height:300px}.cylinder h2{font-size:70px}}
      `}</style>
    </main>
  );
}
