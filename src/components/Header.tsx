import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoMenuOutline, IoCloseOutline, IoChevronForwardOutline } from 'react-icons/io5';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false); // Ferme la recherche si on ouvre le menu
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false); // Ferme le menu si on ouvre la recherche
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* 1. ZONE GAUCHE : Le Logo (aligné à gauche sur mobile) */}
        <div className="header-left">
          <Link to="/" className="logo-link" onClick={closeAll}>
            <img src="./src/assets/logo.png" alt="Logo Trouve ton artisan" className="logo" />
          </Link>
        </div>

        {/* 2. ZONE CENTRALE : La Navigation Bureau */}
        <nav className="desktop-navigation">
          <ul>
            <li><Link to="#">Bâtiment</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Fabrication</Link></li>
            <li><Link to="#">Alimentation</Link></li>
          </ul>
        </nav>

        {/* 3. ZONE DROITE : Actions */}
        <div className="header-actions">
          
          {/* 💻 Desktop : Champ de recherche complet */}
          <div className="search-bar-container">
            <input 
              type="text" 
              placeholder="Cherchez ..." 
              className="search-input"
              aria-label="Rechercher un artisan"
            />
            <IoSearchOutline className="search-icon-inside" size={18} />
          </div>

          {/* 📱 Mobile : Bouton d'ouverture de la barre de recherche */}
          <button 
            className="mobile-search-btn" 
            onClick={toggleSearch}
            aria-label="Rechercher"
          >
            <IoSearchOutline size={24} />
          </button>
          
          {/* 📱 Mobile : Menu Burger */}
          <button 
            className="menu-trigger-btn" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <IoCloseOutline size={28} />
            ) : (
              <IoMenuOutline size={28} />
            )}
          </button>
        </div>

      </div>

      {/* 📱 Mobile : Barre de recherche déroulante (Maquette Search) */}
      <div className={`mobile-search-bar-container ${isSearchOpen ? 'is-open' : ''}`}>
        <div className="mobile-search-input-wrapper">
          <input type="text" placeholder="Rechercher" autoFocus={isSearchOpen} />
          <IoSearchOutline className="icon" size={20} />
        </div>
      </div>

      {/* 📱 Mobile : Overlay de Navigation */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-navigation">
          <ul>
            <li><Link to="#" onClick={closeAll}>Bâtiment <span><IoChevronForwardOutline /></span></Link></li>
            <li><Link to="#" onClick={closeAll}>Services <span><IoChevronForwardOutline /></span></Link></li>
            <li><Link to="#" onClick={closeAll}>Fabrication <span><IoChevronForwardOutline /></span></Link></li>
            <li><Link to="#" onClick={closeAll}>Alimentation <span><IoChevronForwardOutline /></span></Link></li>
          </ul>
        </nav>
      </div>

    </header>
  );
}