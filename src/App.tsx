import Collaborate from "./components/Collaborate"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import SectionDescription from "./components/SectionDescription"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="px-8 py-6">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>

      <div className="min-h-screen flex flex-col" id="projects">
        <SectionDescription description="A selection of my favorite work across design and development, with a focus on impactful, modern solutions." />
        <Projects />
      </div>

      <div className="min-h-screen flex flex-col justify-center" id="skills">
        <Skills />
      </div>

      {/* Seção Collaborate com min-h-screen */}
      <div className="min-h-screen flex flex-col justify-center" id="contact">
        <Collaborate />
      </div>

      <Footer />
    </div>
  )
}

export default App