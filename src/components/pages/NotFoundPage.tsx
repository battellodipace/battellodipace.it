import { Home } from 'lucide-react';
import { Button } from '../ui/button';
import notFoundBg from '../../assets/not-found.jpeg';

interface NotFoundPageProps {
  onPageChange: (page: string) => void;
}

export function NotFoundPage({ onPageChange }: NotFoundPageProps) {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{
        backgroundImage: `url(${notFoundBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay scuro per leggibilità */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenuto senza box */}
      <div className="relative z-10 w-full mx-auto text-center">
        <div className="mb-8">
          <h1
            style={{
              fontSize: '100px',
              lineHeight: '1',
              fontWeight: '900',
              color: 'white',
              textShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
            className="font-black text-white mb-4"
          >404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Pagina non trovata
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 max-w-md mx-auto font-medium drop-shadow-lg">
            La pagina che stai cercando non esiste o potrebbe essere stata spostata.
          </p>
        </div>

        <Button
          onClick={() => onPageChange('home')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
        >
          <Home className="h-6 w-6 mr-2" />
          Torna alla Home
        </Button>
      </div>
    </section>
  );
}