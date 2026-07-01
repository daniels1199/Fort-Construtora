import { Service, Project, Testimonial } from './types';

export const servicesData: Service[] = [
  {
    id: 'construcao',
    title: 'Construção de Alto Padrão',
    description: 'Executamos obras residenciais e comerciais do absoluto zero, com alto rigor técnico, acompanhamento detalhado e acabamento premium.',
    details: [
      'Residências de luxo e condomínios fechados',
      'Edifícios comerciais e corporativos',
      'Estruturas de concreto armado e metálicas',
      'Fundações especiais e terraplenagem',
      'Cronograma físico-financeiro rigoroso',
    ],
    icon: 'HardHat',
  },
  {
    id: 'reforma',
    title: 'Reformas Premium & Retrofit',
    description: 'Transformamos e modernizamos espaços residenciais e corporativos, integrando novas tecnologias e acabamentos sofisticados.',
    details: [
      'Reformas completas de apartamentos e coberturas',
      'Adequação de salas e galpões comerciais',
      'Retrofit de fachadas e revitalização estrutural',
      'Troca de revestimentos e acabamentos de alto padrão',
      'Laudo de Reforma e conformidade com a NBR 16.280',
    ],
    icon: 'Hammer',
  },
  {
    id: 'projetos',
    title: 'Projetos Arquitetônicos & BIM',
    description: 'Elaboramos projetos funcionais e estéticos utilizando tecnologia BIM (Building Information Modeling), garantindo precisão e zero desperdício.',
    details: [
      'Projetos de arquitetura residenciais e comerciais',
      'Projetos complementares (elétrico, hidráulico, estrutural)',
      'Modelagem e compatibilização em BIM',
      'Maquetes eletrônicas e renderização 3D realista',
      'Aprovações junto a órgãos públicos e condomínios',
    ],
    icon: 'DraftingCompass',
  },
  {
    id: 'consultoria',
    title: 'Consultoria & Laudos Técnicos',
    description: 'Oferecemos vistorias, laudos especializados e gestão completa para garantir a segurança jurídica, financeira e técnica de sua obra.',
    details: [
      'Vistoria de recebimento de chaves (apartamentos novos)',
      'Laudos de patologia e infiltração estrutural',
      'Fiscalização técnica e auditoria de obras terceiras',
      'Orçamentação detalhada e planejamento de custos',
      'Gestão de compras e contratação de fornecedores',
    ],
    icon: 'ClipboardCheck',
  },
];

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'Residência Alphaville Hills',
    category: 'Residencial',
    location: 'Barueri, SP',
    area: '450m²',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: 'Concluído',
  },
  {
    id: 'proj2',
    title: 'Edifício Corporativo Hub-Teal',
    category: 'Comercial',
    location: 'Berrini, SP',
    area: '1.200m²',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    status: 'Concluído',
  },
  {
    id: 'proj3',
    title: 'Retrofit e Cobertura Itaim',
    category: 'Reforma',
    location: 'Itaim Bibi, SP',
    area: '280m²',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    status: 'Em Andamento',
  },
  {
    id: 'proj4',
    title: 'Condomínio Reserva da Serra',
    category: 'Projeto',
    location: 'Jundiaí, SP',
    area: '620m²',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    status: 'Em Projeto',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test1',
    name: 'Ricardo M. Albuquerque',
    role: 'Proprietário da Residência Alphaville Hills',
    content: 'A Fort Construtora entregou minha casa dos sonhos rigorosamente no prazo e dentro do orçamento acordado. A precisão do planejamento em BIM evitou surpresas negativas e o acabamento é simplesmente impecável.',
    rating: 5,
  },
  {
    id: 'test2',
    name: 'Sofia Valente',
    role: 'Diretora Operacional da TechSpace Co.',
    content: 'Excelente experiência na reforma de nosso novo escritório corporativo. Profissionais extremamente éticos, canteiro de obras limpo e organização impecável. O laudo técnico emitido nos deu total segurança jurídica.',
    rating: 5,
  },
  {
    id: 'test3',
    name: 'Carlos Eduardo Mendes',
    role: 'Investidor Imobiliário',
    content: 'Já realizei três obras de incorporação com a Fort. O diferencial deles é a transparência nos relatórios semanais de evolução física e o controle de compras. Extremamente profissionais, recomendo fortemente.',
    rating: 5,
  },
];
