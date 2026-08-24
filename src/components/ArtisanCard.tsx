import { IoStar, IoStarHalf, IoStarOutline, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './ArtisanCard.scss';

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
    isClickable = false 
}: ArtisanCardProps) {
    /**
     * Calcule et affiche dynamiquement la note sous forme d'étoiles (de 1 à 5).
     * Gère les notes décimales (ex: 4.3) pour afficher des étoiles pleines, 
     * des demi-étoiles ou des étoiles vides de manière précise.
     */
    const ratingValue = parseFloat(String(note).replace(',', '.')) || 0;

    const cardContent = (
        <article className="artisan-card">
        <h2 className="artisan-name">{name}</h2>
        
        <div className="artisan-rating" role="img" aria-label={`Note de ${ratingValue} sur 5`}>
            {[...Array(5)].map((_, index) => {
                const starNumber = index + 1;

                // Logique pour choisir la bonne icône d'étoile
                if (ratingValue >= starNumber) {
                    // Étoile pleine
                    return <IoStar key={index} className="star active" size={20} />;
                } else if (ratingValue >= starNumber - 0.5) {
                    // Demi-étoile (si la note dépasse l'entier de 0.5 ou plus, ex: 3.5 ou 4.3)
                    return <IoStarHalf key={index} className="star active" size={20} />;
                } else {
                    // Étoile vide
                    return <IoStarOutline key={index} className="star empty" size={20} />;
                }
            })} 
        </div>
        
        <p className="artisan-category"><strong>{specialty}</strong></p>
        <p className="artisan-location">{location}</p>
        
        {isClickable && (
            <IoChevronForward className="click-arrow" size={24} />
        )}
        
        </article>
    );

    if (isClickable) {
        return (
        <Link to={`/artisan/${id}`} className="artisan-card-link">
            {cardContent}
        </Link>
        );
    }

    return cardContent;
}