import { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Location from './components/Location'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      quantity === 0
        ? prevItems.filter(item => item.id !== id)
        : prevItems.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItemsCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Location />
      </main>
      <Cart 
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

export default App;