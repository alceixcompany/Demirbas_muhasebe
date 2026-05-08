import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex min-h-[820px] items-center overflow-hidden bg-[#f3faff]">
      <div className="absolute inset-0">
        <Image
          src="/banner/hero_bg_home.png"
          alt="Demirbas Muhasebe kurumsal arka plan"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[rgba(30,51,60,0.60)] mix-blend-multiply" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(150,73,0,0.28),transparent_48%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block rounded bg-[var(--lale-gold)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm">
            Geleceğinizi Yönetin
          </div>

          <h1 className="max-w-[820px] text-[42px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[68px]">
            Finansal Geleceğinizi
            <span className="block">Güvence Altına Alın</span>
          </h1>

          <p className="mb-10 mt-8 max-w-2xl text-lg leading-8 text-white/90">
            Modern dijital stratejiler ve köklü mali disiplin ile işletmenizin
            büyümesini destekliyor, vergi, bordro ve raporlama süreçlerinizi
            daha şeffaf ve yönetilebilir hale getiriyoruz.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/iletisim" className="rounded-xl bg-[var(--lale-gold)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition-colors hover:bg-[#f57c00]">
              Ücretsiz Danışmanlık Al
            </Link>
            <Link href="/hizmetlerimiz" className="rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10">
              Hizmet Alanlarını İncele
            </Link>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-1 gap-5 border-y border-white/16 py-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-[var(--lale-gold)]">15+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">Yıllık deneyim</p>
            </div>
            <div className="sm:border-l sm:border-white/16 sm:pl-5">
              <p className="text-2xl font-bold text-[var(--lale-gold)]">250+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">Kurumsal müşteri</p>
            </div>
            <div className="sm:border-l sm:border-white/16 sm:pl-5">
              <p className="text-2xl font-bold text-[var(--lale-gold)]">98%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">Memnuniyet oranı</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
