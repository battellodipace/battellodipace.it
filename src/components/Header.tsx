import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/17fcf9be705bfd07663370a0e2fff3976a7c4a64.png';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'battello', label: 'Il Battello' },
    { id: 'presidi', label: 'Presidi Locali', submenu: [
      { id: 'angera', label: 'Angera' },
      { id: 'arona', label: 'Arona' },
      { id: 'baveno', label: 'Baveno' },
      { id: 'verbania', label: 'Verbania Intra' }
    ]},
    { id: 'adesioni', label: 'Adesioni' },
    { id: 'news', label: 'News' },
    { id: 'contatti', label: 'Contatti' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Battello di Pace 2025" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="battello-gradient">BATTELLO</span>{' '}
                  <span className="di-pace-gradient">DI PACE</span>
                </h1>
                <p className="text-blue-600 text-sm">11 ottobre 2025</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => !item.submenu && onPageChange(item.id)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.id || (item.submenu && item.submenu.some(sub => sub.id === currentPage))
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.id}
                          onClick={() => onPageChange(subitem.id)}
                          className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                            currentPage === subitem.id
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {subitem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (!item.submenu) {
                        onPageChange(item.id);
                        setIsMenuOpen(false);
                      }
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.id}
                          onClick={() => {
                            onPageChange(subitem.id);
                            setIsMenuOpen(false);
                          }}
                          className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                            currentPage === subitem.id
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-600 hover:text-blue-600'
                          }`}
                        >
                          {subitem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}