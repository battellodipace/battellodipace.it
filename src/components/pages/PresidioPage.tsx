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
      luogo: 'Imbarcadero di Angera<br/>Fine Viale della Repubblica verso Piazza della Vittoria',
      durata: '90 minuti',
      attivo: 'Il presidio sarà attivo dalle ore 9:30 alle 11:00 nei pressi dell\'imbarcadero di Angera, fine viale della Repubblica verso piazza della Vittoria.',
      territorio: 'Nel presidio di Angera sarà coinvolto il territorio intorno Lago Maggiore da Castelletto Ticino fino a Luino.',
      attivita: 'Interventi, testimonianze, letture, musica dal vivo con Canto per la Palestina, danze popolari, raccolta firme petizioni, raccolta fondi di solidarietà.',
      obiettivi: 'Insieme per denunciare la guerra, il riarmo, l\'economia armata, per chiedere Pace e Giustizia per Gaza e in ogni luogo di conflitto. Insieme per imparare a costruire Pace nelle scelte di ogni giorno.',
      programma: {
        musica: 'Musica dal vivo con Gruppo Farfalhiña "Canto per la Palestina"',
        animazione: 'Animazione di danze dal mondo "Danzare la Pace" con Arcadinoe Teatro/ Sorrisi senza Confini',
        testimonianze: [
          'Don Renato Sacco Pax Christi, riarmo e disarmo',
          'Emergency a Gaza e nel Mondo',
          'Scuole di Angera: il Kaki di Nagasaki',
          'Letture: Poesie, dichiarazioni di obiettori refusnik'
        ],
        azioni: [
          'Legge 185 raccolta firme',
          'Campagna BDS, boicottaggi',
          'Local March for Gaza, raccolta firme',
          'Appello Marcia Perugia Assisi 2025'
        ]
      },
      documento: '/assets/presidi/angera.pdf'
    },
    arona: {
      nome: 'Arona',
      orario: '10:45',
      colore: 'from-orange-500 to-yellow-500',
      backgroundImage: aronaBackground,
      luogo: 'Piazza del Popolo',
      durata: '2 ore',
      ritrovo: 'Ritrovo ore 10:15 Piazza del Popolo<br/>Arrivo del battello ore 10:45',
      riflessione: 'Viviamo in un mondo pieno di contraddizioni e ingiustizie. Le vittime delle guerre ci chiamano ad agire. Da soli non cambiamo il mondo, ma possiamo farlo insieme, cambiando noi stessi e le nostre scelte. Come?',
      relatori: [
        { nome: 'SILVIA ZANI', organizzazione: 'EMERGENCY' },
        { nome: 'SERGIO CAVALLARO', organizzazione: 'AUSER (ambulatorio Borgomanero)' },
        { nome: 'FABIO PISONI', organizzazione: 'BANCA ETICA' }
      ],
      contributi: [
        'Francesca Amat e Manuel Consigli di ABBRACCIARTI',
        'Coro scuola secondaria 1° grado Giovanni XXIII',
        'Filarmonica Aronese',
        'ANPI',
        'Città di Dio',
        'Movimento Federalista Europeo',
        'Insieme si Può',
        'Oratorio San Carlo',
        'Medici Senza Frontiere'
      ],
      documento: '/assets/presidi/arona.pdf'
    },
    baveno: {
      nome: 'Baveno',
      orario: '12:00',
      colore: 'from-green-500 to-blue-500',
      backgroundImage: bavenoBackground,
      luogo: 'Piazza Marinai d\'Italia',
      durata: '3 ore',
      note: 'Presidio di sensibilizzazione con pranzo, musica dal vivo, reading, testimonianze dirette, interventi istituzionali.',
      maltempo: 'In caso di brutto tempo presso il tendone del chiosco di Villa Fedora.',
      pranzo: 'Polenta con tapelucco o gorgonzola, acqua e bicchiere di vino, dolce, 15 euro (incasso devoluto in beneficenza).',
      prenotazioni: 'Prenotazioni con messaggio whatsapp al numero 345 793 6361 o all\'ufficio Turismo 0323/924632.',
      collaborazioni: 'Con la collaborazione delle Associazioni, Comitati di Baveno, della Parrocchia Gervaso e Protaso e con il patrocinio del Comune di Baveno.',
      intrattenimento: 'Ad intrattenere il Corpo Musicale di Baveno e Baveno Web radio.',
      documento: '/assets/presidi/baveno.pdf'
    },
    verbania: {
      nome: 'Verbania Intra',
      orario: '15:00',
      colore: 'from-blue-500 to-purple-500',
      backgroundImage: verbaniaBackground,
      luogo: 'Porto di Intra<br/>Palazzo Flaim',
      durata: '2 ore',
      accoglienza: 'Accoglienza battello e raduno al Palazzo Flaim',
      corteo: 'Partenza corteo verso Villa Maioni (Biblioteca)',
      interventi: [
        { nome: 'Raffaele Crocco', ruolo: 'Direttore dell\'Atlante delle guerre e dei conflitti nel mondo' },
        { nome: 'Don Angelo Nigro', ruolo: 'Testimonianza' },
        { nome: 'Coro San Martino di Vignone', ruolo: 'Canti di pace' }
      ],
      documento: '/assets/presidi/verbania/verbania-intra.pdf'
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
                {presidio === 'angera' ? (
                  <div className="space-y-4">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-red-800 mb-2">Orari e Luogo</h3>
                      <p className="text-red-700">{data.attivo}</p>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-orange-800 mb-2">Territorio Coinvolto</h3>
                      <p className="text-orange-700">{data.territorio}</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Attività</h3>
                      <p className="text-gray-900">{data.attivita}</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Obiettivi</h3>
                      <p className="text-gray-900">{data.obiettivi}</p>
                    </div>
                  </div>
                ) : presidio === 'baveno' ? (
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

                    <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-gray-700 text-sm italic">{data.maltempo}</p>
                    </div>
                  </div>
                ) : presidio === 'verbania' ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Accoglienza</h3>
                      <p className="text-blue-700">{data.accoglienza}</p>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-purple-800 mb-2">Corteo</h3>
                      <p className="text-purple-700">{data.corteo}</p>
                    </div>

                    <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-indigo-800 mb-2">Interventi e Testimonianze</h3>
                      <div className="space-y-3">
                        {data.interventi?.map((intervento, index) => (
                          <div key={index} className="text-indigo-700">
                            <p className="font-semibold">{intervento.nome}</p>
                            <p className="text-sm">{intervento.ruolo}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : presidio === 'arona' ? (
                  <div className="space-y-4">
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-orange-800 mb-2">Ritrovo</h3>
                      <p className="text-orange-700" dangerouslySetInnerHTML={{ __html: data.ritrovo }}></p>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-yellow-800 mb-2">Riflessione</h3>
                      <p className="text-yellow-700">{data.riflessione}</p>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-orange-800 mb-2">Ne parliamo con</h3>
                      <div className="space-y-3">
                        {data.relatori?.map((relatore, index) => (
                          <div key={index} className="text-orange-700">
                            <p className="font-semibold">{relatore.nome}</p>
                            <p className="text-sm">{relatore.organizzazione}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-yellow-800 mb-2">Contributi e interventi di</h3>
                      <div className="space-y-2 text-yellow-700">
                        {data.contributi?.map((contributo, index) => (
                          <div key={index} className="flex">
                            <span className="mr-2 flex-shrink-0">•</span>
                            <span>{contributo}</span>
                          </div>
                        ))}
                      </div>
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

              {presidio === 'angera' && data.programma && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Scaletta</h2>
                  <div className="space-y-4">
                    {/* Musica e Animazione */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Intrattenimento</h3>
                      <div className="space-y-2 text-blue-700">
                        <div className="flex">
                          <span className="mr-2 flex-shrink-0">•</span>
                          <span>{data.programma.musica}</span>
                        </div>
                        <div className="flex">
                          <span className="mr-2 flex-shrink-0">•</span>
                          <span>{data.programma.animazione}</span>
                        </div>
                      </div>
                    </div>

                    {/* Saluti */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-blue-800">Saluti Istituzionali</h3>
                    </div>

                    {/* Testimonianze */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Testimonianze</h3>
                      <div className="space-y-2 text-blue-700">
                        {data.programma.testimonianze.map((testimonianza, index) => (
                          <div key={index} className="flex">
                            <span className="mr-2 flex-shrink-0">•</span>
                            <span>{testimonianza}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Azioni per la Pace */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Che fare per scegliere la Pace</h3>
                      <div className="space-y-2 text-blue-700">
                        {data.programma.azioni.map((azione, index) => (
                          <div key={index} className="flex">
                            <span className="mr-2 flex-shrink-0">•</span>
                            <span>{azione}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Nota maltempo */}
                    <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-gray-700 text-sm italic">
                        In caso di forte pioggia la manifestazione sarà in sala consiliare piazza Repubblica, 14 angolo via Cavour dietro il comune.
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {presidio === 'angera' && (
                <Card className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Approfondimenti
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Scarica le schede di presentazione dei gruppi che si esibiranno al presidio
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Canto per la Palestina</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Gruppo Farfahiina - Musica dal vivo con chitarra e 2 voci cantanti
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-white hover:bg-red-50"
                        onClick={() => window.open('/assets/presidi/angera/scheda_farfahiina_canto_per_la_palestina_per_angera.pdf', '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Scarica Scheda Farfahiina
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Danziamo la Pace</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Arca di Noe Teatro / Sorrisi senza Confini - Danze popolari dal mondo
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-white hover:bg-red-50"
                        onClick={() => window.open('/assets/presidi/angera/danziamo_la_pace.pdf', '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Scarica Scheda Danze Popolari
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              {presidio === 'verbania' && (
                <Card className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Informazioni Pratiche
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Scarica le mappe e le informazioni utili per raggiungere il presidio
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex gap-4">
                        <img
                          src="/assets/presidi/verbania/parcheggi-consigliati.jpeg"
                          alt="Parcheggi consigliati"
                          className="w-12 h-12 object-cover rounded cursor-pointer flex-shrink-0"
                          onClick={() => window.open('/assets/presidi/verbania/parcheggi-consigliati.pdf', '_blank')}
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">Parcheggi consigliati</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            Dove parcheggiare per raggiungere comodamente il porto di Intra
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-white hover:bg-blue-50"
                            onClick={() => window.open('/assets/presidi/verbania/parcheggi-consigliati.pdf', '_blank')}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Scarica mappa parcheggi
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex gap-4">
                        <img
                          src="/assets/presidi/verbania/approdo-battello.jpeg"
                          alt="Approdo del battello"
                          className="w-12 h-12 object-cover rounded cursor-pointer flex-shrink-0"
                          onClick={() => window.open('/assets/presidi/verbania/approdo-battello.pdf', '_blank')}
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">Approdo del battello</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            Punto di arrivo del battello al porto di Intra
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-white hover:bg-blue-50"
                            onClick={() => window.open('/assets/presidi/verbania/approdo-battello.pdf', '_blank')}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Scarica mappa approdo
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex gap-4">
                        <img
                          src="/assets/presidi/verbania/percorso-manifestazione.jpeg"
                          alt="Percorso manifestazione"
                          className="w-12 h-12 object-cover rounded cursor-pointer flex-shrink-0"
                          onClick={() => window.open('/assets/presidi/verbania/percorso-manifestazione.pdf', '_blank')}
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">Percorso manifestazione</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            Itinerario del corteo dal porto a Villa Maioni
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-white hover:bg-blue-50"
                            onClick={() => window.open('/assets/presidi/verbania/percorso-manifestazione.pdf', '_blank')}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Scarica percorso
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )}

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
                  <h3 className="font-semibold text-gray-900">Documenti</h3>
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
                      Locandina Presidio
                    </Button>
                  ) : (
                    <div className="flex items-center justify-center space-x-2 py-3 px-4 bg-gray-50 rounded-lg">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Disponibile a breve</span>
                    </div>
                  )}

                  {presidio === 'angera' && (
                    <>
                      <div className="border-t pt-4 mt-1">
                        <p className="text-xs text-gray-500 mb-2 font-semibold">Schede artisti</p>
                        <div className="space-y-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs"
                            onClick={() => window.open('/assets/presidi/angera/scheda_farfahiina_canto_per_la_palestina_per_angera.pdf', '_blank')}
                          >
                            <Download className="h-3 w-3 mr-2" />
                            Gruppo Farfahiina
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs"
                            onClick={() => window.open('/assets/presidi/angera/danziamo_la_pace.pdf', '_blank')}
                          >
                            <Download className="h-3 w-3 mr-2" />
                            Danze Popolari
                          </Button>
                        </div>
                      </div>
                    </>
                  )}

                  {presidio === 'verbania' && (
                    <>
                      <div className="border-t pt-4 mt-1">
                        <p className="text-xs text-gray-500 mb-2 font-semibold">Informazioni pratiche</p>
                        <div className="space-y-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs"
                            onClick={() => window.open('/assets/presidi/verbania/parcheggi-consigliati.pdf', '_blank')}
                          >
                            <Download className="h-3 w-3 mr-2" />
                            Parcheggi consigliati
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs"
                            onClick={() => window.open('/assets/presidi/verbania/approdo-battello.pdf', '_blank')}
                          >
                            <Download className="h-3 w-3 mr-2" />
                            Approdo del battello
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs"
                            onClick={() => window.open('/assets/presidi/verbania/percorso-manifestazione.pdf', '_blank')}
                          >
                            <Download className="h-3 w-3 mr-2" />
                            Percorso manifestazione
                          </Button>
                        </div>
                      </div>
                    </>
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