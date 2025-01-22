import { useState } from 'react';

function Cart({ items, onClose, onUpdateQuantity, onRemoveItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`fixed right-0 top-0 h-full w-full md:w-96 bg-coffee-100/95 backdrop-blur-sm shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-coffee-500">Panier ({items.length})</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/50 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-coffee-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-coffee-400">
            Votre panier est vide
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-20 h-20 bg-coffee-100 rounded-lg overflow-hidden">
                    <img 
                      src={item.image || '/placeholder.jpg'} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-coffee-500">{item.name}</h4>
                    <p className="text-sm text-coffee-400">{item.price}€</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="p-1 hover:bg-coffee-100 rounded transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-coffee-500">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-coffee-100 rounded transition-colors"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto text-coffee-400 hover:text-coffee-500 transition-colors"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-coffee-200 pt-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-coffee-500">Total</span>
                <span className="font-bold text-xl text-coffee-500">{total.toFixed(2)}€</span>
              </div>
              <button className="w-full bg-coffee-400 text-white py-3 rounded-full hover:bg-coffee-500 transition-colors">
                Commander
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart; 