import React from 'react';
import { Shield, Eye, Settings, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const pillars = [
    {
      letter: 'F',
      title: 'Força & Solidez',
      description: 'Estruturas calculadas para durar gerações. Trabalhamos apenas com materiais certificados e fornecedores homologados pelo rigor da nossa marca.',
      icon: Shield,
      color: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    },
    {
      letter: 'O',
      title: 'Organização em BIM',
      description: 'Modelamos cada detalhe da obra em 3D antes de ir a campo. Isso garante orçamentos precisos, cronograma sem atrasos e desperdício zero de insumos.',
      icon: Settings,
      color: 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
    },
    {
      letter: 'R',
      title: 'Rigor Técnico',
      description: 'Cada etapa de concretagem, reboco ou acabamento segue rígidas normas técnicas (ABNT). Equipe chefiada por engenheiros dedicados no canteiro.',
      icon: Briefcase,
      color: 'bg-brand-blue/10 text-brand-teal border-brand-blue/20',
    },
    {
      letter: 'T',
      title: 'Transparência Total',
      description: 'Relatórios fotográficos semanais e diário de obras digital na palma de sua mão. Você acompanha cada centavo investido de forma simples e transparente.',
      icon: Eye,
      color: 'bg-brand-teal/10 text-brand-blue border-brand-teal/20',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-teal font-display text-sm font-bold tracking-widest uppercase block mb-3">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Engenharia moderna comprometida com o seu legado
          </h2>
          <div className="h-1.5 w-20 bg-brand-teal mx-auto mt-5 rounded-full" />
          <p className="text-slate-600 mt-6 text-base sm:text-lg leading-relaxed">
            Fundada sobre os valores de durabilidade e exatidão, a **Fort Construtora** nasceu para redefinir o padrão de atendimento no mercado de construção civil, entregando sofisticação sem as dores de cabeça tradicionais de uma obra.
          </p>
        </div>

        {/* Pillars Acronym Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Letter Background watermark */}
                <div className="absolute top-2 right-4 text-8xl font-black text-slate-100 font-display select-none group-hover:text-brand-teal/5 transition-colors duration-300">
                  {pillar.letter}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl border mb-6 ${pillar.color}`}>
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-blue mb-3 font-display">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-brand-teal font-semibold text-xs group-hover:gap-2.5 transition-all duration-300">
                  <span>Pilar de Excelência</span>
                  <ChevronRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Quote banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-brand text-white shadow-xl relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-teal opacity-20 blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Deseja construir em terreno próprio ou quer ajuda para escolher?
              </h3>
              <p className="text-slate-200 mt-3 text-sm sm:text-base max-w-2xl leading-relaxed">
                Nossos consultores ajudam na análise do solo, estudo de viabilidade técnica, arquitetônica e assessoria de financiamento para que você dê o primeiro passo seguro.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base text-brand-blue bg-white shadow-lg hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02]"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
