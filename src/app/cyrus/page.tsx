'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUpRight, BookOpen, Crown, Landmark, Sparkles } from 'lucide-react';

const timeline = [
  { year: 'حدود ۵۵۹ پ.م.', title: 'آغاز پادشاهی', text: 'کوروش، فرمانروای انشان، به یکی از اثرگذارترین چهره‌های تاریخ باستان تبدیل شد.' },
  { year: '۵۵۰ پ.م.', title: 'شکل‌گیری هخامنشیان', text: 'با پیروزی بر مادها، پایه‌های شاهنشاهی هخامنشی استوار شد.' },
  { year: '۵۳۹ پ.م.', title: 'فتح بابل', text: 'ورود کوروش به بابل یکی از نقاط عطف تاریخ خاور نزدیک باستان بود.' },
  { year: '۵۳۰ پ.م.؟', title: 'پایان یک دوره', text: 'مرگ کوروش پایان زندگی او بود، اما میراث سیاسی و فرهنگی‌اش قرن‌ها ادامه یافت.' },
];

export default function CyrusPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#090806] text-[#f4ead4] selection:bg-amber-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_10%,rgba(214,165,75,.22),transparent_28%),radial-gradient(circle_at_80%_60%,rgba(120,77,24,.18),transparent_30%)]" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <div className="flex items-center gap-3 text-sm tracking-[0.25em] text-amber-200/80">
          <Crown className="h-5 w-5" />
          <span>MYK • HERITAGE</span>
        </div>
        <a href="#story" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur transition hover:border-amber-300/40 hover:text-amber-200">
          روایت را ببین
        </a>
      </nav>

      <section className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center px-6 pb-24 pt-10">
        <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-200/[.06] px-4 py-2 text-xs font-medium text-amber-200">
              <Sparkles className="h-4 w-4" /> چهارم شهریور ۱۴۰۵ • بزرگداشت یک میراث تاریخی
            </div>
            <p className="mb-4 text-sm font-medium tracking-[.35em] text-amber-300/70">۵۵۹ — ۵۳۰ پیش از میلاد</p>
            <h1 className="text-6xl font-black leading-[1.05] tracking-tight sm:text-8xl">
              کوروش
              <span className="block bg-gradient-to-l from-amber-200 via-yellow-500 to-orange-700 bg-clip-text text-transparent">بزرگ</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/60 sm:text-xl">
              روایتی کوتاه از فرمانروایی که نامش با آغاز شاهنشاهی هخامنشی و یکی از مهم‌ترین فصل‌های تاریخ ایران گره خورده است.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#story" className="group inline-flex items-center gap-2 rounded-full bg-amber-200 px-6 py-3 font-bold text-[#17110a] transition hover:-translate-y-0.5 hover:bg-amber-100">
                ورود به روایت <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#timeline" className="rounded-full border border-white/10 px-6 py-3 font-bold text-white/75 transition hover:border-amber-200/30 hover:text-amber-200">خط زمانی</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-[3rem] border border-amber-300/20 rotate-6" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#342411] via-[#15110b] to-black p-8 shadow-2xl shadow-amber-950/30">
              <div className="flex h-full flex-col justify-between rounded-[2.3rem] border border-amber-200/10 bg-[#0c0a07]/70 p-8">
                <div className="flex justify-between text-amber-300/60"><span>𐎤𐎠𐎫𐎠</span><span>01</span></div>
                <div className="text-center">
                  <div className="mx-auto mb-7 grid h-40 w-40 place-items-center rounded-full border border-amber-300/30 bg-amber-300/[.04] shadow-[0_0_80px_rgba(218,165,75,.12)]">
                    <svg viewBox="0 0 180 180" className="h-28 w-28 text-amber-300/80" fill="none" stroke="currentColor" strokeWidth="3">
                      <circle cx="90" cy="90" r="30" />
                      <path d="M60 90H20M120 90h40M68 68 38 38M112 68l30-30M68 112l-30 30M112 112l30 30" />
                      <path d="M50 90c-14-12-23-10-31 0 8 10 17 12 31 0ZM130 90c14-12 23-10 31 0-8 10-17 12-31 0Z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-black text-amber-100">شاهنشاهی هخامنشی</h2>
                  <p className="mt-3 text-sm leading-7 text-white/45">یک میراث تاریخی؛ فراتر از یک نام</p>
                </div>
                <div className="flex items-end justify-between text-xs text-white/35"><span>PASARGADAE</span><span>IRAN</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="relative border-y border-white/5 bg-white/[.025] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs tracking-[.3em] text-amber-300/60">THE STORY</p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">چرا هنوز<br />از او می‌گوییم؟</h2>
            </div>
            <div className="space-y-7 text-lg leading-9 text-white/60">
              <p>کوروش بزرگ بنیان‌گذار شاهنشاهی هخامنشی بود؛ ساختاری سیاسی که در سده ششم پیش از میلاد در بخش بزرگی از غرب و جنوب آسیا گسترش یافت.</p>
              <p>درباره شخصیت و سیاست‌های او روایت‌های تاریخی گوناگونی وجود دارد. منشور کوروش نیز از مهم‌ترین اسناد مرتبط با دوران اوست و امروز در موزه بریتانیا نگهداری می‌شود؛ تفسیر آن به‌عنوان «اولین منشور حقوق بشر جهان» میان پژوهشگران محل بحث است.</p>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {[['01','پاسارگاد','آرامگاه منسوب به کوروش'],['02','بابل','یکی از مهم‌ترین فتوحات'],['03','منشور','سند مهم دوره هخامنشی']].map(([n,t,d]) => (
                  <div key={n} className="rounded-2xl border border-white/10 bg-black/20 p-5"><span className="text-xs text-amber-300/50">{n}</span><h3 className="mt-3 font-bold text-amber-100">{t}</h3><p className="mt-2 text-sm leading-6 text-white/40">{d}</p></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div><p className="text-xs tracking-[.3em] text-amber-300/60">TIMELINE</p><h2 className="mt-3 text-4xl font-black">چند نقطه از مسیر</h2></div>
          <Landmark className="hidden h-10 w-10 text-amber-300/30 sm:block" />
        </div>
        <div className="space-y-3">
          {timeline.map((item, i) => (
            <button key={item.year} onClick={() => setOpen(open === i ? null : i)} className="w-full rounded-3xl border border-white/10 bg-white/[.025] p-6 text-right transition hover:border-amber-300/20 hover:bg-amber-200/[.035]">
              <div className="flex items-center justify-between gap-5"><div className="flex items-center gap-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber-200/10 text-sm font-bold text-amber-200">{String(i + 1).padStart(2,'0')}</span><div><p className="text-xs text-amber-300/50">{item.year}</p><h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3></div></div>{open === i ? <ArrowUp className="h-5 w-5 text-amber-200" /> : <ArrowDown className="h-5 w-5 text-white/30" />}</div>
              {open === i && <p className="mr-[3.75rem] mt-5 max-w-3xl text-sm leading-7 text-white/50">{item.text}</p>}
            </button>
          ))}
        </div>
      </section>

      <section className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <BookOpen className="mx-auto h-9 w-9 text-amber-300/70" />
          <p className="mt-7 text-3xl font-black leading-[1.6] text-amber-100 sm:text-5xl">«تاریخ فقط گذشته نیست؛ چیزی است که از آن می‌آموزیم و به آینده می‌بریم.»</p>
          <p className="mt-6 text-sm text-white/35">— یادبود دیجیتال کوروش بزرگ • ساخته‌شده برای گرامی‌داشت میراث ایران</p>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-white/30">© 2026 MYK Heritage • ساخته‌شده با احترام به تاریخ و پژوهش</footer>
    </main>
  );
}
