import Collaborate from "./components/Collaborate"
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
        <hr className="my-4 border-gray-300" />
        <Collaborate />
        <hr className="my-4 border-gray-300" />
      </div>
    </div>
  )
}

export default App
