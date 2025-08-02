'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import USPSection from '@/components/USPSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ClientWrapper from '@/components/ClientWrapper';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <USPSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}