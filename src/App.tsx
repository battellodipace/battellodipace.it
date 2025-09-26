import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { BattelloPage } from './components/pages/BattelloPage';
import { PresidioPage } from './components/pages/PresidioPage';
import { AdesioniPage } from './components/pages/AdesioniPage';
import { NewsPage } from './components/pages/NewsPage';
import { ContattiPage } from './components/pages/ContattiPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'battello':
        return <BattelloPage onPageChange={setCurrentPage} />;
      case 'angera':
        return <PresidioPage presidio="angera" onPageChange={setCurrentPage} />;
      case 'arona':
        return <PresidioPage presidio="arona" onPageChange={setCurrentPage} />;
      case 'baveno':
        return <PresidioPage presidio="baveno" onPageChange={setCurrentPage} />;
      case 'verbania':
        return <PresidioPage presidio="verbania" onPageChange={setCurrentPage} />;
      case 'adesioni':
        return <AdesioniPage />;
      case 'news':
        return <NewsPage />;
      case 'contatti':
        return <ContattiPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}