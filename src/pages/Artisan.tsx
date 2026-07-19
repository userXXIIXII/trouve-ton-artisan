import { useParams } from 'react-router-dom';
import { IoStar } from 'react-icons/io5';
import artisansData from '../data/datas.json';
import './Artisan.scss';

export default function Artisan() {
  const { id } = useParams<{ id: string }>();
  const artisan = artisansData.find((a) => a.id.toString() === id);

  if (!artisan) {
    return (
      <main className="artisan-page container">
        <h2>Artisan introuvable</h2>
      </main>
    );
  }

  const ratingValue = parseInt(artisan.note, 10) || 0;

  return (
    <main className="artisan-page container">
      
      <section className="artisan-info">
        <h1 className="artisan-name">{artisan.name}</h1>

        <div className="artisan-rating">
          {[...Array(5)].map((_, index) => (
            <IoStar 
              key={index} 
              className={`star ${index < ratingValue ? 'active' : ''}`} 
              size={24} 
            />
          ))}
        </div>

        <h2 className="artisan-specialty-location">
          {artisan.specialty} / {artisan.location}
        </h2>

        <p className="artisan-about">{artisan.about}</p>
      </section>

      <hr className="divider" />

      <section className="artisan-contact">
        <h2 className="contact-title">Contactez moi !</h2>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Nom / Prénom" required />
          <input type="text" placeholder="Sujet de la demande" required />
          <textarea placeholder="Votre message..." rows={6} required></textarea>
          
          <button type="submit" className="submit-btn">Envoyer le message</button>
        </form>

        <p className="response-time">Une réponse sera apportée sous 48h.</p>
      </section>

    </main>
  );
}