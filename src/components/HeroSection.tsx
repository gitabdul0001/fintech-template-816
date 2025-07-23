import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

import { Loader } from 'lucide-react';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative w-full min-h-screen py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Full grid background */}
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Launching new payment features
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          AI-powered posting for <span className="text-foreground">growing creators</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Create engaging social content in seconds with our AI assistant. Ideal for creators, teams, and businesses focused on growth, clarity, and brand impact.
        </p>
        
        <div className="flex justify-center pt-6">
          <Button 
            onClick={() => window.open('https://app.postgenai.xyz/', '_blank')}
            className="bg-foreground text-background hover:bg-foreground/90 hover:scale-105 text-lg h-14 px-12 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Try it
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground">
          No credit card required • Free 14-day trial
        </div>
      </div>
      
    </section>;
};
export default HeroSection;