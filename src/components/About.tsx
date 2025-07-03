
import React from 'react';
import { Code, Palette, Zap, Award } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Webflow Development', description: 'Expert in creating responsive, CMS-driven websites' },
    { icon: Palette, title: 'UI/UX Design', description: 'Crafting intuitive and beautiful user experiences' },
    { icon: Zap, title: 'Performance Optimization', description: 'Fast-loading, SEO-optimized websites' },
    { icon: Award, title: 'Brand Identity', description: 'Creating cohesive digital brand experiences' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate web designer and Webflow expert with over 5 years of experience 
              creating stunning digital experiences. I believe in the power of great design to 
              transform businesses and connect with audiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Started as a graphic designer, I discovered my passion for web development 
                when I realized the potential of bringing static designs to life. Today, 
                I specialize in creating pixel-perfect, responsive websites using Webflow 
                and modern web technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My approach combines aesthetic excellence with functional design, ensuring 
                every project not only looks amazing but also delivers exceptional user 
                experience and business results.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center lightning-glow">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-64 h-64 rounded-full object-cover border-4 border-gray-700 shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group lightning-glow"
              >
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{skill.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
