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