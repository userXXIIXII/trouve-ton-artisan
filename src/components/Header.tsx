import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoSearchOutline, IoMenuOutline, IoCloseOutline, IoChevronForwardOutline } from 'react-icons/io5';
import './Header.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-container container">
        
        <div className="header-left">
          <Link to="/" className="logo-link" onClick={closeAll}>
            <img src="/logo.png" alt="Logo Trouve ton artisan" className="logo" />
          </Link>
        </div>

        <nav className="main-nav">
          <ul>
            <li><NavLink to="/categorie/Bâtiment" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Bâtiment</NavLink></li>
            <li><NavLink to="/categorie/Services" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink></li>
            <li><NavLink to="/categorie/Fabrication" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Fabrication</NavLink></li>
            <li><NavLink to="/categorie/Alimentation" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Alimentation</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-bar-container">
            <input type="text" placeholder="Cherchez ..." className="search-input" />
            <IoSearchOutline className="search-icon-inside" size={18} />
          </div>

          <button className="mobile-search-btn" onClick={toggleSearch} aria-label="Rechercher">
            <IoSearchOutline size={24} />
          </button>
          
          <button className="menu-trigger-btn" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
          </button>
        </div>
      </div>

      <div className={`mobile-search-overlay ${isSearchOpen ? 'is-open' : ''}`} onClick={toggleSearch}>
        <div className="mobile-search-container-inner" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-search-input-wrapper">
            <input type="text" placeholder="Rechercher" />
            <IoSearchOutline className="icon" size={20} />
          </div>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-navigation">
          <ul>
            <li><NavLink to="/categorie/Bâtiment" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Bâtiment <span><IoChevronForwardOutline /></span></NavLink></li>
            <li><NavLink to="/categorie/Services" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Services <span><IoChevronForwardOutline /></span></NavLink></li>
            <li><NavLink to="/categorie/Fabrication" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Fabrication <span><IoChevronForwardOutline /></span></NavLink></li>
            <li><NavLink to="/categorie/Alimentation" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Alimentation <span><IoChevronForwardOutline /></span></NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}