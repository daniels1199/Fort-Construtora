import React, { useState } from 'react';
import { projectsData } from '../data';
import { Ruler, MapPin, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FilterType = 'Todos' | 'Residencial' | 'Comercial' | 'Reforma' | 'Projeto';

export default function Portfolio() {
  const [filter, setFilter] = useState<FilterType>('Todos');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'Todos') return true;
    return project.category === filter;
  });

  const categories: FilterType[] = ['Todos', 'Residencial', 'Comercial', 'Reforma', 'Projeto'];

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal font-display text-sm font-bold tracking-widest uppercase block mb-3">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight animate-fade-in">
            Nossas Obras e Realizações
          </h2>
          <div className="h-1.5 w-20 bg-brand-teal mx-auto mt-5 rounded-full" />
          <p className="text-slate-600 mt-6 text-base sm:text-lg">
            Conheça alguns dos nossos projetos concluídos e em andamento. Cada obra é uma demonstração de exatidão técnica e estética singular.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100 hover:text-brand-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with AnimatePresence for smooth layout transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group flex flex-col bg-slate-50 border border-slate-100/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Hover zoom */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-200">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute Status Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-brand-blue text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
                      project.status === 'Concluído' 
                        ? 'bg-emerald-500 text-white' 
                        : project.status === 'Em Andamento'
                          ? 'bg-amber-500 text-white'
                          : 'bg-indigo-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-blue mb-4 group-hover:text-brand-teal transition-colors">
                      {project.title}
                    </h3>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-t border-b border-slate-200/50 py-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                        <MapPin size={16} className="text-brand-teal shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                        <Ruler size={16} className="text-brand-teal shrink-0" />
                        <span>Área: {project.area}</span>
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic project summary footnote */}
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span className="flex items-center gap-1">
                      <Layers size={14} className="text-slate-300" />
                      Engenharia Fort
                    </span>
                    <span>Padrão Residencial Luxo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
