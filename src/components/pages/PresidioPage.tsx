import { MapPin, Clock, Users, FileText, Download, Calendar, Heart } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { getAdesioniByPresidio } from '../../utils/adesioniDataInline';
import aronaBackground from 'figma:asset/arona.jpeg';
import bavenoBackground from 'figma:asset/baveno.jpeg';
import angeraBackground from 'figma:asset/angera.jpeg';
import verbaniaBackground from 'figma:asset/verbania.jpeg';

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
      backgroundImage: angeraBackground,
      luogo: 'Prato<br/>Zona Imbarcadero',
      durata: '90 minuti',
      note: 'Punto di partenza del viaggio. Si consiglia di arrivare 15 minuti prima dell\'orario di partenza.',
      documento: null // Disponibile a breve
    },
    arona: {
      nome: 'Arona',
      orario: '10:30',
      colore: 'from-orange-500 to-yellow-500',
      backgroundImage: aronaBackground,
      luogo: 'Zona Parlamentino<br/>Lungolago Via Marconi',
      durata: '1 ora',
      note: 'Possibile partecipazione anche per chi non prosegue il viaggio in battello.',
      documento: null
    },
    baveno: {
      nome: 'Baveno',
      orario: '12:00',
      colore: 'from-green-500 to-blue-500',
      backgroundImage: bavenoBackground,
      luogo: 'Piazza Marinai d\'Italia',
      durata: '3 ore',
      note: 'Presidio di sensibilizzazione con pranzo, musica dal vivo, reading, testimonianze dirette, interventi istituzionali. In caso di brutto tempo presso il tendone del chiosco di Villa Fedora.',
      pranzo: 'Polenta con Tapelucco o Gorgonzola, acqua e bicchiere di vino, dolce, 15 euro (incasso devoluto in beneficenza).',
      prenotazioni: 'Prenotazioni con messaggio whatsapp al numero 345 793 6361 o all\'ufficio Turismo 0323/924632.',
      collaborazioni: 'Con la collaborazione delle Associazioni, Comitati di Baveno, della Parrocchia Gervaso e Protaso e con il patrocinio del Comune di Baveno.',
      intrattenimento: 'Ad intrattenere il Corpo Musicale di Baveno e Baveno Web radio.',
      documento: null
    },
    verbania: {
      nome: 'Verbania Intra',
      orario: '15:00',
      colore: 'from-blue-500 to-purple-500',
      backgroundImage: verbaniaBackground,
      luogo: 'Palazzo Flaim',
      durata: '2 ore',
      note: 'Partenza corteo verso villa Maioni (Biblioteca). Intervento di Raffaele Crocco (Direttore dell\'Atlante delle guerre e dei conflitti nel mondo), testimonianza Giuseppe Medici Senza Frontiere, testimonianza di Don Angelo Nigro, "Canti di pace" Coro San Martino di Vignone.',
      documento: null
    }
  };

  const data = presidioData[presidio];
  const presidioNumber = Object.keys(presidioData).indexOf(presidio) + 1;

  // Ottieni le adesioni reali per questo presidio
  const associazioniAderenti = getAdesioniByPresidio(presidio);

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
                {presidio === 'baveno' ? (
                  <div className="space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Attività</h3>
                      <p className="text-green-700">{data.note}</p>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-yellow-800 mb-2">Pranzo</h3>
                      <p className="text-yellow-700">{data.pranzo}</p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Prenotazioni</h3>
                      <p className="text-blue-700">{data.prenotazioni}</p>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-purple-800 mb-2">Intrattenimento</h3>
                      <p className="text-purple-700">{data.intrattenimento}</p>
                    </div>

                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Collaborazioni</h3>
                      <p className="text-gray-700">{data.collaborazioni}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <p className="text-blue-800 text-lg text-center">
                      Ulteriori dettagli saranno disponibili a breve
                    </p>
                  </div>
                )}
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Hanno aderito
                  </h2>
                </div>
                {associazioniAderenti.length > 0 ? (
                  <div className="space-y-2">
                    {associazioniAderenti.map((adesione) => (
                      <div key={adesione.id} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                        <p className="text-gray-700">{adesione.nome}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500">Nessuna adesione ancora registrata per questo presidio</p>
                  </div>
                )}
              </Card>
            </div>

            {/* Sidebar Informazioni */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Dettagli</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Orario</p>
                      <p className="font-semibold">{data.orario}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Luogo</p>
                      <p className="font-semibold" dangerouslySetInnerHTML={{ __html: data.luogo }}></p>
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
                      onClick={() => onPageChange(key === 'verbania' ? 'verbania-intra' : key)}
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