import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { BattelloPage } from './components/pages/BattelloPage';
import { PresidioPage } from './components/pages/PresidioPage';
import { AdesioniPage } from './components/pages/AdesioniPage';
import { NewsPage } from './components/pages/NewsPage';
import { ContattiPage } from './components/pages/ContattiPage';
import { NotFoundPage } from './components/pages/NotFoundPage';

export default function App() {
  // Lista delle pagine valide
  const validPages = [
    'home', 'battello', 'angera', 'arona', 'baveno',
    'verbania-intra', 'adesioni', 'news', 'contatti'
  ];

  // Inizializza la pagina corrente dall'URL
  const getPageFromPath = () => {
    const path = window.location.pathname.slice(1); // Rimuove il primo "/"
    const page = path || 'home';
    // Verifica se la pagina è valida
    return validPages.includes(page) ? page : '404';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromPath());

  // Gestisce i cambi di pagina con aggiornamento URL e scroll
  const handlePageChange = (page: string) => {
    setCurrentPage(page);

    // Aggiorna l'URL nel browser
    const newPath = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', newPath);

    // Scroll al top della pagina
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Gestisce il back/forward del browser
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || getPageFromPath();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'battello':
        return <BattelloPage onPageChange={handlePageChange} />;
      case 'angera':
        return <PresidioPage presidio="angera" onPageChange={handlePageChange} />;
      case 'arona':
        return <PresidioPage presidio="arona" onPageChange={handlePageChange} />;
      case 'baveno':
        return <PresidioPage presidio="baveno" onPageChange={handlePageChange} />;
      case 'verbania-intra':
        return <PresidioPage presidio="verbania" onPageChange={handlePageChange} />;
      case 'adesioni':
        return <AdesioniPage />;
      case 'news':
        return <NewsPage />;
      case 'contatti':
        return <ContattiPage />;
      case '404':
        return <NotFoundPage onPageChange={handlePageChange} />;
      default:
        return <NotFoundPage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}