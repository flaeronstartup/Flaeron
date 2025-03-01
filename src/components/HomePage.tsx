import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.png'
import banner1 from '../assets/banner1.jpg'

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';


const HomePage = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const elements = [
      titleRef.current,
      descriptionRef.current,
      ctaRef.current,
      imageRef.current,
      featuresRef.current
    ];

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
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-light mb-8 opacity-0 transition-all duration-1000 translate-y-8 delay-300"
            >
              Transforme sua visão em resultados extraordinários
            </h1>
            <p
              ref={descriptionRef}
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl opacity-0 transition-all duration-1000 translate-y-8 delay-500"
            >
              Unimos análise de dados e criatividade para desenvolver soluções digitais que impulsionam seu negócio ao próximo nível. Aumente suas vendas, conquiste mais clientes e destaque-se da concorrência.
            </p>
            <div
              ref={ctaRef}
              className="opacity-0 transition-all duration-1000 translate-y-8 delay-700"
            >
              <Link to="/about" className="group flex items-center text-lg border-b-2 border-black pb-1 hover:pr-4 transition-all">
              Começe sua transformação
                <ArrowRight className="ml-2 group-hover:ml-4 transition-all" size={20} />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
          <img src={banner} alt="Imagem de um celular" className="w-[600px] h-auto transition-all duration-1000 translate-y-8 delay-900" />
          </div>
        </div>
      </section>

{/* Faixa preta animada */}
<section className="py-16 bg-black text-white relative overflow-hidden">
  <div className="container mx-auto px-6">
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h3 className="text-3xl font-bold opacity-0 translate-y-8 transition-all duration-1000 delay-300 animate__animated animate__fadeIn animate__delay-1s" style={{ color: "#ffa100" }}>
            <span className="counter" data-target="100">+100</span> Clientes Atendidos
          </h3>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-3xl font-bold opacity-0 translate-y-8 transition-all duration-1000 delay-500 animate__animated animate__fadeIn animate__delay-2s" style={{ color: "#ffa100" }}>
            <span className="counter" data-target="50000">+5</span> Anos de Experiência
          </h3>
        </div>
      </div>
    </div>
  </div>

  <style>{`
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .container {
      animation: fadeInUp 1s ease-out forwards;
    }

    h3 {
      animation: fadeInUp 1s ease-out forwards;
    }

    .counter {
      font-weight: bold;
    }
  `}</style>
</section>







      {/* Abstract Geometric Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              ref={imageRef}
              className="relative h-80 opacity-0 transition-all duration-1000 translate-x-8 delay-300"
            >
              <div className="absolute top-0 left-0 w-64 h-64 border-2 border-black"></div>
              <div className="absolute top-16 left-16 w-64 h-64 bg-gray-100"></div>
              <div className="absolute top-8 left-8 w-64 h-60 lg:w-96 lg:h-78">
                <img 
                  src={banner1} 
                  alt="Banner image" 
                  className="w-full h-full object-cover" 
                />
              </div>

            </div>
            <div>
              <h2 className="text-3xl font-light mb-6">Expanda seu alcance e conquiste novos mercados!</h2>
              <p className="text-gray-700 mb-8">
              Nós cuidamos de tudo, da identidade digital da sua marca ao desenvolvimento do seu software, garantindo destaque e conexão com seu público.
              </p>
              <Link to="/services" className="group flex items-center text-lg border-b-2 border-black pb-1 hover:pr-4 transition-all">
              Explore nossas soluções
                <ArrowRight className="ml-2 group-hover:ml-4 transition-all" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 opacity-0 transition-all duration-1000 translate-y-8"
          >
            {/* Desenvolvimento de sites e sistemas */}
            <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="mb-4">
                <img src={icon1} alt="Desenvolvimento de sites e sistemas" className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-medium mb-4">Desenvolvimento de sites e sistemas</h3>
              <p className="text-gray-700">
                Construímos soluções digitais sob medida para impulsionar seu negócio e melhorar a experiência dos usuários.
              </p>
            </div>
            
            {/* Marketing */}
            <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="mb-4">
                <img src={icon2} alt="Marketing" className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-medium mb-4">Marketing</h3>
              <p className="text-gray-700">
                Criamos estratégias inovadoras de marketing para conectar marcas ao público certo, gerando impacto e resultados.
              </p>
            </div>

            {/* Design */}
            <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="mb-4">
                <img src={icon3} alt="Design" className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-medium mb-4">Design</h3>
              <p className="text-gray-700">
                Desenvolvemos soluções visuais que comunicam a essência da sua marca e conectam com seu público-alvo.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-8">Tem dúvidas ou deseja iniciar seu projeto?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Entre em contato conosco para uma consulta gratuita!
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Falar com um Especialista
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;