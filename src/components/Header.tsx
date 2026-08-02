import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoSearchOutline, IoMenuOutline, IoCloseOutline, IoChevronForwardOutline } from 'react-icons/io5';
import artisansData from '../data/datas.json';
import './Header.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    setSearchQuery('');
  };

  // Filtrage intelligent : nom, spécialité ou location (ville)
  const filteredArtisans = searchQuery.trim() === '' ? [] : artisansData.filter((artisan) => {
    const query = searchQuery.toLowerCase();
    const nameMatch = artisan.name.toLowerCase().includes(query);
    const specialtyMatch = artisan.specialty.toLowerCase().includes(query);
    const locationMatch = artisan.location.toLowerCase().includes(query);
    
    return nameMatch || specialtyMatch || locationMatch;
  });

  return (
    <header className="main-header">
      <div className="header-container container">
        
        <div className="header-left">
          <Link to="/" className="logo-link" onClick={closeAll}>
            <img src="/logo.webp" 
            alt="Logo Trouve ton artisan" 
            width="225" height="48" 
            className="logo" />
          </Link>
        </div>

        <nav className="main-nav" aria-label="Navigation principale">
          <ul>
            <li><NavLink to="/categorie/Bâtiment" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Bâtiment</NavLink></li>
            <li><NavLink to="/categorie/Services" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink></li>
            <li><NavLink to="/categorie/Fabrication" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Fabrication</NavLink></li>
            <li><NavLink to="/categorie/Alimentation" onClick={closeAll} className={({ isActive }) => isActive ? "active-link" : ""}>Alimentation</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          {/* BARRE DE RECHERCHE DESKTOP */}
          <div className="search-bar-container" style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Nom, spécialité, ville..." 
              className="search-input" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IoSearchOutline className="search-icon-inside" size={18} />

            {/* LISTE DÉROULANTE DES RÉSULTATS DESKTOP */}
            {searchQuery.trim() !== '' && (
              <div className="search-results-dropdown">
                {filteredArtisans.length > 0 ? (
                  filteredArtisans.map((artisan) => (
                    <Link 
                      key={artisan.id} 
                      to={`/artisan/${artisan.id}`} 
                      className="search-result-item"
                      onClick={closeAll}
                    >
                      <span className="result-name">{artisan.name}</span>
                      <span className="result-details">{artisan.specialty} - {artisan.location}</span>
                    </Link>
                  ))
                ) : (
                  <div className="no-result">Aucun artisan trouvé</div>
                )}
              </div>
            )}
          </div>

          <button className="mobile-search-btn" onClick={toggleSearch} aria-label="Rechercher">
            <IoSearchOutline size={24} />
          </button>
          
          <button className="menu-trigger-btn" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
          </button>
        </div>
      </div>

      {/* RECHERCHE MOBILE OVERLAY */}
      <div className={`mobile-search-overlay ${isSearchOpen ? 'is-open' : ''}`} onClick={toggleSearch}>
        <div className="mobile-search-container-inner" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-search-input-wrapper">
            <input 
              type="text" 
              placeholder="Rechercher par nom, spécialité, ville..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IoSearchOutline className="icon" size={20} />
          </div>

          {/* LISTE DES RÉSULTATS MOBILE */}
          {searchQuery.trim() !== '' && (
            <div className="mobile-search-results">
              {filteredArtisans.length > 0 ? (
                filteredArtisans.map((artisan) => (
                  <Link 
                    key={artisan.id} 
                    to={`/artisan/${artisan.id}`} 
                    className="search-result-item"
                    onClick={closeAll}
                  >
                    <span className="result-name">{artisan.name}</span>
                    <span className="result-details">{artisan.specialty} ({artisan.location})</span>
                  </Link>
                ))
              ) : (
                <div className="no-result">Aucun artisan trouvé</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-navigation" aria-label="Navigation mobile">
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