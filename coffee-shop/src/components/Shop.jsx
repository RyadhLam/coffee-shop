import { useState } from 'react';

function Shop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      name: "Machine Expresso",
      price: "499.90€",
      description: "Machine expresso professionnelle pour la maison",
      details: ["Pression 15 bars", "Buse vapeur", "Chauffe rapide"]
    },
    {
      name: "Moulin à café",
      price: "89.90€",
      description: "Moulin à café électrique avec meules coniques",
      details: ["15 niveaux de mouture", "Capacité 250g", "Faible bruit"]
    },
    {
      name: "Kit Barista",
      price: "129.90€",
      description: "Ensemble d'accessoires pour barista amateur",
      details: ["Tamper", "Tapis de tassage", "Pichet à lait", "Thermomètre"]
    },
    {
      name: "Cafetière filtre",
      price: "159.90€",
      description: "Cafetière filtre programmable haut de gamme",
      details: ["Capacité 1.5L", "Maintien au chaud", "Filtre permanent"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="boutique" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Meilleurs ventes</h2>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                willChange: 'transform'
              }}
            >
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 p-4 transition-opacity duration-700"
                  style={{
                    opacity: index === currentIndex ? '1' : '0.5'
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-sm mx-auto transform transition-transform duration-700"
                    style={{
                      transform: index === currentIndex ? 'scale(1)' : 'scale(0.95)'
                    }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-xl font-bold text-coffee-500">{product.name}</h3>
                      <span className="text-lg font-bold text-coffee-500">{product.price}</span>
                    </div>
                    <p className="text-coffee-400 mb-6 text-sm">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.details.map((detail, idx) => (
                        <li key={idx} className="text-coffee-400 text-sm flex items-center">
                          <span className="w-2 h-2 bg-coffee-300 rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-coffee-400 text-white py-2.5 rounded-full hover:bg-coffee-500 transition-colors">
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 text-coffee-500 p-3 rounded-full shadow-xl hover:bg-coffee-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 text-coffee-500 p-3 rounded-full shadow-xl hover:bg-coffee-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop; 