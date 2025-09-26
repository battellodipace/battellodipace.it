import { useState, useEffect } from 'react';
import { Ship, Heart, Users, Clock, BookOpen, MessageCircle, Calendar, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { News } from '../../types/news';
import { getLatestNews } from '../../utils/newsLoader';
import logoImage from 'figma:asset/battellodipace.png';
import heroBackground from 'figma:asset/barchette.jpeg';
import doveImage from 'figma:asset/colomba.png';
import emergencyLogo from 'figma:asset/emergency.png';
import msfLogo from 'figma:asset/msf.png';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [latestNews, setLatestNews] = useState<News[]>([]);
  
  const tappe = [
    { nome: 'Angera', orario: '9:30', colore: 'from-red-500 to-orange-500' },
    { nome: 'Arona', orario: '10:30', colore: 'from-orange-500 to-yellow-500' },
    { nome: 'Baveno', orario: '12:00', colore: 'from-green-500 to-blue-500' },
    { nome: 'Verbania Intra', orario: '15:00', colore: 'from-blue-500 to-purple-500' }
  ];

  useEffect(() => {
    // Carica le ultime 5 news utilizzando il newsLoader
    try {
      const latestNewsData = getLatestNews(5);
      setLatestNews(latestNewsData);
      setCurrentSlide(0); // Reset slide position
    } catch (error) {
      // Errore silenzioso in produzione
      setLatestNews([]);
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'short'
    });
  };

  const getCategoryColor = (categoria: string) => {
    const colors = {
      'Press': 'bg-blue-100 text-blue-700',
      'Adesioni': 'bg-green-100 text-green-700',
      'Organizzazione': 'bg-purple-100 text-purple-700',
      'Materiali': 'bg-orange-100 text-orange-700',
      'Raccolta Fondi': 'bg-red-100 text-red-700'
    };
    return colors[categoria as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const nextSlide = () => {
    if (latestNews && latestNews.length > 0) {
      setCurrentSlide((prev) => 
        prev === latestNews.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (latestNews && latestNews.length > 0) {
      setCurrentSlide((prev) => 
        prev === 0 ? latestNews.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="mb-6">
                <img 
                  src={doveImage} 
                  alt="Colomba della Pace Arcobaleno" 
                  className="w-32 h-32 mx-auto object-contain drop-shadow-lg"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animated-rainbow">
                BATTELLO DI PACE
              </h1>
              <p className="text-2xl md:text-3xl text-white font-semibold mb-2 drop-shadow-lg">
                sabato 11 ottobre 2025
              </p>
              <p className="text-lg text-white max-w-3xl mx-auto drop-shadow-lg">
                Unisciti al Battello di Pace che solca le acque del Lago Maggiore per unire territori e coscienze
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById('tappe-section')?.scrollIntoView({ behavior: 'smooth' })} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-8 py-3 text-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
              >
                Scopri le Tappe
              </Button>
              <Button 
                onClick={() => onPageChange('contatti')} 
                className="bg-white/90 text-blue-600 hover:bg-white border-2 border-white px-8 py-3 text-lg shadow-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105"
              >
                Segui l'evento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione Evento */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4 Tappe - 4 Presìdi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ad ogni tappa un presidio. Ad ogni presidio il nostro impegno: insieme per denunciare il riarmo, la guerra e l'economia armata. Per chiedere il cessate il fuoco a Gaza e in ogni luogo di guerra. Per chiedere giustizia e imparare a costruire Pace nelle scelte di ogni giorno.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700">Reading teatrali, testimonianze dirette e musica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Riflessioni condivise per coinvolgere la cittadinanza</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="text-center">
                  <img 
                    src={doveImage} 
                    alt="Colomba della Pace" 
                    className="h-14 w-14 object-contain mx-auto mb-2"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Raccolta Fondi
                  </h3>
                  <p className="text-gray-600 mb-[30px] mt-[0px] mr-[0px] ml-[0px]">
                    Si organizzeranno raccolte fondi e l'intero ricavato sarà devoluto a Emergency e Medici Senza Frontiere.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <img 
                      src={emergencyLogo} 
                      alt="Emergency" 
                      className="h-10 object-contain"
                    />
                    <img 
                      src={msfLogo} 
                      alt="Medici Senza Frontiere" 
                      className="h-12 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tappe */}
      <section id="tappe-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Le Tappe del Viaggio</h2>
            <p className="text-lg text-gray-600">Quattro momenti di incontro, riflessione e impegno</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tappe.map((tappa, index) => (
              <Card key={tappa.nome} className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => {
                const pageName = tappa.nome === 'Verbania Intra' ? 'verbania-intra' : tappa.nome.toLowerCase().replace(' ', '');
                onPageChange(pageName);
              }}>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${tappa.colore} flex items-center justify-center mb-4`}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tappa.nome}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">h. {tappa.orario}</p>
                  <p className="text-sm text-gray-500">Presidio {index + 1}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Slide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">News</h2>
            <p className="text-lg text-gray-600">Ultimi aggiornamenti sulla manifestazione</p>
          </div>

          {latestNews && latestNews.length > 0 && (
            <div className="relative">
              {/* Slide Container */}
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${Math.min(currentSlide, latestNews.length - 1) * 100}%)` }}
                >
                  {latestNews.map((news, index) => (
                    <div key={news.id} className="w-full flex-shrink-0">
                      <Card className="mx-4 p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <Calendar className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex items-center space-x-3">
                              <p className="text-base font-medium text-gray-700">{formatDate(news.data)}</p>
                              <Badge className={`${getCategoryColor(news.categoria)} px-3 py-1`}>
                                {news.categoria}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <h3
                          className="text-2xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors"
                          onClick={() => {
                            onPageChange('news');
                            // Aspetta che la pagina sia cambiata, poi scrolla alla news specifica
                            setTimeout(() => {
                              const element = document.getElementById(`news-${news.id}`);
                              if (element) {
                                const headerHeight = 80; // Altezza approssimativa dell'header
                                const elementTop = element.offsetTop - headerHeight;
                                window.scrollTo({ top: elementTop, behavior: 'smooth' });
                              }
                            }, 300); // Aumentato il timeout per aspettare lo scroll al top
                          }}
                        >
                          {news.titolo}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {news.contenuto && news.contenuto.length > 200 
                            ? `${news.contenuto.substring(0, 200)}...` 
                            : news.contenuto || ''
                          }
                        </p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {latestNews.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {latestNews.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {latestNews.map((news, index) => (
                    <button
                      key={`dot-${news.id}-${index}`}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide 
                          ? 'bg-blue-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* CTA per vedere tutte le news */}
          <div className="text-center mt-6">
            <Button
              onClick={() => onPageChange('news')}
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Vedi tutte le news
              <ExternalLink className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Partecipa al Battello di Pace
          </h2>
          <p className="text-xl mb-8">
            Insieme possiamo fare la differenza.<br />Partecipa all'evento e contribuisci a costruire un mondo di pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onPageChange('adesioni')} 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
            >
              Hanno aderito
            </Button>
            <Button 
              onClick={() => window.open('https://instagram.com/artigianidipace', '_blank')} 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Resta in contatto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}