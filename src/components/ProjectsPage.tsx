import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';

const projects = [
  {
    id: 1,
    title: 'Advocacia Raiz na Prática',
    category: 'Desenvolvimento web',
    description: 'Desenvolvemos o site do zero, criando também a identidade visual completa, incluindo o logo, a bio do Instagram e diversas artes para a comunicação visual da empresa.',
    image: project1,
    tags: ['Enterprise', 'Finance', 'Cloud'],
    link: 'https://www.advocaciaraiznapratica.com.br/'
  },{/* Header
  {
    id: 2,
    title: 'PMT Cabine Primária',
    category: 'AI & Machine Learning',
    description: 'Desenvolvemos o site da PMT Cabine Primária, seguindo a identidade visual da marca. O projeto envolveu a criação de um site funcional e atraente, alinhado à sua identidade, para fortalecer a presença online e facilitar a interação com os clientes.',
    image: project2,
    tags: ['Healthcare', 'Analytics', 'AI'],
    link: 'https://www.pmtcabineprimaria.com.br/'
  }, */}
  {
    id: 3,
    title: 'I A Sevice Solar',
    category: 'Mobile Development',
    description: 'Desenvolvemos o site da I A Service Solar, com foco em otimizar a experiência do usuário e a presença digital da empresa. O projeto incluiu a criação de uma plataforma moderna e funcional, alinhada à identidade da marca, para promover seus serviços e facilitar o contato com os clientes.',
    image: project3,
    tags: ['Mobile', 'Retail', 'UX/UI'],
    link: 'https://iaservicesolar.com.br/'
  },
  {
    id: 4,
    title: 'SB Cuidados',
    category: 'Custom Software',
    description: 'Criamos o site da SB Cuidados, focado em fornecer uma plataforma online intuitiva e acessível. Além disso, colocamos a empresa no Google Meu Negócio, aumentando sua visibilidade e melhorando a interação com os clientes, tudo de acordo com a identidade visual da marca.',
    image: project4,
    tags: ['Manufacturing', 'Automation', 'Enterprise'],
        link:'https://www.sbcuidados.com.br/'
  },
  {
    id: 5,
    title: 'Foco Sublimação',
    category: 'UX/UI Design',
    description: 'Desenvolvemos o site da Foco Sublimação e também gerenciamos a estratégia de tráfego pago para o lançamento de novos produtos. O projeto envolveu a criação de uma plataforma online eficaz, alinhada com a identidade visual da marca, e ações de marketing digital para impulsionar as vendas e o reconhecimento da empresa.',
    image: project5,
    tags: ['Design', 'Accessibility', 'Innovation'],
    link:'https://www.focosublimacao.com.br/'
  },
  {
    id: 6,
    title: 'Coach Felipe Zagalo',
    category: 'IoT Solutions',
    description: 'Desenvolvemos o site do Coach Felipe Zagalo, criando uma presença online sólida e alinhada à identidade visual da marca. Além disso, cuidamos de todos os aspectos relacionados à presença digital e marketing online.',
    image: project6,
    tags: ['IoT', 'Smart City', 'Data'],
    link: 'https://www.felipezagalo.com.br/'
  }
];

const ProjectsPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

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

    const elements = [headerRef.current, projectsRef.current];
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
            <h1 className="text-5xl font-light mb-6">Nossos Projetos</h1>
            <p className="text-xl text-gray-700">
            Confira alguns trabalhos que já fizemos para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div 
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transition-all duration-1000 translate-y-8 delay-300"
          >
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group overflow-hidden border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-6 py-2 bg-white text-black hover:bg-black hover:text-white transition-all"
                      >
                        Ver Projeto
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link 
                    target="blank"
                    to="https://api.whatsapp.com/send/?phone=5577991488220&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0" 
                    className="group inline-flex items-center text-sm border-b border-black pb-1 hover:pr-2 transition-all"
                  >
                    Fale Conosco
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}n
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-8">Deseja impulsionar sua marca ou negócio?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Te ajudamos a crescer sua empresa e vender mais.
          </p>
          <Link 
            target='blank'
            to="https://api.whatsapp.com/send/?phone=5577991488220&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0" 
            className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Iniciar uma conversa
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
