export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string; // lucide icon name
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residencial' | 'Comercial' | 'Reforma' | 'Projeto';
  location: string;
  area: string;
  imageUrl: string;
  status: 'Concluído' | 'Em Andamento' | 'Em Projeto';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface QuoteFormState {
  name: string;
  phone: string;
  serviceType: string;
  area: string;
  finishStandard: 'Standard' | 'Premium' | 'Luxo';
  description: string;
}
