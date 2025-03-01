import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import co from '../assets/co.png'
import cto from '../assets/cto.png'


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
            <h1 className="text-5xl font-light mb-6">Sobre a Flaeron</h1>
            <p className="text-xl text-gray-700">
            Somos uma equipe apaixonada de criadores, pensadores e solucionadores de problemas, dedicada a desenvolver soluções que moldam o futuro.
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
              <h2 className="text-3xl font-light mb-6">Nossa História</h2>
              <p className="text-gray-700 mb-6">
              Fundada com a visão de inovar e transformar o mundo, começamos pequenos, movidos pela crença de que a tecnologia deve sempre ter um propósito. Com o tempo, evoluímos para uma empresa dinâmica na vanguarda do progresso, sempre em busca de impactar positivamente cada indústria que tocamos.
              </p>
              <p className="text-gray-700 mb-6">
              Nossa trajetória é construída sobre a base de criatividade, excelência e uma compreensão profunda de como a inovação bem pensada pode elevar experiências e mudar vidas.
              </p>
              <p className="text-gray-700 mb-8">
              Olhamos para o futuro com o compromisso de desafiar o convencional, superar os limites do possível e criar soluções que realmente façam a diferença.
              </p>
              <Link to="/services" className="group flex items-center text-lg border-b-2 border-black pb-1 hover:pr-4 transition-all">
              Explore nossos serviços
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
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 flex justify-center items-center">
    <div 
      ref={teamRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 opacity-0 transition-all duration-1000 translate-y-8 delay-300"
    >
      <div className="text-center">
        <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
          <img 
            src={co} // Imagem do CEO
            alt="CEO portrait" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-medium mb-2">João Pedro Saraiva</h3>
        <p className="text-gray-500 mb-4">CEO</p>
        <p className="text-gray-700">
          João Pedro é o líder por trás da visão da empresa, sempre buscando novas maneiras de transformar ideias em soluções que realmente fazem a diferença.
        </p>
      </div>
      <div className="text-center">
        <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
          <img 
            src={cto} // Imagem do CTO
            alt="CTO portrait" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-medium mb-2">Bruno Alves</h3>
        <p className="text-gray-500 mb-4">CTO</p>
        <p className="text-gray-700">
          Bruno é o responsável pelas soluções técnicas da empresa, com uma verdadeira paixão por criar soluções simples e eficazes. Ele garante que a tecnologia esteja sempre alinhada com as necessidades reais do negócio, transformando ideias em realidade de maneira prática e inovadora.
        </p>
      </div>
    </div>
  </div>
</section>





      {/* Values 
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
      </section> */}
    </main>
  );
};

export default AboutPage;