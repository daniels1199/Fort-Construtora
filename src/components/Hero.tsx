import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Award, CalendarDays } from 'lucide-react';

export default function Hero() {
  // Reference the exact image path generated earlier
  const heroImage = '/src/assets/images/hero_building_1782944433140.jpg';

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
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-slate-50 overflow-hidden">
      {/* Decorative architectural grid lines in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-xs sm:text-sm font-semibold mb-6"
            >
              <ShieldCheck size={16} className="text-brand-teal" />
              <span>Engenharia de Precisão & Alto Padrão</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-blue tracking-tight leading-[1.1] mb-6"
            >
              Do projeto ao acabamento: <br className="hidden sm:inline" />
              <span className="text-gradient">Construindo com Força</span> e Rigor Técnico.
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl mb-10 leading-relaxed"
            >
              A **Fort Construtora** une engenharia moderna, planejamento inteligente em BIM e materiais nobres para materializar residências de luxo e empreendimentos comerciais de forma eficiente e sem surpresas.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('#orcamento')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-brand shadow-xl hover:shadow-brand-teal/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Solicitar Orçamento
                <ArrowRight size={18} />
              </button>
              
              <button
                onClick={() => scrollToSection('#servicos')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base text-slate-700 bg-white border border-slate-200 shadow-md hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                Nossos Serviços
              </button>
            </motion.div>

            {/* Key Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-slate-200 pt-8 mt-12 w-full max-w-xl"
            >
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-brand-blue">100%</span>
                <span className="text-xs sm:text-sm text-slate-500 mt-1">Prazo Cumprido</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-brand-teal">15+</span>
                <span className="text-xs sm:text-sm text-slate-500 mt-1">Anos de Experiência</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-brand-blue">120+</span>
                <span className="text-xs sm:text-sm text-slate-500 mt-1">Obras Entregues</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
            >
              {/* Highlight Overlay on the image to match brand color theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 via-transparent to-transparent mix-blend-multiply z-10" />
              
              <img
                src={heroImage}
                alt="Edifício moderno de alto padrão - Fort Construtora"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel border border-white/40 p-4 rounded-xl flex items-center gap-4 shadow-xl z-20">
                <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-brand-blue">Padrão Construtivo Premium</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Certificação e garantia em cada etapa da obra.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Background design elements behind the image card */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-brand-teal/40 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-brand-blue/40 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
