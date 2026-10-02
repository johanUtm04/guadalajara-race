import type { RegistrationInfo } from "../types/race";

export const EVENT_DETAILS: Readonly <RegistrationInfo> ={
    feeMXN : 250, 
    capacityLimit: 500, 
    eventDate: '2026-11-29T07:00:00',
    locationName: 'Parque Metropolitano (Torres Amarillas)',
    address: 'Zapopan, Jalisco, Mexico',
}

export const  DISTANCE_CATEGORIES = ['5K', '10K'] as const;