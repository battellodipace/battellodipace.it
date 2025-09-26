import { MapPin, Clock, Users, FileText, Download, Calendar, Heart } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface PresidioPageProps {
  presidio: 'angera' | 'arona' | 'baveno' | 'verbania';
  onPageChange: (page: string) => void;
}

export function PresidioPage({ presidio, onPageChange }: PresidioPageProps) {
  const presidioData = {
    angera: {
      nome: 'Angera',
      orario: '9:30',
      colore: 'from-red-500 to-orange-500',
      backgroundImage: 'https://images.unsplash.com/photo-1695882812981-3d3708685f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmdlcmElMjBsYWtlJTIwbWFnZ2lvcmUlMjBjYXN0bGUlMjB2aWV3fGVufDF8fHx8MTc1ODg4NzIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      luogo: 'Porto di Angera',
      durata: '45 minuti',
      note: 'Punto di partenza del viaggio. Si consiglia di arrivare 15 minuti prima dell\'orario di partenza.',
      documento: null, // Disponibile a breve
      associazioni: [
        'Comune di Angera',
        'Pro Loco Angera',
        'Associazione Culturale Rocca di Angera'
      ]
    },
    arona: {
      nome: 'Arona',
      orario: '10:30',
      colore: 'from-orange-500 to-yellow-500',
      backgroundImage: 'https://images.unsplash.com/photo-1659380247347-ff633f18581c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcm9uYSUyMGxha2UlMjBtYWdnaW9yZSUyMHNhbiUyMGNhcmxvfGVufDF8fHx8MTc1ODg4NzIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      luogo: 'Lungolago di Arona',
      durata: '1 ora',
      note: 'Possibile partecipazione anche per chi non prosegue il viaggio in battello.',
      documento: '/documents/presidios/arona/programma-dettagliato.pdf',
      associazioni: [
        'Comune di Arona',
        'Emergency Gruppo Arona',
        'ANPI Sezione Arona',
        'Comitato Pace e Solidarietà'
      ]
    },
    baveno: {
      nome: 'Baveno',
      orario: '12:00',
      colore: 'from-green-500 to-blue-500',
      backgroundImage: 'https://images.unsplash.com/photo-1689498735895-9eacfeeff59d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXZlbm8lMjBsYWtlJTIwbWFnZ2lvcmUlMjBpc29sZSUyMGJvcnJvbWVlfGVufDF8fHx8MTc1ODg4NzIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      luogo: 'Piazza della Chiesa - Baveno',
      durata: '2 ore',
      note: 'Tappa più lunga con possibilità di pranzo. Spazi dedicati alle famiglie.',
      documento: '/documents/presidios/baveno/info-dettagliate.pdf',
      associazioni: [
        'Comune di Baveno',
        'Medici Senza Frontiere Verbano',
        'Gruppo Scout Baveno',
        'Parrocchia San Gervasio e Protasio',
        'Centro Sociale Anziani'
      ]
    },
    verbania: {
      nome: 'Verbania Intra',
      orario: '15:00',
      colore: 'from-blue-500 to-purple-500',
      backgroundImage: 'https://images.unsplash.com/photo-1591066504930-a1f68573e1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWZXJiYW5pYSUyMGludHJhJTIwbGFrZSUyMG1hZ2dpb3JlJTIwcG9ydHxlbnwxfHx8fDE3NTg4ODcyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      luogo: 'Porto di Verbania Intra',
      durata: '2 ore',
      note: 'Momento conclusivo con festa e musica. Aperto a tutta la cittadinanza.',
      documento: '/documents/presidios/verbania/programma-finale.pdf',
      associazioni: [
        'Città di Verbania',
        'Emergency Verbano Cusio Ossola',
        'CGIL Verbania',
        'Movimento per la Pace',
        'Rete delle Associazioni del VCO',
        'Banda Musicale Città di Verbania'
      ]
    }
  };

  const data = presidioData[presidio];
  const presidioNumber = Object.keys(presidioData).indexOf(presidio) + 1;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Presidio con Background */}
      <section 
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 text-sm bg-white/90 text-blue-700">
              Presidio {presidioNumber} di 4
            </Badge>
            <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${data.colore} flex items-center justify-center mb-6`}>
              <MapPin className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {data.nome}
            </h1>
            <p className="text-2xl text-blue-200 font-semibold mb-4">
              ore {data.orario}
            </p>
          </div>
        </div>
      </section>

      {/* Dettagli Presidio */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informazioni Principali */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Programma del Presidio
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <p className="text-blue-800 text-lg text-center">
                    Ulteriori dettagli saranno disponibili a breve
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Hanno aderito
                  </h2>
                </div>
                <div className="space-y-2">
                  {data.associazioni.map((associazione, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                      <p className="text-gray-700">{associazione}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar Informazioni */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Dettagli</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Orario</p>
                      <p className="font-semibold">{data.orario}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Luogo</p>
                      <p className="font-semibold">{data.luogo}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Durata</p>
                      <p className="font-semibold">{data.durata}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Box Locandina */}
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Locandina Evento</h3>
                </div>
                <div className="space-y-3">
                  {data.documento ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(data.documento, '_blank')}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Scarica Info Dettagliate
                    </Button>
                  ) : (
                    <div className="flex items-center justify-center space-x-2 py-3 px-4 bg-gray-50 rounded-lg">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Disponibile a breve</span>
                    </div>
                  )}
                </div>
              </Card>

              {/* Navigazione Altri Presidi */}
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Altri Presidi</h3>
                <div className="space-y-2">
                  {Object.entries(presidioData).map(([key, value]) => (
                    <Button
                      key={key}
                      variant={key === presidio ? "default" : "ghost"}
                      className={`w-full justify-between ${
                        key === presidio 
                          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() => onPageChange(key)}
                      disabled={key === presidio}
                    >
                      <span>{value.nome}</span>
                      <span className="text-sm">{value.orario}</span>
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}