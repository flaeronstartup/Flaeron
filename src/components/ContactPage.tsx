import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Digital Transformation'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

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

    const elements = [headerRef.current, formRef.current, infoRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'Digital Transformation'
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }, 5000);
    }, 1000);
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div 
            ref={headerRef}
            className="max-w-4xl mx-auto text-center opacity-0 transition-all duration-1000 translate-y-8"
          >
            <h1 className="text-5xl font-light mb-6">Contato</h1>
            <p className="text-xl text-gray-700">
            Entre em contato com nossa equipe para saber mais sobre nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-light mb-8">Envie-nos uma mensagem</h2>
              <form 
                ref={formRef}
                action="https://formspree.io/f/xwplnlor"  // URL do Formspree
                method="POST"
                className="opacity-0 transition-all duration-1000 translate-y-8 delay-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:ring-0 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:ring-0 transition-all"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Número
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:ring-0 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:ring-0 transition-all"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:ring-0 transition-all"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all"
                  >
                    Enviar Mensagem
                    <Send size={16} className="ml-2" />
                  </button>
                </div>
                
                {formStatus.submitted && (
                  <div className={`p-4 ${formStatus.error ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Info */}
            <div 
              ref={infoRef}
              className="opacity-0 transition-all duration-1000 translate-y-8 delay-500"
            >
              <h2 className="text-3xl font-light mb-8">Entre em contato</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail size={20} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">E-mail</h3>
                    <a href="mailto:contact@flaeron.com" className="text-black hover:underline">contatoflaeron@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone size={20} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Número</h3>
                    <a target='blank' href="https://api.whatsapp.com/send/?phone=5577991488220&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0" className="text-black hover:underline">+55 (77) 9 9148-8220</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Horário de Atendimento:</h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 text-gray-700">Segunda - Sexta</td>
                      <td className="py-2">08:00 AM - 17:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 text-gray-700">Sábado</td>
                      <td className="py-2">08:00 AM - 12:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-700">Domingo</td>
                      <td className="py-2">Fechado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
  <div className="relative overflow-hidden w-full" style={{ height: '100vh' }}>
    <iframe 
      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1my7JDSDx_4dWRCcfO788sN4poV9JkUUMA3asHithC-OoYhALXFpxt4WkLrV1i0QzW078-FQrp?gv=true&mode=AGENDA" 
      style={{ border: 0, width: '100%', height: '100vh' }} 
      frameBorder="0"
      className="transition-all"
    />
  </div>
</section>

    </main>
  );
};

export default ContactPage;
