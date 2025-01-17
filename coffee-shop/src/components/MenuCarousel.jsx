import { useState } from 'react';
import coffee1 from '../assets/59b8c1b16a9b740417cb40ff16a04f0e.jpg';
import coffee2 from '../assets/3a7bdaa81ffbbb17712ca0016eef315e.jpg';

function MenuCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const menuItems = [
    {
      image: coffee1,
      title: 'Nos Cafés',
      description: 'Découvrez notre sélection de cafés premium'
    },
    {
      image: coffee2,
      title: 'Pâtisseries Maison',
      description: 'Des délices fait maison chaque jour'
    },
    {
      image: coffee1,
      title: 'Spécialités',
      description: 'Nos créations signatures'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="nos-cafés" className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="relative h-[400px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                ${index === currentIndex ? 'opacity-100 translate-x-0' : 
                  index < currentIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}
            >
              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute w-full h-full object-cover object-center"
                  style={{
                    objectPosition: '50% 30%'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg md:text-xl">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Boutons de navigation - cachés sur mobile */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Indicateurs - plus gros sur mobile */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
            {menuItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 md:w-2 md:h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6 md:w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuCarousel; 