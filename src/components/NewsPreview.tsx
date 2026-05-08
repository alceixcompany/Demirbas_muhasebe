'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import { db } from '@/lib/firebase';

interface Haber {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  isActive?: boolean;
  order?: number;
  createdAt?: string;
}

const createSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

const formatDate = (value?: string) => {
  if (!value) {
    return 'Güncel içerik';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return 'Güncel içerik';
  }

  return date.toLocaleDateString('tr-TR');
};

const NewsPreview = () => {
  const [news, setNews] = useState<Haber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const snapshot = await getDocs(collection(db, 'haberler'));
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Haber[];
        const activeItems = items
          .filter((item) => item.isActive !== false)
          .sort((a, b) => {
            const aOrder = a.order ?? 0;
            const bOrder = b.order ?? 0;
            if (aOrder !== bOrder) {
              return aOrder - bOrder;
            }
            return (b.createdAt ?? '').localeCompare(a.createdAt ?? '');
          })
          .slice(0, 3);

        setNews(activeItems);
      } catch (error) {
        console.error('Ana sayfa haberleri yuklenemedi:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading && news.length === 0) return null;
  if (!loading && news.length === 0) return null;

  return (
    <section id="haberler" className="bg-white py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold)]">
              Mali Gündem
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-[var(--lale-anthracite)] sm:text-5xl">
              Haberler ve duyurular
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5a666d]">
              Vergi takvimi, mevzuat değişiklikleri ve işletmeler için önemli mali başlıkları
              kısa özetlerle takip edin.
            </p>
          </div>

          <Link
            href="/haberler"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--lale-gold)] transition-colors hover:text-[#d97706]"
          >
            Tüm haberleri incele
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {news.map((item, index) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/40 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={item.imageUrl || '/banner/news_hero.png'}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,51,60,0.40)] to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--lale-gold)] shadow-sm">
                  {item.tags?.[0] || 'Muhasebe'}
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#7b6a5f]">
                  <FiCalendar className="h-3.5 w-3.5 text-[var(--lale-gold)]" />
                  <span>{formatDate(item.createdAt)}</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-[var(--lale-anthracite)]">
                  {item.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#5a666d]">
                  {item.description || 'Güncel mali gelişmeler ve işletmeler için önemli hatırlatmalar.'}
                </p>

                <Link
                  href={`/haberler/${createSlug(item.title)}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--lale-gold)] transition-all group-hover:underline"
                >
                  Devamını Oku
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
