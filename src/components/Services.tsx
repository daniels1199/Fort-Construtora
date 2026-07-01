import React, { useState } from 'react';
import { servicesData } from '../data';
import { HardHat, Hammer, DraftingCompass, ClipboardCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  HardHat,
  Hammer,
  DraftingCompass,
  ClipboardCheck,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('construcao');
  
  // Custom generated image for Residential construction
  const residentialImage = '/src/assets/images/service_residential_1782944451614.jpg';

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background visual decorations */}
      <div className="absolute top-1/2 left-[-15%] w-[450px] h-[450px] rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal font-display text-sm font-bold tracking-widest uppercase block mb-3">
            O que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Nossos Serviços e Soluções
          </h2>
          <div className="h-1.5 w-20 bg-brand-teal mx-auto mt-5 rounded-full" />
          <p className="text-slate-600 mt-6 text-base sm:text-lg">
            Oferecemos uma gama completa de soluções construtivas, pautadas em tecnologia de ponta, processos eficientes e acabamento de altíssima qualidade.
          </p>
        </div>

        {/* Dynamic Bento Grid of Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Navigation/Selection Panel (Left Column) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {servicesData.map((service) => {
              const Icon = iconMap[service.icon] || HardHat;
              const isActive = activeTab === service.id;
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-brand text-white border-transparent shadow-xl translate-x-1.5'
                      : 'bg-white text-slate-800 border-slate-200/60 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${
                    isActive ? 'bg-white/10 text-white' : 'bg-brand-blue/5 text-brand-blue'
                  }`}>
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-sm sm:text-base">
                      {service.title}
                    </h3>
                    <p className={`text-xs mt-0.5 line-clamp-1 ${
                      isActive ? 'text-slate-200' : 'text-slate-500'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Details Showcase Panel (Right Column) */}
          <div className="lg:col-span-8">
            {servicesData.map((service) => {
              if (service.id !== activeTab) return null;
              const Icon = iconMap[service.icon] || HardHat;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]"
                >
                  {/* Left Side: Content */}
                  <div className="p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex p-3.5 bg-brand-teal/10 text-brand-teal rounded-2xl mb-6">
                        <Icon size={28} />
                      </div>
                      
                      <h3 className="font-display text-2xl font-extrabold text-brand-blue tracking-tight mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="border-t border-slate-100 pt-6">
                        <h4 className="font-display text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                          O que inclui o serviço:
                        </h4>
                        <ul className="space-y-3">
                          {service.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-2.5 text-slate-700 text-sm">
                              <CheckCircle2 size={16} className="text-brand-teal mt-0.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <button
                        onClick={() => scrollToSection('#orcamento')}
                        className="inline-flex items-center gap-2 font-display text-sm font-bold text-brand-teal hover:text-brand-blue group transition-colors"
                      >
                        <span>Solicitar Orçamento deste Serviço</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right Side: Showcase image */}
                  <div className="relative bg-slate-100 overflow-hidden min-h-[250px] md:min-h-full">
                    {/* If construcao, use our custom residential construction photo, else use a relevant architecture background overlay */}
                    {service.id === 'construcao' ? (
                      <img
                        src={residentialImage}
                        alt="Construção de Alto Padrão - Fort"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : service.id === 'reforma' ? (
                      <img
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
                        alt="Reforma Premium"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : service.id === 'projetos' ? (
                      <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                        alt="Projetos e BIM"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                        alt="Consultoria Técnica"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    
                    {/* Glass visual tag overlay */}
                    <div className="absolute top-4 right-4 glass-panel text-brand-blue px-3.5 py-1.5 rounded-full border border-white/40 shadow-lg text-xs font-bold">
                      Fort Garantia
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
