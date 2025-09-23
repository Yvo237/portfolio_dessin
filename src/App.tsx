import Navbar from './components/SiteNavbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Home />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
