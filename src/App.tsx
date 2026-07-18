import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artisan from './pages/Artisan';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Route dynamique pour la fiche d'un artisan (ex: /artisan/4) */}
        <Route path="/artisan/:id" element={<Artisan />} />
        
        {/* Route de secours (fallback) : si l'URL ne correspond à rien, on affiche la 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}