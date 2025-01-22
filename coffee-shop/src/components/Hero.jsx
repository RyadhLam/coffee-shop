import { useState } from 'react';
import heroImage from '../assets/01_Onibus_.webp';
import espressoImage from '../assets/rb_16599.png';

function Hero() {
  const [position, setPosition] = useState(0);

  const items = [
    { 
      title: "Espresso", 
      description: "5,99",
      image: espressoImage
    },
    { 
      title: "Latte Art", 
      description: "Créations uniques",
      image: heroImage
    },
    { 
      title: "Cappuccino", 
      description: "Mousse parfaite",
      image: "/coffee-images/cappuccino.jpg"
    },
    { 
      title: "Cold Brew", 
      description: "Infusion 24h",
      image: "/coffee-images/cold-brew.jpg"
    },
    { 
      title: "Chemex", 
      description: "Filtration douce",
      image: "/coffee-images/chemex.jpg"
    },
    { 
      title: "V60", 
      description: "Pour-over précis",
      image: "/coffee-images/v60.jpg"
    },
    { 
      title: "Moka", 
      description: "Tradition italienne",
      image: "/coffee-images/moka.jpg"
    },
    { 
      title: "Aeropress", 
      description: "Innovation moderne",
      image: "/coffee-images/aeropress.jpg"
    }
  ];

  const nextSlide = () => {
    setPosition((prev) => {
      const next = prev - 100;
      if (next <= -(items.length - 4) * 100) return -(items.length - 4) * 100;
      return next;
    });
  };

  const prevSlide = () => {
    setPosition((prev) => {
      const next = prev + 100;
      if (next > 0) return 0;
      return next;
    });
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

      <section className="py-12 bg-gray-50 overflow-hidden">
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
                  <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-sm">
                    <div className="aspect-square bg-gray-50 relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-coffee-500 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white text-coffee-500 p-3 rounded-full shadow-lg hover:bg-coffee-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={position === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white text-coffee-500 p-3 rounded-full shadow-lg hover:bg-coffee-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={position <= -(items.length - 4) * 100}
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