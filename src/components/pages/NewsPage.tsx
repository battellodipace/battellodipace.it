import { useState, useEffect } from 'react';
import { Calendar, Download, FileText, Image as ImageIcon, ChevronRight, ExternalLink, Newspaper } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { News, Materiale } from '../../types/news';
import { loadNewsData } from '../../utils/newsLoader';
import pressDataRaw from '../../data/press.json';

// Ordina i dati della stampa dal più recente al più vecchio
const pressData = [...pressDataRaw].sort((a, b) => {
  return new Date(b.data).getTime() - new Date(a.data).getTime();
});
import peaceBackground from 'figma:asset/news.jpeg';

export function NewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [expandedNews, setExpandedNews] = useState<number | null>(null);
  const [currentPressIndex, setCurrentPressIndex] = useState(0);

  useEffect(() => {
    // Carica le news utilizzando il newsLoader
    try {
      const newsData = loadNewsData();
      setNews(newsData);
    } catch (error) {
      // Errore silenzioso in produzione
      setNews([]);
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatPressDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const nextPress = () => {
    setCurrentPressIndex((prev) => (prev + 1) % pressData.length);
  };

  const prevPress = () => {
    setCurrentPressIndex((prev) => (prev - 1 + pressData.length) % pressData.length);
  };

  const getIconForTipo = (tipo: string) => {
    switch (tipo) {
      case 'PDF':
        return <FileText className="h-4 w-4" />;
      case 'PNG':
      case 'JPG':
        return <ImageIcon className="h-4 w-4" />;
      default:
        return <Download className="h-4 w-4" />;
    }
  };

  const getColorForTipo = (tipo: string) => {
    const colors = {
      'PDF': 'bg-red-100 text-red-700',
      'PNG': 'bg-blue-100 text-blue-700',
      'JPG': 'bg-blue-100 text-blue-700',
      'DOC': 'bg-green-100 text-green-700'
    };
    return colors[tipo as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const renderContent = (content: string) => {
    // Sostituisce **testo** con <strong>testo</strong>
    const htmlContent = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return <span dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${peaceBackground})`
        }}
      >
        {/* Overlay per migliorare la leggibilità */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Contenuto */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            News
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
            Tutte le novità sull'evento e i materiali da scaricare
          </p>
        </div>
      </section>

      {/* Timeline News */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {news.length === 0 ? (
            <Card className="p-8 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nessuna news disponibile
              </h3>
              <p className="text-gray-600">
                Le news e gli aggiornamenti saranno pubblicati qui
              </p>
            </Card>
          ) : (
            <div className="space-y-8">
              {news.map((item, index) => (
                <Card key={item.id} id={`news-${item.id}`} className="p-6 hover:shadow-lg transition-shadow">
                  <div>
                    {/* Titolo e badges */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.titolo}
                      </h3>
                      <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                        <Badge className="bg-blue-100 text-blue-700">
                          {item.categoria}
                        </Badge>
                      </div>
                    </div>

                    {/* Data come titolino */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-500">
                        {formatDate(item.data)}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {expandedNews === item.id
                        ? renderContent(item.contenuto)
                        : item.contenuto.length > 150
                          ? renderContent(`${item.contenuto.substring(0, 150)}...`)
                          : renderContent(item.contenuto)
                      }
                    </p>

                    {item.contenuto.length > 150 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedNews(
                          expandedNews === item.id ? null : item.id
                        )}
                        className="mb-4 text-blue-600 hover:text-blue-700 p-0 h-auto"
                      >
                        {expandedNews === item.id ? 'Mostra meno' : 'Leggi tutto'}
                        <ChevronRight className={`h-4 w-4 ml-1 transition-transform ${
                          expandedNews === item.id ? 'rotate-90' : ''
                        }`} />
                      </Button>
                    )}

                    {/* Link esterno */}
                    {item.link && (
                      <div className="mb-4">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>{item.linkText || 'Leggi di più'}</span>
                        </a>
                      </div>
                    )}

                    {/* Materiali */}
                    {item.materiali && item.materiali.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Materiali da scaricare:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.materiali.map((materiale, materialIndex) => (
                            <a
                              key={materialIndex}
                              href={materiale.url}
                              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className={`p-2 rounded ${getColorForTipo(materiale.tipo)}`}>
                                {getIconForTipo(materiale.tipo)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate group-hover:text-blue-600">
                                  {materiale.nome}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {materiale.tipo}
                                </p>
                              </div>
                              <Download className="h-4 w-4 text-gray-400 group-hover:text-blue-500" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Parlano di noi */}
      {pressData.length > 0 && (
        <section className="py-12 bg-gray-50 border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Parlano di noi
              </h2>
              <p className="text-gray-600">
                Gli articoli sulla stampa che hanno parlato del Battello di Pace
              </p>
            </div>

            <div className="relative">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevPress}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
                    disabled={pressData.length <= 1}
                  >
                    <ChevronRight className="h-5 w-5 rotate-180" />
                  </button>

                  <div className="flex-1 mx-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <Newspaper className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {pressData[currentPressIndex].testata}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      {formatPressDate(pressData[currentPressIndex].data)}
                    </p>
                    <a
                      href={pressData[currentPressIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {pressData[currentPressIndex].link.startsWith('http') ? (
                        <>
                          <ExternalLink className="h-4 w-4" />
                          Leggi l'articolo
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          Scarica PDF
                        </>
                      )}
                    </a>
                  </div>

                  <button
                    onClick={nextPress}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
                    disabled={pressData.length <= 1}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {pressData.length > 1 && (
                  <div className="flex justify-center mt-4 gap-2">
                    {pressData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPressIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentPressIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Resta aggiornato
          </h2>
          <p className="text-gray-600 mb-6">
            Seguici sui social media per non perdere nessuna novità sull'evento
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com/battellodipace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
            >
              Instagram @battellodipace
            </a>
            <a
              href="https://facebook.com/battellodipace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Facebook @battellodipace
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}