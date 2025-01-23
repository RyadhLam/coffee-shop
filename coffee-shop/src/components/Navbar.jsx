import { useState, useEffect } from 'react';

function Navbar({ cartItemsCount, onCartClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showShop, setShowShop] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (sectionId === 'boutique') {
            setShowShop(true);
            return;
        }
        
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = isScrolled ? 80 : 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <>
            <nav className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg ${
                isScrolled ? 'py-2' : 'py-4'
            }`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <a href="#" className={`text-coffee-500 font-bold transition-all duration-300 ${
                            isScrolled ? 'text-xl' : 'text-2xl'
                        }`}>
                            coffee.
                        </a>

                        <div className="hidden md:flex items-center space-x-8">
                            {[
                                { name: 'Accueil', id: 'hero' },
                                { name: 'Produits', id: 'produits' },
                                { name: 'Où nous trouver', id: 'où-nous-trouver' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-coffee-500 font-semibold hover:text-coffee-400 transition-all duration-300 ${
                                        isScrolled ? 'text-sm' : 'text-base'
                                    }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                            <button 
                                onClick={onCartClick}
                                className="relative p-1.5 hover:opacity-80 rounded-full transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`text-coffee-500 transition-all duration-300 ${
                                    isScrolled ? 'w-5 h-5' : 'w-6 h-6'
                                }`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                {cartItemsCount > 0 && (
                                    <span className={`absolute -top-1 -right-1 bg-coffee-400 text-white flex items-center justify-center rounded-full transition-all duration-300 ${
                                        isScrolled ? 'w-4 h-4 text-xs' : 'w-5 h-5 text-xs'
                                    }`}>
                                        {cartItemsCount}
                                    </span>
                                )}
                            </button>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-coffee-500 hover:bg-coffee-100/50 rounded-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;