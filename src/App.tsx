/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a floating friendly tooltip near the WhatsApp button after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleFloatingWhatsAppClick = () => {
    const text = encodeURIComponent('Olá, Fort Construtora! Vi o site de vocês e gostaria de conversar sobre um projeto.');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511999999999&text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-brand-teal/20 selection:text-brand-blue antialiased text-slate-800">
      
      {/* Navbar Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero />

        {/* Company Core Values & About */}
        <About />

        {/* Dynamic Services Inclusions */}
        <Services />

        {/* Portfolio Showcase with Dynamic Sorting Filters */}
        <Portfolio />

        {/* Testimonials from Clients */}
        <Testimonials />

        {/* Interactive Orçamento (Budget) Calculator / Form */}
        <QuoteForm />

      </main>

      {/* Footer Details */}
      <Footer />

      {/* Elegant Floating WhatsApp Chat Button Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Floating Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="pointer-events-auto bg-white text-brand-blue border border-slate-100 shadow-2xl p-4 rounded-2xl flex items-start gap-3 max-w-[260px] relative"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute top-4 left-4" />
              <div className="pl-3">
                <h5 className="font-display font-bold text-xs">Eng. Gabriel • Online</h5>
                <p className="text-[11px] text-slate-500 mt-1">
                  Olá! Como posso ajudar na estimativa de custos do seu projeto hoje?
                </p>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-slate-400 hover:text-slate-600 shrink-0 mt-0.5"
                aria-label="Fechar"
              >
                <X size={14} />
              </button>
              
              {/* Tooltip speech arrow tip */}
              <div className="absolute right-6 bottom-[-6px] w-3.5 h-3.5 bg-white border-r border-b border-slate-100 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <button
          onClick={handleFloatingWhatsAppClick}
          className="pointer-events-auto p-4 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-300 relative group animate-bounce hover:animate-none"
          title="Fale Conosco no WhatsApp"
          aria-label="Falar no WhatsApp"
        >
          {/* Pulsing indicator */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/35 animate-ping opacity-75 group-hover:hidden" />
          
          <MessageCircle size={28} className="relative z-10 fill-white/10" />
        </button>

      </div>

    </div>
  );
}
