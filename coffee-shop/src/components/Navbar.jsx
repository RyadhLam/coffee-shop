import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="bg-white/95 backdrop-blur-sm text-coffee-500 py-4 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">coffee.</h1>
          
          {/* Bouton burger pour mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 flex flex-col gap-1">
              <span className={`block h-0.5 w-full bg-coffee-500 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-coffee-500 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-coffee-500 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>

          {/* Menu desktop */}
          <div className="hidden md:block">
            <ul className="flex space-x-2">
              {['Accueil', 'Nos Cafés', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Accueil' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`}
                    className="relative px-4 py-2 rounded-full group overflow-hidden"
                  >
                    <span className="relative z-10 transition-colors duration-300">
                      {item}
                    </span>
                    <div className="absolute inset-0 bg-coffee-100 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-full"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu mobile */}
          <div className={`
            absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm md:hidden
            transform transition-all duration-300 ease-in-out
            ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
          `}>
            <ul className="py-4 px-4 space-y-2">
              {['Accueil', 'Nos Cafés', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Accueil' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 rounded-full hover:bg-coffee-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar