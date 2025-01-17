function Menu() {
    const menuItems = [
      {
        category: "Café",
        items: [
          { name: "Espresso", price: "2.50€", description: "Intense et corsé" },
          { name: "Cappuccino", price: "4.00€", description: "Espresso, lait mousseux et cacao" },
          { name: "Latte", price: "4.50€", description: "Espresso avec du lait chaud et mousse de lait" },
        ]
      },
      {
        category: "Pâtisseries",
        items: [
          { name: "Croissant", price: "2.00€", description: "Pur beurre" },
          { name: "Pain au Chocolat", price: "2.20€", description: "Chocolat noir" },
          { name: "Éclair Café", price: "3.50€", description: "Crème au café" },
        ]
      }
    ];
  
    return (
      <section id="menu" className="py-20 px-4">
        <div className="container mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-coffee-500">Notre Menu</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {menuItems.map((category) => (
              <div key={category.category} className="bg-coffee-100/30 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-coffee-400">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="border-b border-coffee-200 pb-4">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-medium text-coffee-500">{item.name}</h4>
                        <span className="text-coffee-400 font-semibold">{item.price}</span>
                      </div>
                      <p className="text-coffee-400 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Menu