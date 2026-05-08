'use client'
import React from 'react';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiSend, FiClock } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="iletisim" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          
          {/* Image & Info Side */}
          <div className="relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border border-gray-100">
              <Image 
                src="/banner/contact_home_side.png" 
                alt="İletişim" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Contact Card over Image */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-[var(--lale-anthracite)] mb-4">Hızlı İletişim</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--lale-gold)]/10 text-[var(--lale-gold)]">
                      <FiPhone className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-bold text-[var(--lale-anthracite)]">+90 (532) 000 00 00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--lale-gold)]/10 text-[var(--lale-gold)]">
                      <FiMail className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-[#5a666d]">info@demirbasmuhasebe.com</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[var(--lale-gold)]/5 blur-2xl"></div>
          </div>

          {/* Form Side */}
          <div className="lg:pl-8">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--lale-gold)]">Bize Ulaşın</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--lale-anthracite)] sm:text-5xl">
                Sorularınız mı var?
              </h2>
              <p className="mt-6 text-base leading-7 text-[#5a666d]">
                Mali süreçlerinizle ilgili her türlü sorunuz için bize ulaşabilirsiniz. 
                Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
              </p>
            </div>

            <form action="#" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--lale-gold)] text-sm transition-all"
                />
                <input
                  type="email"
                  placeholder="E-posta"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--lale-gold)] text-sm transition-all"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Mesajınız"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--lale-gold)] text-sm resize-none transition-all"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[var(--lale-gold)] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[var(--lale-gold)]/20 hover:bg-[#f57c00] transition-all active:scale-[0.98]"
              >
                <FiSend className="h-4 w-4" />
                MESAJI GÖNDER
              </button>
            </form>

            <div className="mt-10 grid grid-cols-2 gap-6 pt-10 border-t border-gray-100">
              <div className="flex gap-3">
                <FiMapPin className="h-5 w-5 text-[var(--lale-gold)] mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[var(--lale-anthracite)]">Merkez Ofis</h4>
                  <p className="text-xs text-[#5a666d] mt-1">İstanbul, Türkiye</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FiClock className="h-5 w-5 text-[var(--lale-gold)] mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[var(--lale-anthracite)]">Çalışma Saatleri</h4>
                  <p className="text-xs text-[#5a666d] mt-1">09:00 - 18:00 (Hafta içi)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
