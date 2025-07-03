
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Lightning background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Lightning streaks */}
        <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-b from-primary/50 to-transparent blur-sm animate-pulse delay-300"></div>
        <div className="absolute top-20 right-1/3 w-1 h-24 bg-gradient-to-b from-secondary/40 to-transparent blur-sm animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/2 w-1 h-28 bg-gradient-to-t from-primary/40 to-transparent blur-sm animate-pulse delay-1500"></div>
      </div>

      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
