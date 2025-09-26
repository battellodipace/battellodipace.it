import { Anchor, Users, Heart, Calendar, MapPin, Clock, Ship, Target, HelpCircle, ExternalLink } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import logoImage from 'figma:asset/battellodipace.png';
import doveImage from 'figma:asset/colomba.png';
import emergencyLogo from 'figma:asset/emergency.png';
import msfLogo from 'figma:asset/msf.png';
import battelloBackground from 'figma:asset/battello.jpeg';

interface BattelloPageProps {
  onPageChange: (page: string) => void;
}

export function BattelloPage({ onPageChange }: BattelloPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${battelloBackground})` }}
      >
        {/* Overlay scuro per migliorare la leggibilità */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Contenuto */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-6">
              <img 
                src={logoImage} 
                alt="Battello di Pace 2025" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="battello-gradient">IL BATTELLO</span>{' '}
              <span className="di-pace-gradient">DI PACE</span>
            </h1>
            <p className="text-xl text-white max-w-4xl mx-auto mb-8">
              Un vero battello solca le acque del Lago Maggiore e, insieme, apre rotte simboliche verso la pace. Non è solo un viaggio, ma un cammino condiviso: a bordo si ascoltano voci, si intrecciano storie, si cercano parole nuove per dire giustizia e fraternità. Ogni approdo — Angera, Arona, Baveno e Verbania Intra — diventa un presidio di speranza, legato agli altri da un filo d'acqua che unisce e non divide.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-300">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Sabato 11 ottobre 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Lago Maggiore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* FAQ Item 1 - Cos'è il Battello di Pace */}
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Cos'è il Battello di Pace?
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Il Battello di Pace è un viaggio simbolico e un evento concreto che attraversa il Lago Maggiore toccando quattro punti d'incontro: <strong>Angera, Arona, Baveno e Verbania Intra</strong>.
                    </p>
                    <p>
                      Il percorso sul battello, così come ogni tappa, sarà un'occasione di riflessione, condivisione e testimonianza sui temi della pace, in un cammino comune di impegno civile.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQ Item 2 - Qual è il percorso */}
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Quale sarà il percorso del Battello di Pace?
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Il Battello di Pace partirà da <strong>Angera</strong> la mattina di sabato 11 ottobre 2025, toccherà nell'ordine i presidi di <strong>Arona, Baveno e Verbania Intra</strong>, per poi rientrare ad <strong>Angera</strong> in serata.
                    </p>
                    <p>
                      Imbarco e sbarco avvengono esclusivamente ad <strong>Angera</strong>: si parte al mattino e si rientra in serata dopo tutte le tappe; non sono previsti imbarchi o sbarchi durante le soste intermedie.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQ Item 3 - Come salire sul battello */}
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Chi può salire a bordo e come candidarsi?
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Le modalità per l'accesso alla navigazione sul battello sono in via di definizione e saranno comunicate a breve.
                    </p>
                    <p>
                      I posti sono limitati: chiediamo comprensione a chi non riuscirà a imbarcarsi. In ogni caso, i presidi lungo le tappe resteranno aperti a tutti per la partecipazione.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQ Item 4 - Quanto costa */}
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    È previsto un costo di partecipazione?
                  </h3>
                  <p className="text-gray-600">
                    È richiesto un contributo minimo, destinato in parte a coprire le spese organizzative e in parte devoluto in beneficenza.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Obiettivi dell'evento */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              I Nostri Obiettivi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Il Battello di Pace si propone di raggiungere obiettivi concreti attraverso azioni simboliche e iniziative reali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sensibilizzazione
              </h3>
              <p className="text-gray-600">
                Dare voce al rifiuto della guerra e del riarmo, promuovendo una cultura di pace e giustizia.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Aggregazione
              </h3>
              <p className="text-gray-600">
                Ritrovarsi insieme in ogni tappa e presidio per condividere impegno e speranza.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Raccolta Fondi
              </h3>
              <p className="text-gray-600">
                Sostenere concretamente le missioni umanitarie di Emergency 
                e Medici Senza Frontiere attraverso donazioni.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Il Percorso */}
      

      {/* Le Organizzazioni Beneficiarie */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Le Organizzazioni che Sosteniamo
            </h2>
            <p className="text-lg text-gray-600">
              Tutti i fondi raccolti durante l'evento saranno interamente devoluti a:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="h-16 w-32 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={emergencyLogo} 
                    alt="Emergency Logo" 
                    className="max-h-16 max-w-32 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Emergency</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Emergency</strong> è un'associazione umanitaria italiana che offre 
                  cure medico-chirurgiche gratuite e di qualità alle vittime della guerra, 
                  delle mine antiuomo e della povertà.
                </p>
                <p>
                  Fondata nel 1994 da Gino Strada, opera in Afghanistan, Iraq, Repubblica 
                  Centrafricana, Sierra Leone, Sudan e Italia con ospedali, centri 
                  pediatrici, centri riabilitativi, posti di primo soccorso e un centro 
                  cardiochirurgico.
                </p>
                <div className="pt-4">
                  <a 
                    href="https://www.emergency.it" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>www.emergency.it</span>
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="h-16 w-32 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={msfLogo} 
                    alt="Medici Senza Frontiere Logo" 
                    className="max-h-16 max-w-32 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Medici Senza Frontiere</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Medici Senza Frontiere</strong> è un'organizzazione umanitaria 
                  internazionale che fornisce soccorso medico d'urgenza in casi di conflitti 
                  armati, epidemie, catastrofi naturali ed esclusione dall'assistenza sanitaria.
                </p>
                <p>
                  Vincitrice del Premio Nobel per la Pace nel 1999, MSF opera in oltre 70 paesi 
                  con più di 45.000 operatori umanitari che assistono persone in difficoltà, 
                  vittime di conflitti armati e catastrofi naturali.
                </p>
                <div className="pt-4">
                  <a 
                    href="https://www.medicisenzafrontiere.it" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>www.medicisenzafrontiere.it</span>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Unisciti al Viaggio della Pace
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ogni gesto conta, ogni presenza è importante. Insieme possiamo fare la differenza 
            e portare un messaggio di speranza attraverso il territorio del Lago Maggiore.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => onPageChange('adesioni')}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Hanno aderito alla manifestazione
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}