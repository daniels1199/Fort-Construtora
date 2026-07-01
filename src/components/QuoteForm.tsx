import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Calculator, ShieldCheck, Ruler, ArrowRight, CheckCircle } from 'lucide-react';
import { QuoteFormState } from '../types';

// CONFIGURAÇÃO DO WHATSAPP DA CONSTRUTORA
// Altere este número para o número da construtora (formato: Código do País + DDD + Número. Ex: 5511999999999)
const WHATSAPP_DESTINATION_NUMBER = '5511999999999';

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormState>({
    name: '',
    phone: '',
    serviceType: 'construcao',
    area: '',
    finishStandard: 'Premium',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesMap: Record<string, string> = {
    construcao: 'Construção de Alto Padrão',
    reforma: 'Reformas Premium & Retrofit',
    projetos: 'Projetos Arquitetônicos & BIM',
    consultoria: 'Consultoria & Laudos Técnicos',
  };

  // Real-time estimated calculations to make the app incredibly interactive
  const estimationResult = useMemo(() => {
    const areaNum = parseFloat(formData.area) || 0;
    if (areaNum <= 0) return null;

    let costPerSqm = 0;

    // Pricing models depending on service and quality standard
    if (formData.serviceType === 'construcao') {
      if (formData.finishStandard === 'Standard') costPerSqm = 2400;
      else if (formData.finishStandard === 'Premium') costPerSqm = 3800;
      else if (formData.finishStandard === 'Luxo') costPerSqm = 5800;
    } else if (formData.serviceType === 'reforma') {
      if (formData.finishStandard === 'Standard') costPerSqm = 1200;
      else if (formData.finishStandard === 'Premium') costPerSqm = 2100;
      else if (formData.finishStandard === 'Luxo') costPerSqm = 3600;
    } else if (formData.serviceType === 'projetos') {
      if (formData.finishStandard === 'Standard') costPerSqm = 90;
      else if (formData.finishStandard === 'Premium') costPerSqm = 140;
      else if (formData.finishStandard === 'Luxo') costPerSqm = 220;
    } else {
      // Consultoria
      return {
        type: 'fixed',
        min: 1500,
        max: 3500,
        label: 'Valor estimado por hora técnica ou laudo padrão',
      };
    }

    const estimatedTotal = areaNum * costPerSqm;
    return {
      type: 'range',
      min: Math.round(estimatedTotal * 0.95),
      max: Math.round(estimatedTotal * 1.10),
      label: 'Custo estimado de obra (mão de obra + materiais de referência)',
    };
  }, [formData.serviceType, formData.area, formData.finishStandard]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStandardSelect = (standard: 'Standard' | 'Premium' | 'Luxo') => {
    setFormData((prev) => ({ ...prev, finishStandard: standard }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha seu Nome e WhatsApp de contato.');
      return;
    }

    // Build the professional custom WhatsApp message string
    const serviceName = servicesMap[formData.formDataKey || formData.serviceType] || formData.serviceType;
    const areaText = formData.area ? `${formData.area} m²` : 'Não informada';
    const standardText = formData.serviceType !== 'consultoria' ? formData.finishStandard : 'Não aplicável';
    const detailsText = formData.description ? formData.description : 'Nenhuma observação adicional.';

    const message = `Olá, Fort Construtora! Gostaria de solicitar um orçamento para meu projeto.

📋 *DADOS DE CONTATO*
• *Nome*: ${formData.name}
• *WhatsApp*: ${formData.phone}

🏗️ *DETALHES DO PROJETO*
• *Serviço*: ${serviceName}
• *Área Estimada*: ${areaText}
• *Padrão de Acabamento*: ${standardText}

💬 *DETALHES DA OBRA / OBSERVAÇÕES*
"${detailsText}"

*Enviado via simulador de orçamento da Fort Construtora.*`;

    // Encode URL for WhatsApp API
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_DESTINATION_NUMBER}&text=${encodedMessage}`;

    setIsSubmitted(true);

    // Redirect to WhatsApp after a short delay to allow transition animations
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitted(false);
    }, 1200);
  };

  return (
    <section id="orcamento" className="py-24 bg-white relative overflow-hidden">
      {/* Background graphic grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25 pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal font-display text-sm font-bold tracking-widest uppercase block mb-3">
            Orçamento Inteligente
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Faça seu Orçamento Rápido
          </h2>
          <div className="h-1.5 w-20 bg-brand-teal mx-auto mt-5 rounded-full" />
          <p className="text-slate-600 mt-6 text-base sm:text-lg">
            Preencha os dados do seu projeto abaixo para receber uma estimativa instantânea e nos enviar os detalhes diretamente no WhatsApp.
          </p>
        </div>

        {/* Dynamic Splitscreen Form + Estimator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-3xl shadow-sm relative">
            
            {/* Overlay for submission status */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 rounded-3xl flex flex-col items-center justify-center p-6 text-center z-20 animate-in fade-in duration-200">
                <div className="p-4 bg-emerald-100 text-emerald-600 rounded-full mb-4 animate-bounce">
                  <CheckCircle size={40} />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-blue">Orçamento Compilado!</h3>
                <p className="text-slate-500 text-sm max-w-xs mt-2">
                  Redirecionando você para o WhatsApp dos nossos engenheiros para finalizar seu atendimento...
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form header details */}
              <div className="flex items-center gap-3 border-b border-slate-200/60 pb-4">
                <Calculator className="text-brand-teal" size={22} />
                <h3 className="font-display text-lg font-bold text-brand-blue">Simulador de Projeto</h3>
              </div>

              {/* Grid Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ex: João da Silva"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 outline-none transition-all text-slate-800 placeholder-slate-400 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                    WhatsApp de Contato *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Ex: (11) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 outline-none transition-all text-slate-800 placeholder-slate-400 text-sm"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="serviceType" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Tipo de Serviço Desejado
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 outline-none transition-all text-slate-800 text-sm"
                >
                  <option value="construcao">Construção de Alto Padrão (Residencial/Comercial)</option>
                  <option value="reforma">Reforma Premium & Retrofit</option>
                  <option value="projetos">Projetos Arquitetônicos & BIM</option>
                  <option value="consultoria">Consultoria Técnica & Laudo de Obras</option>
                </select>
              </div>

              {/* Area Input and standard - dependent on type */}
              {formData.serviceType !== 'consultoria' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="area" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <Ruler size={14} className="text-brand-teal" />
                      Área Estimada (m²)
                    </label>
                    <input
                      type="number"
                      id="area"
                      name="area"
                      min="1"
                      placeholder="Ex: 150"
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 outline-none transition-all text-slate-800 placeholder-slate-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                      Padrão de Acabamento
                    </label>
                    <div className="grid grid-cols-3 gap-1 bg-slate-200/50 p-1 rounded-xl">
                      {(['Standard', 'Premium', 'Luxo'] as const).map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => handleStandardSelect(level)}
                          className={`py-2 rounded-lg text-xs font-bold transition-all ${
                            formData.finishStandard === level
                              ? 'bg-brand-blue text-white shadow-sm'
                              : 'text-slate-600 hover:text-brand-blue'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Message Details */}
              <div>
                <label htmlFor="description" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Descreva resumidamente sua obra (Opcional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Conte-nos se já possui terreno próprio, se possui projeto arquitetônico prévio, qual sua localização ou detalhes especiais que gostaria no seu imóvel..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 outline-none transition-all text-slate-800 placeholder-slate-400 text-sm resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base text-white bg-gradient-brand shadow-lg hover:shadow-brand-teal/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageSquare size={18} />
                Enviar Orçamento no WhatsApp
                <ArrowRight size={18} />
              </button>

            </form>
          </div>

          {/* Estimation Side Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Dynamic Value Range card */}
            <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              {/* background graphic element */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-teal/20 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-brand-teal/10 blur-xl" />

              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal-light block mb-3">
                  Estimativa de Custo
                </span>
                
                {estimationResult ? (
                  estimationResult.type === 'range' ? (
                    <div>
                      <span className="text-slate-400 text-xs">Valor Estimado de Obra:</span>
                      <h4 className="font-display text-2xl sm:text-3xl font-extrabold mt-1 text-slate-100">
                        R$ {estimationResult.min.toLocaleString('pt-BR')} - R$ {estimationResult.max.toLocaleString('pt-BR')}
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-3 leading-relaxed border-t border-white/10 pt-3">
                        *Estimativa baseada no CUB (Custo Unitário Básico) atualizado para o padrão selecionado. Não substitui o orçamento executivo definitivo.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-slate-400 text-xs">A partir de:</span>
                      <h4 className="font-display text-2xl sm:text-3xl font-extrabold mt-1 text-slate-100">
                        R$ {estimationResult.min.toLocaleString('pt-BR')}
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-3 leading-relaxed border-t border-white/10 pt-3">
                        *Valor referencial de serviço de consultoria estrutural ou laudo simples. O escopo definitivo depende da vistoria prévia.
                      </p>
                    </div>
                  )
                ) : (
                  <div className="py-6 flex flex-col items-center justify-center text-center text-slate-300">
                    <Calculator size={36} className="text-brand-teal mb-3 animate-pulse" />
                    <p className="text-sm font-semibold">Preencha a Área Estimada</p>
                    <p className="text-xs text-slate-400 mt-1 max-w-[220px]">
                      Digite os metros quadrados do projeto para ver a simulação do custo de obra.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Why choose Fort benefits card */}
            <div className="bg-slate-50 border border-slate-150 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-6">
              <h4 className="font-display text-base font-bold text-brand-blue">Diferenciais Fort Construtora:</h4>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-brand-blue">Orçamento Sem Aditivos</h5>
                    <p className="text-xs text-slate-500 mt-0.5">O preço acordado em contrato é rigorosamente mantido até o final da obra.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-brand-blue">Compatibilização em Modelagem BIM</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Identificamos interferências elétricas e estruturais antes do início da construção.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-brand-blue">Atendimento Exclusivo</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Seu gerente de conta responde diariamente sobre a evolução física do cronograma.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
