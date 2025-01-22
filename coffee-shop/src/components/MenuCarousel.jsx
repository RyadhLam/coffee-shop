import { useState } from 'react';
import coffee1 from '../assets/th.jpg';
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
    <section id="nos-cafés" className="h-screen relative">
      <div className="h-full">
        <div className="relative h-full w-full">
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
                  className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-12 left-0 right-0 px-8 md:px-20 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h3>
                    <p className="text-xl md:text-2xl max-w-2xl">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Boutons de navigation - maintenant sur les côtés */}
          <div className="absolute inset-y-0 left-4 md:left-8 right-4 md:right-8 flex items-center justify-between pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="pointer-events-auto bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Indicateurs - maintenant en bas absolu */}
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