'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiFileText,
  FiShield,
  FiUsers,
} from 'react-icons/fi';

const services = [
  {
    icon: FiFileText,
    title: 'Genel Muhasebe',
    image: '/banner/srv_accounting.png',
    description:
      'Yevmiye kayıtları, aylık muhasebe düzeni ve resmi süreçlerin takibini tek merkezden planlı ve eksiksiz şekilde yürütüyoruz.',
    highlights: ['Aylık evrak takibi', 'Düzenli mali kayıt yönetimi'],
  },
  {
    icon: FiShield,
    title: 'Vergi ve Beyanname',
    image: '/banner/srv_tax.png',
    description:
      'KDV, muhtasar, geçici vergi ve diğer beyan süreçlerini mevzuata uygun, zamanında ve kontrollü biçimde hazırlıyoruz.',
    highlights: ['Son tarih kontrolü', 'Risk azaltan süreç disiplini'],
  },
  {
    icon: FiUsers,
    title: 'Bordro ve SGK',
    image: '/banner/srv_payroll.png',
    description:
      'Personel özlük işlemleri, maaş bordroları, işe giriş-çıkış ve SGK bildirimlerini düzenli bir operasyon akışıyla yönetiyoruz.',
    highlights: ['Personel süreç takibi', 'SGK bildirim desteği'],
  },
  {
    icon: FiBarChart2,
    title: 'Finansal Danışmanlık',
    image: '/banner/srv_consulting.png',
    description:
      'Şirketinizin nakit akışı, mali yükümlülükleri ve büyüme kararları için veriye dayalı, anlaşılır danışmanlık sağlıyoruz.',
    highlights: ['Raporlama bakışı', 'Karar destek yaklaşımı'],
  },
] as const;

const Services = () => {
  return (
    <section id="hizmetler" className="bg-white py-24 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--lale-gold)]">
            Hizmet Başlıklarımız
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--lale-anthracite)] sm:text-5xl">
            Uzmanlık Alanlarımız
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 bg-[var(--lale-gold)]" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-md text-[var(--lale-gold)] shadow-lg">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[var(--lale-anthracite)] group-hover:text-[var(--lale-gold)] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5a666d]">
                  {service.description}
                </p>
                <div className="mt-6 space-y-2">
                  {service.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-xs text-[#546067]">
                      <FiCheck className="h-3.5 w-3.5 text-[var(--lale-gold)]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/hizmetlerimiz" 
                  className="mt-8 pt-4 border-t border-gray-50 inline-flex items-center gap-2 text-xs font-bold text-[var(--lale-gold)] uppercase tracking-widest group/link"
                >
                  DETAYLI BİLGİ
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
