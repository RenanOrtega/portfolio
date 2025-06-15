import Collaborate from "./components/Collaborate"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import SectionDescription from "./components/SectionDescription"
import Skills from "./components/Skills"
import { TracingBeam } from "./components/ui/tracing-beam"

function App() {
  return (
    <div className="px-8 py-6 md:px-30">
      {/* Hero Section */}
      <Navbar />
      <TracingBeam
        className="pb-20"
      >
        <section className="min-h-screen flex flex-col justify-center pt-20">
          <Hero />
        </section>

        <div className="mx-auto antialiased relative">
          {/* Projects Section */}
          <section className="min-h-screen flex flex-col" id="projects">
            <SectionDescription
              description="A selection of my favorite work across design and development, with a focus on impactful, modern solutions."
            />
            <Projects />
          </section>

          {/* Skills Section */}
          <section className="min-h-screen flex flex-col justify-center" id="skills">
            <Skills />
          </section>

          {/* Contact Section */}
          <section className="min-h-screen flex flex-col justify-center" id="contact">
            <Collaborate />
          </section>
        </div>
      </TracingBeam>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App