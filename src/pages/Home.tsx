import ArtisanCard from '../components/ArtisanCard';
import artisansData from '../data/datas.json';
import './Home.scss';

export default function Home() {
  // Filtration des données
    const topArtisans = artisansData.filter(artisan => artisan.top).slice(0, 3);
    const batimentArtisans = artisansData.filter(artisan => artisan.category === "Bâtiment").slice(0, 3);

    return (
        <main className="home-page">
            <div className="container">
                
                {/* Section 1 : Introduction */}
                <section className="intro-section">
                    <h1 className="section-title">Comment trouver mon artisan ?</h1>
                    <div className="title-separator"></div>
                    
                    <ul className="steps-list">
                        <li><span className="step-label">Etape 1:</span> Choisir la catégorie d'artisanat dans le menu.</li>
                        <li><span className="step-label">Etape 2:</span> Choisir un artisan.</li>
                        <li><span className="step-label">Etape 3:</span> Le contacter via le formulaire de contact.</li>
                    </ul>
                    
                    <p className="response-time">Une réponse sera apportée sous 48h.</p>
                </section>

                
                {/* Section 2 : Les artisans du mois */}
                <section className="artisans-section">
                <h2 className="section-title">Les trois artisans du mois</h2>
                <div className="title-separator"></div>

                <div className="artisans-grid">
                    {topArtisans.map((artisan) => (
                    <ArtisanCard 
                        key={artisan.id}
                        id={artisan.id}
                        name={artisan.name}
                        note={artisan.note}
                        specialty={artisan.specialty}
                        location={artisan.location}
                        // isClickable n'est pas défini, la carte reste inerte
                    />
                    ))}
                </div>
                </section>

                {/* Section 3 : Les artisans du bâtiment */}
                <section className="artisans-section">
                <h2 className="section-title">Artisans du Bâtiment</h2>
                <div className="title-separator"></div>

                <div className="artisans-grid">
                    {batimentArtisans.map((artisan) => (
                    <ArtisanCard 
                        key={artisan.id}
                        id={artisan.id}
                        name={artisan.name}
                        note={artisan.note}
                        specialty={artisan.specialty}
                        location={artisan.location}
                        isClickable={true} // Activation de la redirection vers la page Artisan.tsx
                    />
                    ))}
                </div>
                </section>

            </div>
        </main>
    );
}