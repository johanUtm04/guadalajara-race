import type { KitItem, Prize, SponsorTier } from "../types/race";

export const MOCK_KIT_ITEMS: KitItem[] = [
  {
    id: 'kit-1',
    name: 'Playera Conmemorativa',
    description: 'Playera técnica de alta tecnología de secado rápido con el diseño oficial 2026.',
    iconName: 'shirt',
  },
  {
    id: 'kit-2',
    name: 'Número de Corredor',
    description: 'Número oficial personalizado con chip de cronometraje electrónico integrado.',
    iconName: 'tag',
  },
  {
    id: 'kit-3',
    name: 'Medalla de Finalista',
    description: 'Medalla metálica de colección otorgada al cruzar la meta.',
    iconName: 'award',
  },
  {
    id: 'kit-4',
    name: 'Morral Deportivo',
    description: 'Morral ligero e impermeable para resguardo de pertenencias.',
    iconName: 'bag',
  },
]

export const MOCK_PRIZES: Prize[] = [
{
    id: 'prize-1',
    place: '1st',
    category: '10K',
    reward: '$5,000 MXN en efectivo + Trofeo Oficial',
  },
  {
    id: 'prize-2',
    place: '2nd',
    category: '10K',
    reward: '$3,000 MXN en efectivo + Reconocimiento',
  },
  {
    id: 'prize-3',
    place: '3rd',
    category: '10K',
    reward: '$1,500 MXN en efectivo + Reconocimiento',
  },
  {
    id: 'prize-4',
    place: '1st',
    category: '5K',
    reward: '$3,000 MXN en efectivo + Trofeo Oficial',
  },
  {
    id: 'prize-5',
    place: '2nd',
    category: '5K',
    reward: '$2,000 MXN en efectivo + Reconocimiento',
  },
  {
    id: 'prize-6',
    place: '3rd',
    category: '5K',
    reward: '$1,000 MXN en efectivo + Reconocimiento',
},
]

export const MOCK_SPONSORS: SponsorTier[] = [
  {
    id: 'sp-1',
    tier: 'Platino',
    contributionMXN: 50000,
    benefits: [
      'Logo principal en playera y banner de meta',
      'Stand exclusivo en la zona de meta',
      'Mención prioritaria en sonido local',
    ],
  },
  {
    id: 'sp-2',
    tier: 'Oro',
    contributionMXN: 25000,
    benefits: [
      'Logo secundario en playera',
      'Espacio para módulo publicitario',
      'Inclusión de promocionales en el kit',
    ],
  },
  {
    id: 'sp-3',
    tier: 'Plata',
    contributionMXN: 10000,
    benefits: [
      'Logo en sitio web oficial',
      'Inclusión de promocionales en el kit',
    ],
  },
]

export interface ParkingOption {
  id: string;
  name: string;
  capacity: string;
  accessNote: string;
  mapUrl: string;
}

export interface LocationInfo {
  venueName: string;
  address: string;
  mapEmbedUrl: string;
  parkings: ParkingOption[];
}

export const MOCK_LOCATION_DATA: LocationInfo = {
  venueName: 'Torres Amarillas (Parque Metropolitano)',
  address: 'Zapopan, Jalisco, México',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.846501234567!2d-103.435!3d20.675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQwJzMwLjAiTiAxMDPCsDI2JzA2LjAiVw!5e0!3m2!1ses!2smx!4v1600000000000!5m2!1ses!2smx',
  parkings: [
    {
      id: 'parking-1',
      name: 'Estacionamiento 1 - Entrada Principal',
      capacity: '300 cajones',
      accessNote: 'Acceso por Av. Vallarta. Se sugiere llegar antes de las 6:30 AM.',
      mapUrl: 'https://maps.google.com/?q=Estacionamiento+1+Torres+Amarillas',
    },
    {
      id: 'parking-2',
      name: 'Estacionamiento 2 - Alterno',
      capacity: '200 cajones',
      accessNote: 'Acceso por Av. Periférico. Recomendado para flujo de salida rápido.',
      mapUrl: 'https://maps.google.com/?q=Estacionamiento+2+Torres+Amarillas',
    },
  ],
};

export interface SocialCauseData {
  title: string;
  organization: string;
  locationUrl: string;
  description: string;
  impactMessage: string;
  itemsNeeded: string[];
}

