import React from 'react';
import {
  FiEye,
  FiLock,
  FiShield,
  FiStar,
  FiZap,
} from 'react-icons/fi';

const WhyChooseUs = () => {
  return (
    <section id="hakkimizda" className="bg-geometric py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-[var(--lale-anthracite)] sm:text-5xl">
            Neden Demirbaş Muhasebe?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5a666d]">
            Değerlerimiz ve süreç disiplinimiz, uzun vadeli iş ortaklıklarının temelini oluşturur.
          </p>
        </div>

        <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2 md:[grid-auto-rows:minmax(0,1fr)]">
          <div className="rounded-xl border border-[rgba(139,114,99,0.18)] bg-white p-10 shadow-sm md:col-span-2">
            <FiEye className="mb-6 h-12 w-12 text-[var(--lale-gold)]" />
            <h3 className="text-2xl font-bold text-[var(--lale-anthracite)]">Şeffaflık</h3>
            <p className="mt-4 text-base leading-7 text-[#5a666d]">
              Tüm süreçlerde açık iletişim, net raporlama ve görünür takvim yapısı
              ile çalışıyoruz. Gizli maliyetler değil, ölçülebilir sonuçlar sunuyoruz.
            </p>
          </div>

          <div className="rounded-xl bg-[var(--lale-gold)] p-10 text-center text-white shadow-lg md:col-span-1">
            <FiZap className="mx-auto mb-6 h-12 w-12" />
            <h3 className="text-2xl font-bold">Hız</h3>
            <p className="mt-4 text-sm leading-6 text-white/85">
              Dijital akışlarla karar verme ve onay süreçlerinizi yavaşlatmadan ilerliyoruz.
            </p>
          </div>

          <div className="rounded-xl bg-[#1e333c] p-10 text-white md:col-span-1 md:row-span-2">
            <FiLock className="mb-8 h-14 w-14 text-[var(--lale-gold)]" />
            <h3 className="text-3xl font-bold">Güvenlik</h3>
            <p className="mb-4 mt-4 text-sm leading-7 text-white/72">
              Verileriniz yüksek hassasiyetle işlenir. Finansal gizlilik ve bilgi
              güvenliği, tüm işleyişimizin temel parçasıdır.
            </p>
            <div className="mt-8 h-1 w-full overflow-hidden rounded bg-white/20">
              <div className="h-full w-full bg-[var(--lale-gold)]" />
            </div>
          </div>

          <div className="rounded-xl border border-[rgba(139,114,99,0.18)] bg-white p-10 shadow-sm md:col-span-3">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#ffdcc6] text-[var(--lale-gold)]">
                <FiShield className="h-12 w-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--lale-anthracite)]">Uzmanlık</h3>
                <p className="mt-4 text-base leading-7 text-[#5a666d]">
                  Farklı sektörlerdeki deneyimimizle firmanıza özel mali stratejiler
                  geliştiriyor, mevzuat ve operasyon tarafını aynı anda gözeten
                  profesyonel bir çalışma modeli sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
