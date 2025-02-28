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
      <section className="py-12">
  <div className="container mx-auto px-6">
    <div
      ref={servicesRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 opacity-0 transition-all duration-1000 translate-y-8 delay-300"
    >
      <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <h3 className="text-xl font-light mb-4">Transformação Digital para o Futuro dos Negócios</h3>
        <p className="text-gray-700 mb-4">
          Ajudamos sua empresa a evoluir com a integração da tecnologia digital, transformando operações e criando novas formas de agregar valor aos seus clientes.
        </p>
        <ul className="text-gray-700 mb-4 space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Desenvolvimento de Roteiros Estratégicos Digitais:</strong> Planejamos o caminho da sua empresa rumo à transformação digital.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Criação de Sites e Sistemas Personalizados:</strong> Desenvolvemos soluções digitais sob medida.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Automação e Otimização de Processos:</strong> Automatizamos processos para aumentar a produtividade.</span>
          </li>
        </ul>
      </div>

      <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <h3 className="text-xl font-light mb-4">Design para Impacto Duradouro</h3>
        <p className="text-gray-700 mb-4">
          Transformamos a identidade visual da sua marca com soluções criativas e elegantes, projetadas para destacar sua presença no mercado.
        </p>
        <ul className="text-gray-700 mb-4 space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Criação de Identidade Visual:</strong> Desenvolvemos logotipos e paletas de cores que refletem a essência da sua marca.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Redesign e Rebranding:</strong> Renovamos a identidade visual de sua marca.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Design de Materiais Promocionais:</strong> Criamos materiais visuais impactantes.</span>
          </li>
        </ul>
      </div>

      <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <h3 className="text-xl font-light mb-4">Gestão de Redes Sociais para Marcas que Conectam</h3>
        <p className="text-gray-700 mb-4">
          Potencializamos sua presença online com estratégias de conteúdo personalizadas e gestão eficiente das suas redes sociais.
        </p>
        <ul className="text-gray-700 mb-4 space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Gestão de Redes Sociais:</strong> Administramos suas contas nas principais plataformas.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Estratégias de Crescimento Orgânico:</strong> Planejamos ações para aumentar seu engajamento.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Criação de Conteúdo Visual e Textual:</strong> Produzimos posts e vídeos criativos.</span>
          </li>
        </ul>
      </div>

      <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <h3 className="text-xl font-light mb-4">Marketing Digital Estratégico para Crescimento Exponencial</h3>
        <p className="text-gray-700 mb-4">
          Transformamos suas metas de negócios em resultados reais com estratégias de marketing digital inteligentes e criativas.
        </p>
        <ul className="text-gray-700 mb-4 space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Estratégias de Marketing Digital Personalizadas:</strong> Desenvolvemos planos de marketing digital sob medida.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Gestão de Campanhas de Tráfego Pago:</strong> Criamos campanhas de anúncios otimizadas.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Inbound Marketing:</strong> Criamos estratégias de atração e nutrição de leads.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Process */}
      <section className="py-24 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-light mb-12 text-center">Nosso Processo</h2>
    <div 
      ref={processRef}
      className="max-w-4xl mx-auto opacity-0 transition-all duration-1000 translate-y-8 delay-500"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#ffa100] transform md:translate-x-px hidden md:block"></div>
        
        {/* Timeline items */}
        <div className="space-y-12 md:space-y-24">
          {/* Item 1 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
              <h3 className="text-xl font-medium mb-2">Descoberta - Entendendo Seu Negócio</h3>
              <p className="text-gray-700">
                Analisamos sua empresa, seus desafios e objetivos para identificar a melhor solução, seja um site, identidade visual ou estratégia de marketing.
              </p>
            </div>
            <div className="w-8 h-8 bg-[#ffa100] rounded-full z-10 flex items-center justify-center">
              <span className="text-white text-sm">1</span>
            </div>
            <div className="flex-1 md:pl-8 md:text-left"></div>
          </div>
          
          {/* Item 2 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-8 md:text-right order-1 md:order-1 mb-4 md:mb-0"></div>
            <div className="w-8 h-8 bg-[#ffa100] rounded-full z-10 flex items-center justify-center order-2 md:order-2">
              <span className="text-white text-sm">2</span>
            </div>
            <div className="flex-1 md:pl-8 md:text-left order-3 md:order-3">
              <h3 className="text-xl font-medium mb-2">Estratégia - Definição do Caminho Ideal</h3>
              <p className="text-gray-700">
                Criamos um plano personalizado, alinhando tecnologia, design e marketing para alcançar resultados concretos.
              </p>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
              <h3 className="text-xl font-medium mb-2">Execução - Desenvolvimento ou Marketing em Ação</h3>
              <p className="text-gray-700">
                <strong>Se for um site ou identidade visual:</strong> Criamos e desenvolvemos sua solução com foco em usabilidade e impacto.<br/>
                <strong>Se for marketing:</strong> Implementamos campanhas estratégicas para atrair e converter clientes.
              </p>
            </div>
            <div className="w-8 h-8 bg-[#ffa100] rounded-full z-10 flex items-center justify-center">
              <span className="text-white text-sm">3</span>
            </div>
            <div className="flex-1 md:pl-8 md:text-left"></div>
          </div>
          
          {/* Item 4 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-8 md:text-right order-1 md:order-1 mb-4 md:mb-0"></div>
            <div className="w-8 h-8 bg-[#ffa100] rounded-full z-10 flex items-center justify-center order-2 md:order-2">
              <span className="text-white text-sm">4</span>
            </div>
            <div className="flex-1 md:pl-8 md:text-left order-3 md:order-3">
              <h3 className="text-xl font-medium mb-2">Testes & Otimização - Refinando para Resultados</h3>
              <p className="text-gray-700">
                Analisamos o desempenho do projeto ou campanha e ajustamos para garantir a máxima eficiência.
              </p>
            </div>
          </div>
          
          {/* Item 5 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
              <h3 className="text-xl font-medium mb-2">Lançamento & Crescimento - Suporte Contínuo</h3>
              <p className="text-gray-700">
                Colocamos sua solução no ar e acompanhamos seu crescimento, garantindo que ela continue gerando resultados.
              </p>
            </div>
            <div className="w-8 h-8 bg-[#ffa100] rounded-full z-10 flex items-center justify-center">
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
          <h2 className="text-4xl font-light mb-8">Pronto para iniciar seu projeto?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Contate-nos para discutirmos como podemos te ajudar a aumentar seus lucros.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Entre em contato conosco
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;