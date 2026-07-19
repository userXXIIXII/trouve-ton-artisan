import { IoStar, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './ArtisanCard.scss';

// Ajout de la propriété facultative isClickable (booléen)
interface ArtisanCardProps {
    id: string;
    name: string;
    note: string;
    specialty: string;
    location: string;
    isClickable?: boolean; 
}

export default function ArtisanCard({ 
    id, 
    name, 
    note, 
    specialty, 
    location, 
    isClickable = false // Par défaut, la carte n'est pas cliquable
    }: ArtisanCardProps) {
    const ratingValue = parseInt(note, 10) || 0;

    // 1. On stocke le visuel de la carte dans une constante
    const cardContent = (
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
        
        <p className="artisan-category"><strong>{specialty}</strong></p>
        <p className="artisan-location">{location}</p>
        
        {isClickable && (
            <IoChevronForward className="click-arrow" size={24} />
        )}
        
        </article>
    );

    // 2. Rendu conditionnel : si la carte doit être cliquable, on l'enveloppe du Link
    if (isClickable) {
        return (
        <Link to={`/artisan/${id}`} className="artisan-card-link">
            {cardContent}
        </Link>
        );
    }

    // 3. Sinon, on retourne la carte simple, sans interactivité
    return cardContent;
}