import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {lazy, Suspense } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// Import différé pour les pages Category, Artisan et NotFound afin d'améliorer les performances de l'application
const Category = lazy(() => import('./pages/Category')); // Chargement paresseux de la page Category
const Artisan = lazy(() => import('./pages/Artisan')); // Chargement paresseux de la page Artisan
const NotFound = lazy(() => import('./pages/NotFound')); // Chargement paresseux de la page NotFound

// Composant pour revenir en haut de la page lors de la navigation entre les routes
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>

      <ScrollToTop /> 
      
      <Header />

        {/* Suspense est utilisé pour afficher un fallback (chargement) pendant que les composants paresseux sont en cours de chargement */ }
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route path="/" element={<Home />} />
            
            {/* Route dynamique pour la fiche d'un artisan (ex: /artisan/4) */}
            <Route path="/artisan/:id" element={<Artisan />} />

            {/* Route dynamique pour la page d'une catégorie (ex: /categorie/plomberie) */}
            <Route path="/categorie/:category" element={<Category />} />

            {/* Route de secours (fallback) : si l'URL ne correspond à rien, on affiche la 404 */}
            <Route path="*" element={<NotFound />} />

            
          </Routes>
        </Suspense>

      <Footer />
      
    </Router>
  );
}