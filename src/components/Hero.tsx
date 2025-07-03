
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30"></div>
      
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary/30 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-primary/20 -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-secondary/20 rotate-45"></div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse lightning-glow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000 lightning-glow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-left animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Creative <span className="text-gradient">Web Designer</span>
              <br />
              & Webflow Expert
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
              I craft beautiful, functional websites that tell your story and drive results. 
              Specializing in Webflow development and modern web design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="gradient-primary text-white px-8 py-4 text-lg hover:scale-105 transition-transform duration-300 lightning-glow font-medium"
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg transition-all duration-300 font-medium"
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mb-12">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Github size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative elements around photo */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary/30 rounded-2xl"></div>
              
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              
              {/* Profile photo */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/e2a8c489-ec75-4768-b8ab-244574f85e85.png" 
                  alt="Profile Photo"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <div 
            onClick={() => scrollToSection('about')}
            className="cursor-pointer animate-bounce hover:text-primary transition-colors duration-300 inline-flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-400 font-light">Scroll to explore</span>
            <ArrowDown size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
