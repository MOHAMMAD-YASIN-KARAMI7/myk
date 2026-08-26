import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'کوروش بزرگ | میراث یک شاهنشاه',
  description: 'یادبود دیجیتال کوروش بزرگ؛ روایتی سینمایی از زندگی، میراث و منشور کوروش.',
  keywords: ['کوروش بزرگ','هخامنشیان','پاسارگاد','منشور کوروش','ایران باستان'],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
