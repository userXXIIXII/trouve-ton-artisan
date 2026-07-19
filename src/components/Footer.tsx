import { Link } from 'react-router-dom';
import { IoCallOutline } from 'react-icons/io5';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                
                {/* Bloc Gauche : Adresse & Contact */}
                <div className="footer-address">
                    <p className="region-name"><strong>Région Auvergne-Rhône-Alpes</strong></p>
                    <div className="address-lines">
                        <p>101 cours Charlemagne</p>
                        <p>69269 LYON CEDEX 02</p>
                        <p>France</p>
                    </div>
                    <a href="tel:+33426794000" className="phone-link">
                        <IoCallOutline className="phone-icon" size={18} />
                        +33 4 26 79 40 00
                    </a>
                </div>

                {/* Bloc Droite : Liens légaux */}
                <nav className="footer-links">
                <ul>
                    <li><Link to="#">Mentions légales</Link></li>
                    <li><Link to="#">Données personnelles</Link></li>
                    <li><Link to="#">Accessibilité</Link></li>
                    <li><Link to="#">Cookies</Link></li>
                </ul>
                </nav>

            </div>
        </footer>
    );
}