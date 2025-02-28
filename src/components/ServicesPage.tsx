import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

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

    const elements = [headerRef.current, servicesRef.current, processRef.current];
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
            <h1 className="text-5xl font-light mb-6">Soluções tecnológicas feitas para crescer o seu negócio.</h1>
            <p className="text-xl text-gray-700">Maximizamos o impacto de cada clique, garantindo que cada um traga valor, engajamento e crescimento para o seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div 
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 opacity-0 transition-all duration-1000 translate-y-8 delay-300"
          >
            <div className="p-8 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-light mb-4">Transformação Digital para o Futuro dos Negócios</h3>
              <p className="text-gray-700 mb-6">
              Ajudamos sua empresa a evoluir com a integração da tecnologia digital, transformando operações e criando novas formas de agregar valor aos seus clientes.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Desenvolvimento de Roteiros Estratégicos Digitais:</strong> Planejamos o caminho da sua empresa rumo à transformação digital, alinhando a tecnologia com seus objetivos de negócios.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Criação de Sites e Sistemas Personalizados:</strong> Desenvolvemos soluções digitais sob medida, com design minimalista e funcionalidades que atendem às suas necessidades, proporcionando uma experiência de navegação única.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Automação e Otimização de Processos:</strong> Automatizamos processos, aumentando a produtividade e reduzindo custos, para que você possa se concentrar no que realmente importa.</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-light mb-4">Design para Impacto Duradouro</h3>
              <p className="text-gray-700 mb-6">
              Transformamos a identidade visual da sua marca com soluções criativas e elegantes, projetadas para destacar sua presença no mercado e conectar você ao seu público de forma autêntica.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Criação de Identidade Visual:</strong> Desenvolvemos logotipos, paletas de cores e elementos visuais que refletem a essência e os valores da sua marca.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Redesign e Rebranding:</strong> Renovamos a identidade visual de sua marca, garantindo uma atualização coerente e moderna, que mantém a conexão com seu público.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Design de Materiais Promocionais:</strong> Criamos materiais visuais impactantes, como cartões de visita, panfletos e banners, que comunicam de forma eficaz sua proposta de valor.</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-light mb-4">Gestão de Redes Sociais para Marcas que Conectam</h3>
              <p className="text-gray-700 mb-6">
              Potencializamos sua presença online com estratégias de conteúdo personalizadas e gestão eficiente das suas redes sociais, criando uma comunicação autêntica e engajante com seu público.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Gestão de Redes Sociais:</strong> Administramos suas contas nas principais plataformas, criando conteúdo relevante, engajador e alinhado à identidade da sua marca.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Estratégias de Crescimento Orgânico:</strong> Planejamos e executamos ações para aumentar o engajamento e a base de seguidores de forma natural e estratégica.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Criação de Conteúdo Visual e Textual:</strong> Produzimos posts, stories, vídeos e artigos que capturam a atenção do seu público, promovendo sua marca de forma criativa e eficaz.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Análise e Monitoramento de Resultados:</strong> Acompanhamos de perto os resultados das ações nas redes sociais, ajustando estratégias para garantir o sucesso contínuo das campanhas.</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-light mb-4">Marketing Digital Estratégico para Crescimento Exponencial</h3>
              <p className="text-gray-700 mb-6">
              Transformamos suas metas de negócios em resultados reais com estratégias de marketing digital inteligentes, criativas e focadas no seu público-alvo, impulsionando o reconhecimento e as vendas da sua marca.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Estratégias de Marketing Digital Personalizadas:</strong> Desenvolvemos planos de marketing digital sob medida para atender às necessidades e objetivos específicos do seu negócio.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Gestão de Campanhas de Tráfego Pago:</strong> Criamos e otimizamos campanhas de anúncios nas principais plataformas (Google Ads, Facebook, Instagram) para gerar tráfego qualificado e aumentar suas vendas.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Inbound Marketing:</strong> Criamos e implementamos estratégias de atração de leads, nutrição de audiência e conversão, utilizando conteúdo relevante e técnicas de automação.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Análise e Monitoramento de Resultados:</strong> Realizamos o acompanhamento contínuo das campanhas, utilizando dados para otimizar os resultados e garantir que as metas sejam atingidas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center">Our Process</h2>
          <div 
            ref={processRef}
            className="max-w-4xl mx-auto opacity-0 transition-all duration-1000 translate-y-8 delay-500"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:translate-x-px"></div>
              
              {/* Timeline items */}
              <div className="space-y-12 md:space-y-24">
                {/* Item 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-medium mb-2">Discovery</h3>
                    <p className="text-gray-700">
                      We begin by understanding your business, goals, and challenges through in-depth research and stakeholder interviews.
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-black rounded-full z-10 flex items-center justify-center">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>
                
                {/* Item 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-1 md:order-1 mb-4 md:mb-0"></div>
                  <div className="w-8 h-8 bg-black rounded-full z-10 flex items-center justify-center order-2 md:order-2">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left order-3 md:order-3">
                    <h3 className="text-xl font-medium mb-2">Strategy</h3>
                    <p className="text-gray-700">
                      We develop a comprehensive plan that outlines the approach, technologies, and timeline for your project.
                    </p>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-medium mb-2">Design & Development</h3>
                    <p className="text-gray-700">
                      Our team creates and builds your solution with a focus on quality, usability, and performance.
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-black rounded-full z-10 flex items-center justify-center">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>
                
                {/* Item 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-1 md:order-1 mb-4 md:mb-0"></div>
                  <div className="w-8 h-8 bg-black rounded-full z-10 flex items-center justify-center order-2 md:order-2">
                    <span className="text-white text-sm">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left order-3 md:order-3">
                    <h3 className="text-xl font-medium mb-2">Testing & Refinement</h3>
                    <p className="text-gray-700">
                      We rigorously test and optimize your solution to ensure it meets the highest standards of quality and performance.
                    </p>
                  </div>
                </div>
                
                {/* Item 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-medium mb-2">Launch & Support</h3>
                    <p className="text-gray-700">
                      We deploy your solution and provide ongoing support to ensure its continued success and evolution.
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-black rounded-full z-10 flex items-center justify-center">
                    <span className="text-white text-sm">5</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-8">Ready to start your project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;