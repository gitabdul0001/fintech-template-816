
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen cosmic-grid text-foreground">
      <Header />
      <main className="relative">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
