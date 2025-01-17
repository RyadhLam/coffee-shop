import Carousel from './Carousel';

function Hero() {
  return (
    <section className="pt-20 min-h-screen flex items-center justify-center relative">
      <Carousel />
      <div className="container mx-auto px-4 text-center relative text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">coffee.</h1>
        <p className="text-xl md:text-2xl mb-8">Découvrez l&apos;art du café à la française</p>
        <button className="bg-coffee-400 text-white px-8 py-3 rounded-full hover:bg-coffee-500 transition-colors">
          Voir les cafés
        </button>
      </div>
    </section>
  );
}

export default Hero;