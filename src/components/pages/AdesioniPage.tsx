import { useState, useEffect } from 'react';
import { Users, MapPin } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { getAdesioni, getPresidi, getPresidioName, type Adesione } from '../../utils/adesioniDataInline';
import peaceBackground from 'figma:asset/adesioni.jpeg';

export function AdesioniPage() {
  const [adesioni, setAdesioni] = useState<Adesione[]>([]);
  const [filteredAdesioni, setFilteredAdesioni] = useState<Adesione[]>([]);
  const [selectedPresidio, setSelectedPresidio] = useState<string>('');

  useEffect(() => {
    const sortedData = getAdesioni();
    setAdesioni(sortedData);
    setFilteredAdesioni(sortedData);
  }, []);

  useEffect(() => {
    let filtered = adesioni;

    if (selectedPresidio) {
      filtered = filtered.filter(adesione => adesione.presidio === selectedPresidio);
    }

    setFilteredAdesioni(filtered);
  }, [selectedPresidio, adesioni]);

  const presidi = getPresidi();

  const getPresidioColor = (presidio: string) => {
    const colors = {
      'angera': 'bg-red-100 text-red-700 border-red-200',
      'arona': 'bg-orange-100 text-orange-700 border-orange-200',
      'baveno': 'bg-green-100 text-green-700 border-green-200',
      'verbania': 'bg-blue-100 text-blue-700 border-blue-200'
    };
    return colors[presidio as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200';
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
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Adesioni
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
            Enti, organizzazioni e associazioni che hanno aderito al Battello di Pace 2025
          </p>
        </div>
      </section>

      {/* Filtri per Presidio */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedPresidio('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedPresidio === '' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Tutti i Presidi
            </button>
            {presidi.map(presidio => (
              <button
                key={presidio}
                onClick={() => setSelectedPresidio(selectedPresidio === presidio ? '' : presidio)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
                  selectedPresidio === presidio 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <MapPin className="h-4 w-4" />
                <span>{getPresidioName(presidio)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista Adesioni */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAdesioni.length === 0 ? (
            <Card className="p-8 text-center">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nessuna adesione trovata
              </h3>
              <p className="text-gray-600">
                {selectedPresidio 
                  ? `Nessuna adesione per il presidio di ${getPresidioName(selectedPresidio)}`
                  : 'Le adesioni saranno visualizzate qui quando disponibili'
                }
              </p>
            </Card>
          ) : (
            <div className="space-y-3">
              {filteredAdesioni.map((adesione, index) => (
                <Card key={`adesione-${adesione.nome}-${index}`} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      {/* Nome dell'associazione */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {adesione.nome}
                        </h3>
                      </div>
                    </div>

                    {/* Badge del presidio */}
                    <div className="flex-shrink-0">
                      <Badge className={`${getPresidioColor(adesione.presidio)} border font-medium`}>
                        <MapPin className="h-3 w-3 mr-1" />
                        {getPresidioName(adesione.presidio)}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">
              Vuoi aderire anche tu?
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Unisciti a noi nel promuovere la pace e la solidarietà
            </p>
            <div className="bg-white rounded-lg p-6 inline-block">
              <p className="text-gray-900 mb-2">Per aderire all'evento contattaci:</p>
              <p className="text-blue-600 font-semibold">info@battellodipace.it</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}