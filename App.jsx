import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Features from './components/Features.jsx'
import StudentSection from './components/StudentSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <StudentSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
