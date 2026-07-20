import { useParams } from 'react-router-dom';
import artisansData from '../data/datas.json';
import ArtisanCard from '../components/ArtisanCard';
import './Category.scss';

export default function Category() {
  // 1. Récupération de la catégorie depuis l'URL
  const { category } = useParams<{ category: string }>();

  // 2. Décodage de l'URL (utile si la catégorie contient des accents ou des espaces)
  const decodedCategory = category ? decodeURIComponent(category) : '';

  // 3. Filtrage des artisans qui appartiennent à cette catégorie
  const filteredArtisans = artisansData.filter(
    (artisan) => artisan.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  return (
    <main className="category-page">
      <div className="container">
        {/* En-tête de la page */}
        <h1 className="category-title">Nos artisans : {decodedCategory}</h1>
        <div className="title-separator"></div>

        {/* Affichage conditionnel : grille de résultats OU message d'erreur */}
        {filteredArtisans.length > 0 ? (
          <div className="artisans-grid">
            {filteredArtisans.map((artisan) => (
              <ArtisanCard
                key={artisan.id}
                id={artisan.id.toString()}
                name={artisan.name}
                note={artisan.note}
                specialty={artisan.specialty}
                location={artisan.location}
                isClickable={true} // On rend les cartes cliquables
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Oups ! Aucun artisan ne correspond à cette catégorie.</p>
          </div>
        )}
      </div>
    </main>
  );
}