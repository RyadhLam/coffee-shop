function Location() {
  const locations = [
    {
      name: "Coffee Saint-Germain",
      address: "45 Boulevard Saint-Germain",
      postal: "75005 Paris",
      hours: "7h30 - 20h",
      weekend: "8h30 - 19h",
      phone: "01 23 45 67 89",
      coords: "48.8502,2.3384" // Coordonnées Saint-Germain
    },
    {
      name: "Coffee Marais",
      address: "12 Rue des Archives",
      postal: "75004 Paris",
      hours: "8h00 - 19h30",
      weekend: "9h00 - 19h",
      phone: "01 23 45 67 90",
      coords: "48.8589,2.3558" // Coordonnées Marais
    },
    {
      name: "Coffee Montmartre",
      address: "78 Rue des Abbesses",
      postal: "75018 Paris",
      hours: "8h00 - 20h",
      weekend: "9h00 - 20h",
      phone: "01 23 45 67 91",
      coords: "48.8845,2.3377" // Coordonnées Montmartre
    },
    {
      name: "Coffee Bastille",
      address: "25 Rue de la Roquette",
      postal: "75011 Paris",
      hours: "7h30 - 19h30",
      weekend: "8h30 - 19h",
      phone: "01 23 45 67 92",
      coords: "48.8533,2.3716" // Coordonnées Bastille
    }
  ];

  // Créer l'URL de la carte avec les marqueurs
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY
    &center=48.8566,2.3522
    &zoom=12
    &markers=color:red|${locations.map(loc => loc.coords).join('|')}`;

  return (
    <section id="où-nous-trouver" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Info */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-coffee-500 mb-6">Nos coffee shops</h2>
              <div className="space-y-6 text-coffee-500 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-4">
                {locations.map((loc, index) => (
                  <div key={index} className="border-b border-coffee-200 pb-4 last:border-0">
                    <h3 className="font-bold text-lg mb-2">{loc.name}</h3>
                    <div className="space-y-2">
                      <div>
                        <p>{loc.address}</p>
                        <p>{loc.postal}</p>
                      </div>
                      <div>
                        <p className="font-medium">Horaires :</p>
                        <p>Lundi - Vendredi : {loc.hours}</p>
                        <p>Samedi - Dimanche : {loc.weekend}</p>
                      </div>
                      <p>Tél : {loc.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map */}
            <div className="h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41999.87789435895!2d2.3194881161846754!3d48.85883592011788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1647874587931!5m2!1sfr!2sfr&style=feature:all|element:labels|visibility:on&style=feature:all|element:labels.text.fill|color:0x000000&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative|element:geometry.fill|color:0x000000&style=feature:administrative|element:geometry.stroke|color:0x000000|lightness:14|weight:1.4&style=feature:landscape|element:all|color:0x000000&style=feature:poi|element:geometry|color:0x000000|lightness:5&style=feature:road.highway|element:geometry.fill|color:0x000000&style=feature:road.highway|element:geometry.stroke|color:0x000000|lightness:25&style=feature:road.arterial|element:geometry.fill|color:0x000000&style=feature:road.arterial|element:geometry.stroke|color:0x000000|lightness:16&style=feature:road.local|element:geometry|color:0x000000&style=feature:transit|element:geometry|color:0x000000|lightness:19&style=feature:water|element:geometry|color:0x000000|lightness:17"
                className="w-full h-full min-h-[400px]" 
                loading="lazy"
                title="Nos localisations"
                style={{ border: 0, filter: 'grayscale(100%) contrast(90%) brightness(110%)' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location; 