import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ii-elita-lab.karina-komyak.chatgpt.site'),
  title: 'Новая Эра ИИ — курс Ксении Барановой',
  description: 'Бесплатный двухдневный практический курс Ксении Барановой: ИИ-агенты, видео, вайбкодинг и готовое портфолио.',
  openGraph: {
    title: 'Новая Эра ИИ — Ксения Баранова',
    description: 'ИИ-агенты, видео, вайбкодинг и готовое портфолио.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Новая Эра ИИ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Новая Эра ИИ — Ксения Баранова',
    description: 'ИИ-агенты, видео, вайбкодинг и готовое портфолио.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><head><link rel="preload" href="/fonts/montserrat-cyrillic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /><link rel="preload" href="/fonts/manrope-cyrillic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body>{children}</body></html>;
}
