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
            <h1 className="text-5xl font-light mb-6">Soluções completas para impulsionar seu negócio</h1>
            <p className="text-xl text-gray-700">Oferecemos um conjunto abrangente de serviços digitais para transformar sua presença online e maximizar seus resultados.
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
        <h3 className="text-xl font-light mb-4">Transforme Seu Negócio com Tecnologia</h3>
        <p className="text-gray-700 mb-4">Impulsionamos sua empresa com soluções digitais inovadoras e automação inteligente.</p>
        <ul className="text-gray-700 mb-4 space-y-2">
          <li><strong>Estratégia Digital:</strong> Roteiros personalizados para a transformação digital.</li>
          <li><strong>Desenvolvimento Personalizado:</strong> Sites e sistemas sob medida.</li>
          <li><strong>Automação de Processos:</strong> Mais eficiência, menos trabalho manual.</li>
        </ul>
      </div>

      <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <h3 className="text-xl font-light mb-4">Design Que Deixa Sua Marca</h3>
        <p className="text-gray-700 mb-4">Criamos identidades visuais marcantes que destacam seu negócio.</p>
        <ul className="text-gray-700 mb-4 space-y-2">
          <li><strong>Identidade Visual:</strong> Logotipos e paletas únicas.</li>
          <li><strong>Rebranding:</strong> Renovamos sua marca com estilo.</li>
          <li><strong>Materiais Promocionais:</strong> Design impactante para divulgação.</li>
        </ul>
      </div>

      <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <h3 className="text-xl font-light mb-4">Conecte-se com seu Público</h3>
        <p className="text-gray-700 mb-4">Gerenciamos suas redes sociais com estratégias que geram engajamento.</p>
        <ul className="text-gray-700 mb-4 space-y-2">
          <li><strong>Gestão de Redes:</strong> Administramos suas plataformas com excelência.</li>
          <li><strong>Crescimento Orgânico:</strong> Estratégias para aumentar sua audiência.</li>
          <li><strong>Conteúdo Criativo:</strong> Posts e vídeos autênticos e envolventes.</li>
        </ul>
      </div>

      <div className="p-6 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <h3 className="text-xl font-light mb-4">Marketing Digital que Gera Resultados</h3>
        <p className="text-gray-700 mb-4">Transformamos suas metas em crescimento real com estratégias inteligentes.</p>
        <ul className="text-gray-700 mb-4 space-y-2">
          <li><strong>Planejamento Personalizado:</strong> Estratégias sob medida para seu negócio.</li>
          <li><strong>Tráfego Pago:</strong> Anúncios otimizados para máxima performance.</li>
          <li><strong>Inbound Marketing:</strong> Atração e conversão de leads qualificados.</li>
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
        <div className="space-y-8 md:space-y-16">
          {[ 
            { num: "1", title: "Reunião Estratégica", text: "Primeiro, marcamos uma reunião para alinhar suas expectativas e objetivos. Entendemos profundamente seu negócio para criar uma solução sob medida." },
            { num: "2", title: "Planejamento & Conceito", text: "Elaboramos um plano detalhado para que você possa ter uma visão clara do projeto antes da implementação. Isso garante que cada detalhe esteja alinhado com suas expectativas." },
            { num: "3", title: "Execução & Acompanhamento", text: "Durante a realização do projeto, um profissional dedicado acompanha cada etapa, garantindo que tudo seja feito com qualidade e alinhado às suas necessidades. Você recebe atualizações constantes para acompanhar o progresso." },
            { num: "4", title: "Entrega & Acompanhamento Pós-Projeto", text: "Concluímos a entrega do projeto, garantindo que tudo esteja funcionando conforme o planejado. Para aqueles que optam, oferecemos serviços complementares, como a gestão de redes sociais, ou ainda o suporte contínuo para garantir que sua solução continue atendendo suas necessidades." },
          ].map((step, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              {/* Desktop: Alternância dos lados */}
              <div className="flex-1 md:px-6 text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.text}</p>
              </div>
              <div className="w-8 h-8 bg-[#ffa100] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">{step.num}</span>
              </div>
              <div className="flex-1 md:px-6 text-center md:text-right"></div>
            </div>
          ))}
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
          <Link target='blank'
            to="https://api.whatsapp.com/send/?phone=5577991488220&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0" 
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