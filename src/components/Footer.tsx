import { Instagram, Facebook, Mail, MapPin, Calendar } from 'lucide-react';
import logoImage from 'figma:asset/17fcf9be705bfd07663370a0e2fff3976a7c4a64.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Battello di Pace */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Battello di Pace</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">Lago Maggiore</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">11 ottobre 2025</span>
              </div>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-200" />
                <a 
                  href="mailto:info@battellodipace.it" 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  info@battellodipace.it
                </a>
              </div>
              
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Seguici</h4>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/battellodipace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@battellodipace</span>
              </a>
              <a 
                href="https://facebook.com/battellodipace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>@battellodipace</span>
              </a>
            </div>
            
            
          </div>
        </div>

        
      </div>
    </footer>
  );
}