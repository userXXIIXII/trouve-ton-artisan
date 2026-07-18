export interface Artisan {
    id: string;
    name: string;
    specialty: string;
    note: string;       // Reçu sous forme de chaîne "4.5" dans ton JSON
    location: string;
    about: string;
    email: string;
    website: string;
    category: 'Bâtiment' | 'Fabrication' | 'Services' | 'Alimentation'; // Tes 4 catégories Figma
    top: boolean;       // true ou false pour les artisans du mois
}