import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutSection from '@/components/AboutSection';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import WhyChooseUs from '@/components/WhyChooseUs';
import References from '@/components/References';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="home-flow min-h-screen">
      <Hero />
      <Services />
      <AboutSection />
      <Gallery />
      <News />
      <WhyChooseUs />
      <References />
      <Contact />
    </main>
  );
}
