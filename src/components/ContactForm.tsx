import './ContactForm.scss';

export default function ContactForm() {
    return (
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
    );
}