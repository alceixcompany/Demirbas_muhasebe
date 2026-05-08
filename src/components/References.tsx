'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';

const References = () => {
  const [counts, setCounts] = useState({
    firms: 0,
    declarations: 0,
    years: 0,
    satisfaction: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    firms: 250,
    declarations: 1200,
    years: 10,
    satisfaction: 98,
  };

  const animateCount = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void
  ) => {
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(start + (end - start) * easeOutQuart);

      callback(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            animateCount(0, targetCounts.firms, 1800, (value) =>
              setCounts((prev) => ({ ...prev, firms: value }))
            );
            animateCount(0, targetCounts.declarations, 1800, (value) =>
              setCounts((prev) => ({ ...prev, declarations: value }))
            );
            animateCount(0, targetCounts.years, 1800, (value) =>
              setCounts((prev) => ({ ...prev, years: value }))
            );
            animateCount(0, targetCounts.satisfaction, 1800, (value) =>
              setCounts((prev) => ({ ...prev, satisfaction: value }))
            );
          }
        });
      },
      { threshold: 0.35 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetCounts.declarations, targetCounts.firms, targetCounts.satisfaction, targetCounts.years]);

  const references = [
    {
      name: 'A.G.',
      sector: 'Perakende İşletmesi',
      location: 'İstanbul',
      rating: 5,
      comment:
        'Evrak toplama ve aylık beyanname takibimiz çok daha düzenli hale geldi. Ne zaman neyin yapılacağını net şekilde biliyoruz.',
    },
    {
      name: 'S.K.',
      sector: 'Hizmet Şirketi',
      location: 'Bahçelievler',
      rating: 5,
      comment:
        'Bordro ve SGK süreçlerinde hızlı geri dönüş almamız iş yükümüzü ciddi biçimde azalttı. Düzenli ve güven veren bir ekip.',
    },
    {
      name: 'M.T.',
      sector: 'E-ticaret Girişimi',
      location: 'İkitelli',
      rating: 5,
      comment:
        'Şirket kuruluşundan itibaren tüm mali adımları anlaşılır şekilde yönlendirdiler. Özellikle yeni girişimler için çok rahatlatıcı.',
    },
    {
      name: 'E.Y.',
      sector: 'İnşaat Tedarik Firması',
      location: 'Bakırköy',
      rating: 5,
      comment:
        'Demirbaş Muhasebe ile süreçler sadece takip edilmiyor; bize önceden hatırlatılıyor ve işimiz kolaylaşıyor.',
    },
  ] as const;

  return (
    <section id="referanslar" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-[var(--lale-anthracite)] sm:text-5xl">
            Müşterilerimizin Yorumları
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {references.slice(0, 3).map((item) => (
            <article
              key={`${item.name}-${item.sector}`}
              className="relative rounded-xl border border-[rgba(139,114,99,0.10)] bg-white p-8 shadow-sm"
            >
              <div className="absolute right-4 top-4 text-5xl text-[var(--lale-gold)]/10">“</div>
              <p className="mb-8 italic leading-8 text-[#5a666d]">{item.comment}</p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7e4ec] text-sm font-semibold text-[var(--lale-gold)]">
                  {item.name}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--lale-anthracite)]">{item.sector}</h4>
                  <p className="flex items-center gap-2 text-xs text-[#5a666d]">
                    <FiMapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          ref={statsRef}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="rounded-xl border border-[rgba(139,114,99,0.12)] bg-white p-5 text-center shadow-sm">
            <div className="text-3xl font-bold text-[var(--lale-gold)]">
              {counts.firms}+
            </div>
            <p className="mt-2 text-sm text-[#5a666d]">Desteklenen firma</p>
          </div>
          <div className="rounded-xl border border-[rgba(139,114,99,0.12)] bg-white p-5 text-center shadow-sm">
            <div className="text-3xl font-bold text-[var(--lale-gold)]">
              {counts.declarations}+
            </div>
            <p className="mt-2 text-sm text-[#5a666d]">Yıllık işlem ve bildirim</p>
          </div>
          <div className="rounded-xl border border-[rgba(139,114,99,0.12)] bg-white p-5 text-center shadow-sm">
            <div className="text-3xl font-bold text-[var(--lale-gold)]">
              {counts.years}+
            </div>
            <p className="mt-2 text-sm text-[#5a666d]">Yıllık deneyim</p>
          </div>
          <div className="rounded-xl border border-[rgba(139,114,99,0.12)] bg-white p-5 text-center shadow-sm">
            <div className="text-3xl font-bold text-[var(--lale-gold)]">
              %{counts.satisfaction}
            </div>
            <p className="mt-2 text-sm text-[#5a666d]">Memnuniyet oranı</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
