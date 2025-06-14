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
      <div className="min-h-screen flex flex-col">
        <SectionDescription description="A selection of my favorite work across design and development, with a focus on impactful, modern solutions." />
        <Projects />
      </div>
      <div className="min-h-screen flex flex-col justify-center">
        <Skills />
      </div>
      <div className="min-h-screen flex flex-col">
        <SectionDescription description="Creative technologist driven to craft innovative digital experiences blending design and code with real business results." />
      </div>
    </div>
  )
}

export default App
