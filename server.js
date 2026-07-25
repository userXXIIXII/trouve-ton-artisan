import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Configuration du transporteur SMTP local (MailDev)
const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false,
});

// Route pour intercepter le formulaire de contact
app.post('/api/contact', async (req, res) => {
    const { name, subject, message } = req.body;

    try {
        await transporter.sendMail({
            from: `"${name}" <contact@trouvetonartisan.fr>`,
            to: 'artisan@example.com',
            subject: `[Contact] ${subject}`,
            text: message,
            html: `<p><strong>Nom :</strong> ${name}</p><p>${message}</p>`
        });

        res.status(200).json({ success: true, message: 'E-mail intercepté avec succès !' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi du message' });
    }
});

app.listen(5000, () => {
    console.log('Serveur backend démarré sur http://localhost:5000');
});