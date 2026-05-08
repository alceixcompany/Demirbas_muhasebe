'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  if (isAdminPage) {
    return null;
  }

  return (
    <footer className="relative mt-12 overflow-hidden rounded-t-[40px] bg-[#0a161b] text-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[var(--lale-gold)]/5 blur-3xl"></div>
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_1.2fr_1fr]">
            <div className="flex flex-col items-start">
              <Link href="/" className="group">
                <div className="relative h-12 w-48 transition-all duration-300">
                  <Image
                    src="/demirbaslogo.png"
                    alt="Demirbaş Muhasebe Logo"
                    fill
                    className="object-contain object-left brightness-0 invert"
                  />
                </div>
              </Link>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-[#c7dde9]/80">
                Türkiye'de dijital uyum, vergi planlaması ve mali süreç yönetimi
                tarafında şirketlere düzen, hız ve görünürlük kazandıran kurumsal
                danışmanlık modeli sunuyoruz.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a href="tel:+905320000000" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-[var(--lale-gold)] hover:text-[#1e333c] hover:border-[var(--lale-gold)]">
                  <FiPhone className="h-5 w-5" />
                </a>
                <a href="mailto:info@demirbasmuhasebe.com" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-[var(--lale-gold)] hover:text-[#1e333c] hover:border-[var(--lale-gold)]">
                  <FiMail className="h-5 w-5" />
                </a>
                <div className="h-12 w-px bg-white/10 mx-2"></div>
                <div className="flex gap-4">
                  <FiLinkedin className="h-5 w-5 text-[#c7dde9]/60 hover:text-[var(--lale-gold)] cursor-pointer transition-colors" />
                  <FiInstagram className="h-5 w-5 text-[#c7dde9]/60 hover:text-[var(--lale-gold)] cursor-pointer transition-colors" />
                  <FiTwitter className="h-5 w-5 text-[#c7dde9]/60 hover:text-[var(--lale-gold)] cursor-pointer transition-colors" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white relative inline-block">
                Hızlı Erişim
                <span className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-[var(--lale-gold)]"></span>
              </h3>
              <ul className="mt-10 space-y-4 text-[15px] text-[#c7dde9]/70">
                <li>
                  <Link href="/" className="transition-all hover:text-[var(--lale-gold)] hover:pl-1">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className="transition-all hover:text-[var(--lale-gold)] hover:pl-1">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetlerimiz" className="transition-all hover:text-[var(--lale-gold)] hover:pl-1">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link href="/haberler" className="transition-all hover:text-[var(--lale-gold)] hover:pl-1">
                    Uzmanlık & Blog
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="transition-all hover:text-[var(--lale-gold)] hover:pl-1">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white relative inline-block">
                Hizmetler
                <span className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-[var(--lale-gold)]"></span>
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-y-4 text-[15px] text-[#c7dde9]/70">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--lale-gold)]/40"></span>
                  Genel Muhasebe & Vergi
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--lale-gold)]/40"></span>
                  Bordro & SGK İşlemleri
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--lale-gold)]/40"></span>
                  Şirket Kuruluşu & Danışmanlık
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--lale-gold)]/40"></span>
                  E-Dönüşüm Süreçleri
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--lale-gold)]/40"></span>
                  Finansal Raporlama
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--lale-gold)]/40"></span>
                  Mali Müşavirlik Hizmetleri
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white relative inline-block">
                İletişim
                <span className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-[var(--lale-gold)]"></span>
              </h3>
              <ul className="mt-10 space-y-6 text-[15px] leading-relaxed text-[#c7dde9]/70">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[var(--lale-gold)]">
                    <FiMapPin className="h-4 w-4" />
                  </div>
                  <span>Merkez Ofis, İstanbul, Türkiye</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[var(--lale-gold)]">
                    <FiPhone className="h-4 w-4" />
                  </div>
                  <span>+90 (532) 000 00 00</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[var(--lale-gold)]">
                    <FiMail className="h-4 w-4" />
                  </div>
                  <span>info@demirbasmuhasebe.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col gap-6 text-center text-sm text-[#c7dde9]/40 md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © 2025 <span className="font-bold text-white">Demirbaş Muhasebe</span>. Tüm hakları saklıdır.
            </p>

            <div className="flex items-center justify-center gap-8 md:justify-end">
              <a
                href="https://www.alceix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Dijital Altyapı <span className="font-bold text-white/60 hover:text-white transition-colors ml-1">Alceix</span>
              </a>
              <Link href="/hakkimizda" className="transition-colors hover:text-white">
                Gizlilik
              </Link>
              <Link href="/iletisim" className="transition-colors hover:text-white">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
