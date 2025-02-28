import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [headerRef.current, contentRef.current, teamRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div 
            ref={headerRef}
            className="max-w-4xl mx-auto text-center opacity-0 transition-all duration-1000 translate-y-8"
          >
            <h1 className="text-5xl font-light mb-6">About Flaeron</h1>
            <p className="text-xl text-gray-700">
              We are a team of visionaries, designers, and engineers dedicated to creating 
              technology that makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              ref={contentRef}
              className="opacity-0 transition-all duration-1000 translate-x-8 delay-300"
            >
              <h2 className="text-3xl font-light mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2020, Flaeron began with a simple mission: to create technology that enhances human experiences. 
                What started as a small team of passionate innovators has grown into a global company at the forefront of 
                technological advancement.
              </p>
              <p className="text-gray-700 mb-6">
                Our journey has been defined by a relentless pursuit of excellence, a commitment to ethical innovation, 
                and a deep understanding of how technology can transform industries and improve lives.
              </p>
              <p className="text-gray-700 mb-8">
                Today, we continue to push boundaries, challenge conventions, and create solutions that define the future.
              </p>
              <Link to="/services" className="group flex items-center text-lg border-b-2 border-black pb-1 hover:pr-4 transition-all">
                Explore our services
                <ArrowRight className="ml-2 group-hover:ml-4 transition-all" size={20} />
              </Link>
            </div>
            <div className="relative h-96">
              <div className="absolute top-0 right-0 w-72 h-72 border-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-100"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center">Our Leadership Team</h2>
          <div 
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 opacity-0 transition-all duration-1000 translate-y-8 delay-300"
          >
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="CEO portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Alexander Chen</h3>
              <p className="text-gray-500 mb-4">Founder & CEO</p>
              <p className="text-gray-700">
                Visionary leader with 15+ years of experience in technology innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="CTO portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Sophia Martinez</h3>
              <p className="text-gray-500 mb-4">Chief Technology Officer</p>
              <p className="text-gray-700">
                Engineering genius with a passion for creating elegant technical solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="CDO portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Marcus Johnson</h3>
              <p className="text-gray-500 mb-4">Chief Design Officer</p>
              <p className="text-gray-700">
                Award-winning designer focused on creating intuitive user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg">
              <h3 className="text-xl font-medium mb-4">Innovation</h3>
              <p className="text-gray-700">
                We constantly push boundaries and explore new possibilities, embracing change and driving progress.
              </p>
            </div>
            <div className="p-8 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg">
              <h3 className="text-xl font-medium mb-4">Excellence</h3>
              <p className="text-gray-700">
                We are committed to the highest standards in everything we do, from design to implementation.
              </p>
            </div>
            <div className="p-8 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg">
              <h3 className="text-xl font-medium mb-4">Integrity</h3>
              <p className="text-gray-700">
                We operate with transparency, honesty, and ethical responsibility in all our relationships.
              </p>
            </div>
            <div className="p-8 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg">
              <h3 className="text-xl font-medium mb-4">Impact</h3>
              <p className="text-gray-700">
                We measure our success by the positive difference we make in people's lives and in the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;