import { Link } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
    return (
        <main style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404</h1>
            <h2>Oups ! Cette page n'existe pas :(</h2>
            <p>L'adresse est peut-être incorrecte ou la page a été déplacée. Ne vous inquiétez pas, nos artisans sont toujours là !</p>

            <Link to="/" className="home-button">Retour à l'accueil</Link>
        </main>
    );
}