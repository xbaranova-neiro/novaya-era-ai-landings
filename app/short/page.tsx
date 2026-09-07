import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'Новая Эра ИИ — короткая версия',
  description: 'Короткая версия бесплатного трёхдневного практического курса без регистрационного подарка.',
};

export default function ShortPage() {
  return <Home variant="short" assetBase="/" />;
}