export const MOCK_SOCIAL_CAUSE_DATA: SocialCauseData = {
  title: 'Cuota de Inscripción',
  organization: 'CASA HOGAR ESCALAR',
  locationUrl: 'https://maps.app.goo.gl/mEPmvVNCLEjvloGg8',
  description: 'La cuota de inscripción a la carrera es un donativo en especie. Apoyamos a las niñas, niños y jóvenes de Casa Hogar Escalar con productos y artículos de primera necesidad.',
  impactMessage: 'Tu apoyo hace la diferencia. Entrega tu donativo en especie el día del evento o durante la recogida de kits.',
  itemsNeeded: [
    'Abarrotes y alimentos no perecederos (aceite, avena, pasta, enlatados)',
    'Artículos de higiene personal y limpieza (jabón, papel, desinfectante)',
    'Medicamentos básicos de botiquín (analgésicos, curación)',
    'Ropa, cobijas y textiles en buen estado',
  ],
};

export interface AwardPrize {
  place: string;
  item: string;
  badge: string;
}

export interface RaffleCategory {
  title: string;
  description: string;
  items: string[];
}

export interface PrizesAndRaffleData {
  title: string;
  subtitle: string;
  awards: AwardPrize[];
  raffleTitle: string;
  raffleTotalAmount: string;
  raffleSubtitle: string;
  raffleCategories: RaffleCategory[];
}

export const MOCK_PRIZES_DATA: PrizesAndRaffleData = {
  title: 'Premiación a Ganadores',
  subtitle: 'Grandes premios para los primeros lugares de la competencia',
  awards: [
    { place: '1er Lugar', item: 'Motocicleta', badge: 'Oro' },
    { place: '2do Lugar', item: 'Scooter Eléctrico', badge: 'Plata' },
    { place: '3er Lugar', item: 'Pantalla Smart TV', badge: 'Bronce' },
  ],
  raffleTitle: 'Gran Rifa para Asistentes',
  raffleTotalAmount: 'Más de $20,000 MXN',
  raffleSubtitle: 'Todos los números inscritos participan en el sorteo al finalizar la carrera',
  raffleCategories: [
    {
      title: 'Electrodomésticos',
      description: 'Equipa tu hogar con los mejores aparatos',
      items: ['Hornos de microondas', 'Freidoras de aire', 'Planchas', 'Y mucho más...'],
    },
    {
      title: 'Herramientas',
      description: 'Kits y herramientas de uso rudo',
      items: ['Taladros inalámbricos', 'Cajas de herramientas', 'Juegos de llaves y desarmadores'],
    },
  ],
};

export interface SponsorsSectionData {
  title: string;
  subtitle: string;
  benefitLabels: { key: string; label: string }[];
  tiers: {
    id: string;
    name: string;
    price: string;
    color?: string;
    highlighted?: boolean;
    courtesyInscriptions?: string;
    benefits: string[];
  }[];
}

export const MOCK_SPONSORS_DATA: SponsorsSectionData = {
  title: 'Paquetes de Patrocinadores',
  subtitle: 'Forma parte de la 3ª Carrera Con Causa Cruz Azul Guadalajara 2026',
  benefitLabels: [
    { key: 'principal', label: 'Presencia como Patrocinador Principal' },
    { key: 'stand', label: 'Espacio preferencial para stand' },
    { key: 'materials', label: 'Presencia en materiales impresos y digitales' },
    { key: 'screens', label: 'Presencia en pantallas durante el evento' },
    { key: 'shirt', label: 'Logo en playera oficial del evento' },
    { key: 'socials', label: 'Mención en redes sociales y comunicados oficiales' },
  ],
  tiers: [
    {
      id: 'platino',
      name: 'Patrocinador Platino',
      price: '$200,000',
      color: '#dc2626',
      highlighted: true,
      courtesyInscriptions: '10 Inscripciones',
      benefits: ['principal', 'stand', 'materials', 'screens', 'shirt', 'socials'],
    },
    {
      id: 'oro',
      name: 'Patrocinador Oro',
      price: '$100,000',
      color: '#0284c7',
      courtesyInscriptions: '5 Inscripciones',
      benefits: ['stand', 'materials', 'screens', 'shirt'],
    },
    {
      id: 'plata',
      name: 'Patrocinador Plata',
      price: '$50,000',
      color: '#1e3a8a',
      courtesyInscriptions: '5 Inscripciones',
      benefits: ['materials', 'screens', 'socials'],
    },
  ],
};