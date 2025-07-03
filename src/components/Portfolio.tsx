
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce website built with Webflow, featuring advanced animations and custom CMS integration.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tags: ['Webflow', 'E-commerce', 'CMS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'SaaS Landing Page',
      description: 'High-converting landing page for a SaaS product with interactive elements and optimized conversion flow.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
      tags: ['Webflow', 'SaaS', 'Conversion'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Creative Agency Site',
      description: 'Award-winning website for a creative agency featuring bold typography and immersive animations.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      tags: ['Webflow', 'Creative', 'Animation'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Restaurant Website',
      description: 'Elegant restaurant website with online reservation system and menu showcase.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      tags: ['Webflow', 'Restaurant', 'Booking'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio for a photographer with custom gallery and client testimonials.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['Webflow', 'Portfolio', 'Gallery'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Tech Startup',
      description: 'Modern website for a tech startup with interactive product demos and investor information.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop',
      tags: ['Webflow', 'Startup', 'Tech'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my expertise in 
              Webflow development and web design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <Button
                        size="sm"
                        className="gradient-primary text-white hover:scale-105 transition-transform duration-300"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 hover:bg-white hover:scale-105 transition-all duration-300"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
