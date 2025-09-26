import { Mail, MapPin, Instagram, Facebook, Phone, Clock, Users, Download } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import peaceBackground from 'figma:asset/contatti.jpeg';
import colombaLogo from 'figma:asset/colomba.png';

export function ContattiPage() {
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
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contatti
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
            Seguici o contattaci per informazioni e adesioni
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonna sinistra */}
            <div className="space-y-8">
              {/* Social Media - primo in alto */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Seguici sui Social
                </h2>
                
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/battellodipace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-700">
                        @battellodipace
                      </h3>
                    </div>
                  </a>

                  <a
                    href="https://facebook.com/battellodipace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">
                        @battellodipace
                      </h3>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Scrivici via mail */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Scrivici via mail
                </h2>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <a 
                      href="mailto:info@battellodipace.it"
                      className="text-blue-600 hover:text-blue-700 transition-colors font-semibold"
                    >
                      info@battellodipace.it
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Colonna destra */}
            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informazioni in breve
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Dove</h3>
                      <p className="text-gray-700">Lago Maggiore</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Quando</h3>
                      <p className="text-gray-700">Sabato 11 ottobre</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Organizzazione</h3>
                      <p className="text-gray-700">Rete Artigiani di Pace</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Download
                </h2>
                
                <div className="space-y-4">
                  {/* Volantino ufficiale */}
                  <a
                    href="/assets/materials/volantino.pdf"
                    download="volantino-battello-di-pace.pdf"
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center p-1">
                        <img
                          src={colombaLogo}
                          alt="Logo Battello di Pace"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">
                          Volantino ufficiale
                        </h3>
                        <p className="text-sm text-gray-500">PDF - Stampa e condivisione</p>
                      </div>
                    </div>
                    <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                  </a>

                  {/* Logo dell'evento */}
                  <a
                    href={colombaLogo}
                    download="logo-battello-di-pace.png"
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center p-1">
                        <img
                          src={colombaLogo}
                          alt="Logo Battello di Pace"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-700">
                          Logo dell'evento
                        </h3>
                        <p className="text-sm text-gray-500">PNG - Sfondo trasparente</p>
                      </div>
                    </div>
                    <Download className="h-5 w-5 text-gray-400 group-hover:text-purple-500" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}