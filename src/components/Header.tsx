'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Simple body scroll lock without jumping to top
    if (isMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace('-', '')));
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Admin sayfasında Header'ı gösterme
  if (isAdminPage) {
    return null;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'border-b border-[rgba(150,73,0,0.12)] bg-white/96 shadow-sm backdrop-blur-xl'
        : 'border-b border-[rgba(150,73,0,0.08)] bg-white/92 shadow-sm backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-40 sm:h-12 sm:w-48 transition-all duration-300">
              <Image
                src="/demirbaslogo.png"
                alt="Demirbaş Muhasebe Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
              { name: 'Hakkımızda', href: '/hakkimizda' },
              { name: 'Haberler', href: '/haberler' },
              { name: 'İletişim', href: '/iletisim' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-200 pb-1 border-b-2 ${
                  pathname === link.href
                    ? 'border-[var(--lale-gold)] text-[var(--lale-gold)]'
                    : 'border-transparent text-[#5f6970] hover:text-[var(--lale-gold)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/iletisim" className="rounded-lg bg-[var(--lale-gold)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#f57c00]">
              Teklif Al
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-lg border border-[rgba(150,73,0,0.18)] p-2 text-[var(--lale-gold)] transition-colors duration-200 hover:bg-[rgba(242,140,40,0.08)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 my-1 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Portal */}
        {isMenuOpen && typeof window !== 'undefined' && createPortal(
          <div className="fixed inset-0 z-[9999] bg-white text-[var(--lale-anthracite)] lg:hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[rgba(150,73,0,0.12)] px-6 py-4">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <div className="relative h-10 w-36">
                  <Image
                    src="/demirbaslogo.png"
                    alt="Demirbaş Muhasebe Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg p-2 text-[var(--lale-gold)] transition-colors duration-200 hover:bg-[rgba(242,140,40,0.10)]"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-6">
              <div className="space-y-3">
                <Link 
                  href="/" 
                  className="block border-b border-[rgba(150,73,0,0.10)] px-4 py-4 text-sm font-medium tracking-[0.08em] text-[#5f6970] transition-colors duration-200 hover:text-[var(--lale-gold)]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
                <Link 
                  href="/hizmetlerimiz" 
                  className="block border-b border-[rgba(150,73,0,0.10)] px-4 py-4 text-sm font-medium tracking-[0.08em] text-[#5f6970] transition-colors duration-200 hover:text-[var(--lale-gold)]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hizmetlerimiz
                </Link>
                <Link 
                  href="/hakkimizda" 
                  className="block border-b border-[rgba(150,73,0,0.10)] px-4 py-4 text-sm font-medium tracking-[0.08em] text-[#5f6970] transition-colors duration-200 hover:text-[var(--lale-gold)]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hakkımızda
                </Link>
                <Link 
                  href="/haberler" 
                  className={`block border-b border-[rgba(150,73,0,0.10)] px-4 py-4 text-sm font-medium tracking-[0.08em] transition-colors duration-200 ${
                    pathname === '/haberler' ? 'text-[var(--lale-gold)]' : 'text-[#5f6970] hover:text-[var(--lale-gold)]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Haberler
                </Link>
                <Link 
                  href="/iletisim" 
                  className={`block border-b border-[rgba(150,73,0,0.10)] px-4 py-4 text-sm font-medium tracking-[0.08em] transition-colors duration-200 ${
                    pathname === '/iletisim' ? 'text-[var(--lale-gold)]' : 'text-[#5f6970] hover:text-[var(--lale-gold)]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </Link>
                <Link 
                  href="/iletisim" 
                  className="mt-5 block rounded-lg bg-[var(--lale-gold)] px-4 py-4 text-center text-sm font-semibold tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[#f57c00]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Teklif Al
                </Link>
              </div>
            </nav>
          </div>,
          document.body
        )}
      </div>
    </header>
  );
};

export default Header;
