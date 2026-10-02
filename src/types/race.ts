//Kind of data thatthe race expects to receive 
export type DistanceCategory = '5K' | '10';
export type GenderCategory = 'Varonil' | 'Femenil' | 'General';

export interface RegistrationInfo {
    feeMXN : number; 
    capacityLimit: number;
    eventDate: string;
    locationName: string;
    address: string;
}

export interface KitItem{
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Prize {
  id: string;
  place: '1st' | '2nd' | '3rd';
  category: DistanceCategory;
  reward: string;
}

export interface SponsorTier {
    id: string;
    tier: 'Platino' | 'Oro' | 'Plata';
    contributionMXN: number;
    benefits: string[];
}
