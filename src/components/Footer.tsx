import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, ArrowUp, Send, Smartphone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-blue text-white pt-20 pb-8 relative overflow-hidden border-t border-white/10">
      {/* Wave decorative line overlay like the wave pattern in the logo image */}
      <div className="absolute top-0 right-0 w-[40%] h-12 bg-gradient-brand opacity-25 translate-y-[-50%] rotate-3 skew-x-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <Logo lightText={true} className="h-11" />
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Solidez estrutural, precisão técnica e sofisticação estética. Construindo empreendimentos modernos e residências de luxo com alto rigor e transparência total.
            </p>
            {/* Quick contact badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300">
              <Smartphone size={14} className="text-brand-teal" />
              <span>Garantia de Solidez Construtiva</span>
            </div>
          </div>

          {/* Quick links Column */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase mb-6 pb-2 border-b border-white/5 inline-block">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Início', id: '#home' },
                { name: 'Sobre Nós', id: '#sobre' },
                { name: 'Serviços', id: '#servicos' },
                { name: 'Portfólio', id: '#portfolio' },
                { name: 'Depoimentos', id: '#depoimentos' },
                { name: 'Fazer Orçamento', id: '#orcamento' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.id}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-slate-300 hover:text-brand-teal text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase pb-2 border-b border-white/5 inline-block">
              Fale Conosco
            </h4>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-slate-300 text-sm">
                <MapPin size={18} className="text-brand-teal shrink-0 mt-0.5" />
                <span>
                  Av. das Nações Unidas, 12901 - 22º Andar<br />
                  Brooklin Paulista, São Paulo - SP, 04578-000
                </span>
              </li>
              <li className="flex items-center gap-3.5 text-slate-300 text-sm">
                <Phone size={18} className="text-brand-teal shrink-0" />
                <a href="tel:+5511999999999" className="hover:text-brand-teal transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3.5 text-slate-300 text-sm">
                <Mail size={18} className="text-brand-teal shrink-0" />
                <a href="mailto:contato@fortconstrutora.com.br" className="hover:text-brand-teal transition-colors">
                  contato@fortconstrutora.com.br
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Credentials and Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Fort Construtora. Todos os direitos reservados.
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-brand-teal text-slate-300 hover:text-white border border-white/10 rounded-xl transition-all hover:-translate-y-0.5"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
