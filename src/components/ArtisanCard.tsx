import { IoStar } from 'react-icons/io5';
import './ArtisanCard.scss';

// 1. Les props correspondent désormais exactement aux clés du JSON
interface ArtisanCardProps {
    name: string;
    note: string;       // La note arrive sous forme de texte ("4")
    specialty: string;  // On utilise la spécialité pour l'affichage
    location: string;   // Localisation unique
}

export default function ArtisanCard({ name, note, specialty, location }: ArtisanCardProps) {
    // Conversion de la note (texte) en nombre pour gérer l'affichage des étoiles
    const ratingValue = parseInt(note, 10) || 0;

    return (
        <article className="artisan-card">
        <h3 className="artisan-name">{name}</h3>
        
        <div className="artisan-rating" aria-label={`Note de ${ratingValue} sur 5`}>
            {[...Array(5)].map((_, index) => (
            <IoStar 
                key={index} 
                className={`star ${index < ratingValue ? 'active' : ''}`} 
                size={20} 
            />
            ))}
        </div>
        
        <p className="artisan-category">{specialty}</p>
        <p className="artisan-location">{location}</p>
        </article>
    );
}