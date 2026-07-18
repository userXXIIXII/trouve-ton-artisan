import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="main-header">
        <div className="header-container">
            
            {/* À gauche : Le Logo */}
            <div className="header-left">
            <Link to="/" className="logo-link" onClick={closeMenu}>
                <img src="./src/assets/logo.png" alt="Logo Trouve ton artisan" className="logo" />
            </Link>
            </div>

            {/* Au milieu : La Navigation Bureau */}
            <nav className="desktop-navigation">
            <ul>
                <li><Link to="#">Bâtiment</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Fabrication</Link></li>
                <li><Link to="#">Alimentation</Link></li>
            </ul>
            </nav>

            {/* À droite : La Barre de Recherche + Menu Burger Mobile */}
            <div className="header-actions">
            
            {/* Champ de recherche conforme à la maquette */}
            <div className="search-bar-container">
                <input 
                type="text" 
                placeholder="Cherchez ..." 
                className="search-input"
                aria-label="Rechercher un artisan"
                />
                <IoSearchOutline className="search-icon-inside" size={18} />
            </div>
            
            {/* Déclencheur Mobile */}
            <button 
                className="action-btn menu-trigger-btn" 
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
                {isMenuOpen ? (
                <IoCloseOutline size={26} className="close-icon" />
                ) : (
                <IoMenuOutline size={26} />
                )}
            </button>
            </div>

            {/* Menu Rideau Mobile */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}>
            <nav className="mobile-navigation">
                <ul>
                <li><Link to="#" onClick={closeMenu}>Bâtiment <span>&gt;</span></Link></li>
                <li><Link to="#" onClick={closeMenu}>Services <span>&gt;</span></Link></li>
                <li><Link to="#" onClick={closeMenu}>Fabrication <span>&gt;</span></Link></li>
                <li><Link to="#" onClick={closeMenu}>Alimentation <span>&gt;</span></Link></li>
                </ul>
            </nav>
            </div>

        </div>
        </header>
    );
}