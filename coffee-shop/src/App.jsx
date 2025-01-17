import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuCarousel from './components/MenuCarousel'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-coffee-500 via-coffee-300 to-coffee-100 bg-fixed">
      <Navbar />
      <main>
        <Hero />
        <MenuCarousel />
      </main>
    </div>
  )
}

export default App