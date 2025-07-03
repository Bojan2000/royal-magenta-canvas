
import React from 'react';
import { Globe, Smartphone, Search, Zap, Palette, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Webflow Development',
      description: 'Custom Webflow websites with advanced interactions, CMS integration, and responsive design.',
      features: ['Custom Design', 'CMS Setup', 'SEO Optimization', 'Responsive Layout']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive interfaces that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Ensure your website looks perfect and functions flawlessly on all devices and screen sizes.',
      features: ['Responsive Design', 'Touch Optimization', 'Fast Loading', 'Cross-platform']
    },
    {
      icon: Search,
      title: 'SEO Integration',
      description: 'Built-in SEO best practices to help your website rank higher in search results.',
      features: ['On-page SEO', 'Schema Markup', 'Site Speed', 'Meta Optimization']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for speed, user experience, and conversion rates.',
      features: ['Speed Optimization', 'Image Compression', 'Code Minification', 'CDN Setup']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Custom functionality and integrations to meet your specific business requirements.',
      features: ['API Integration', 'Custom Code', 'Third-party Tools', 'Automation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I offer comprehensive web design and development services to help 
              your business succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your vision to life with a 
                beautiful, functional website.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-primary text-white px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 font-medium"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
