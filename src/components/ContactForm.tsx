import { useState } from 'react';
import './ContactForm.scss';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');

    // Mise à jour dynamique de l'état à chaque frappe
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Gestion de l'envoi du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatusMessage('Envoi en cours...');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatusMessage('Message envoyé avec succès !');
                setFormData({ name: '', subject: '', message: '' }); // Réinitialisation
            } else {
                setStatusMessage('Erreur lors de l\'envoi du message.');
            }
        } catch (error) {
            console.error(error);
            setStatusMessage('Impossible de joindre le serveur.');
        }
    };

    return (
        <section className="artisan-contact">
            <h2 className="contact-title">Contactez moi !</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Nom / Prénom" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="text" 
                    name="subject"
                    placeholder="Sujet de la demande" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                />
                <textarea 
                    name="message"
                    placeholder="Votre message..." 
                    rows={6} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                
                <button type="submit" className="submit-btn">Envoyer le message</button>
            </form>

            {statusMessage && <p className="form-status">{statusMessage}</p>}
            <p className="response-time">Une réponse sera apportée sous 48h.</p>
        </section>
    );
}