import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/projects/Projects"
import SectionDescription from "./components/SectionDescription"

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
    </div>
  )
}

export default App
