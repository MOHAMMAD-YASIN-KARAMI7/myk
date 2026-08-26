import type { Metadata } from 'next';

const title = 'کوروش بزرگ | میراث یک شاهنشاه';
const description = 'یادبود دیجیتال کوروش بزرگ؛ روایتی از زندگی، میراث، پاسارگاد و منشور کوروش.';

export interface PageMetadataConfig { title: string; description: string; path?: string; }

export function generateMetadata(config: PageMetadataConfig): Metadata {
  const path = config.path || '/';
  return {
    title: config.title || title,
    description: config.description || description,
    keywords: ['کوروش بزرگ','هخامنشیان','پاسارگاد','منشور کوروش','ایران باستان'],
    alternates: { canonical: path },
    openGraph: { type: 'website', locale: 'fa_IR', title: config.title || title, description: config.description || description },
  };
}
