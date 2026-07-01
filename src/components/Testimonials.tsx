import React from 'react';
import { testimonialsData } from '../data';
import { Star, Quote, ShieldAlert, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Decorative architectural layout detail in background */}
      <div className="absolute top-10 left-10 w-48 h-48 border-t border-l border-slate-200 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border-b border-r border-slate-200 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal font-display text-sm font-bold tracking-widest uppercase block mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            A Opinião de Quem Confia em Nós
          </h2>
          <div className="h-1.5 w-20 bg-brand-teal mx-auto mt-5 rounded-full" />
          <p className="text-slate-600 mt-6 text-base sm:text-lg">
            Mais do que construir edificações, construímos relacionamentos sólidos baseados em honestidade, prazos respeitados e entrega impecável.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsData.map((test, index) => {
            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white border border-slate-100/80 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-6 right-6 text-slate-100 opacity-80 pointer-events-none">
                  <Quote size={40} className="text-slate-200" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-8 relative z-10">
                    "{test.content}"
                  </p>
                </div>

                {/* Client Profile details */}
                <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-brand-blue flex items-center gap-1.5">
                      {test.name}
                      <BadgeCheck size={14} className="text-brand-teal fill-brand-teal/10" />
                    </h4>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {test.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center sm:text-left max-w-4xl mx-auto">
          <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl shrink-0">
            <BadgeCheck size={28} className="text-brand-teal" />
          </div>
          <div>
            <h4 className="font-display text-sm sm:text-base font-bold text-brand-blue">
              Garantia Estendida de 5 Anos em todas as nossas Obras e Estruturas
            </h4>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              Assumimos total responsabilidade sobre a solidez estrutural e conformidade de cada entrega. Sua tranquilidade é o nosso compromisso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
