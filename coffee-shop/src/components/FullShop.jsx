function FullShop({ onClose }) {
  const categories = [
    {
      title: "Machines",
      products: [
        {
          name: "Machine Expresso",
          price: "499.90€",
          description: "Machine expresso professionnelle pour la maison",
          details: ["Pression 15 bars", "Buse vapeur", "Chauffe rapide"],
          image: "/machine-expresso.jpg"
        },
        {
          name: "Cafetière filtre",
          price: "159.90€",
          description: "Cafetière filtre programmable haut de gamme",
          details: ["Capacité 1.5L", "Maintien au chaud", "Filtre permanent"]
        }
      ]
    },
    {
      title: "Accessoires",
      products: [
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
        }
      ]
    },
    {
      title: "Cafés",
      products: [
        {
          name: "Café Signature",
          price: "12.90€",
          description: "Notre mélange signature, notes de chocolat et fruits rouges",
          details: ["250g", "Torréfaction moyenne", "100% Arabica"]
        },
        {
          name: "Café d'Ethiopie",
          price: "14.90€",
          description: "100% Arabica, notes florales et agrumes",
          details: ["250g", "Torréfaction légère", "Single origin"]
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-gray-50 z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Notre Boutique</h2>
            <button 
              onClick={onClose}
              className="bg-gray-100 text-gray-600 px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Retour
            </button>
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-800 mb-8">{category.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.products.map((product, productIndex) => (
                    <div 
                      key={productIndex}
                      className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_25px_rgba(0,0,0,0.1)] transition-all duration-300"
                    >
                      {/* Image container */}
                      <div className="aspect-w-4 aspect-h-3 mb-6 rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={product.image || '/placeholder.jpg'}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-gray-800">{product.name}</h4>
                        <span className="text-lg font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{product.description}</p>
                      <ul className="space-y-2 mb-6">
                        {product.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-gray-500 text-sm flex items-center gap-3">
                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 active:bg-gray-950 transition-colors font-medium">
                        Ajouter au panier
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullShop; 