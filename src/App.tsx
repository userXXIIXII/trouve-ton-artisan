import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Artisan from './pages/Artisan';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      
      <Header />

      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Route dynamique pour la fiche d'un artisan (ex: /artisan/4) */}
        <Route path="/artisan/:id" element={<Artisan />} />
        
        {/* Route de secours (fallback) : si l'URL ne correspond à rien, on affiche la 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      
    </Router>
  );
}