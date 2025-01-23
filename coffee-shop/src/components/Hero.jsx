import { useState } from 'react';
import heroImage from '../assets/01_Onibus_.webp';
import espressoImage from '../assets/3d-paper-coffee-cup-isolated-transparent-background_191095-16599.jpg';

function Hero() {
  const [position, setPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const items = [
    { title: "Espresso", description: "Notre signature", image: espressoImage },
    { title: "Latte Art", description: "Créations uniques", image: heroImage },
    { title: "Cappuccino", description: "Mousse parfaite", image: heroImage },
    { title: "Cold Brew", description: "Infusion 24h", image: heroImage },
    { title: "Chemex", description: "Filtration douce", image: heroImage },
    { title: "V60", description: "Pour-over précis", image: heroImage },
    { title: "Moka", description: "Tradition italienne", image: heroImage },
    { title: "Aeropress", description: "Innovation moderne", image: heroImage }
  ];

  const nextSlide = () => {
    setPosition((prev) => {
      if (prev === -400) {
        return 0;
      }
      return prev - 100;
    });
  };

  const prevSlide = () => {
    setPosition((prev) => {
      if (prev === 0) {
        return -400;
      }
      return prev + 100;
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = isScrolled ? 80 : 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <>
      <section id="hero" className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-end gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold text-coffee-500 leading-tight">
                About Us.
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 text-lg leading-relaxed">
                Depuis notre création, nous nous efforçons de créer une expérience unique autour du café. 
                Notre passion pour l'artisanat du café nous pousse à sélectionner méticuleusement chaque grain, 
                à perfectionner chaque torréfaction et à former nos baristas aux techniques les plus précises. 
                Nous croyons que le café est plus qu'une simple boisson - c'est un moment de pause, 
                de connexion et de plaisir que nous sommes fiers de partager avec vous chaque jour.
                Notre engagement envers la qualité et l'authenticité se reflète dans chaque tasse que nous servons.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="produits" className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto relative px-4">
          <div className="relative">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(${position}%)`,
              }}
            >
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="w-1/4 flex-shrink-0"
                >
                  <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative">
                    <div className="aspect-square bg-gray-50">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-coffee-500 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    
                    {/* Bouton panier */}
                    <button 
                      className="absolute bottom-4 right-4 text-coffee-500 hover:text-coffee-400 transition-colors duration-300"
                      onClick={() => console.log('Ajouter au panier:', item.title)}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-5 h-5"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white text-coffee-500 p-3 rounded-full shadow-lg hover:bg-coffee-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white text-coffee-500 p-3 rounded-full shadow-lg hover:bg-coffee-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;