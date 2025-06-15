import Silk from "./blocks/Backgrounds/Silk/Silk"
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
    <>
      <section className="min-h-screen relative flex flex-col">
        <div className="absolute inset-0 w-full h-full z-0">
          <Silk
            speed={5}
            scale={1}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <div className="relative z-10 flex flex-col h-full min-h-screen">
          <div className="px-8 py-6 md:px-30">
            <Navbar />
          </div>
          {/* Hero ocupa o espaço restante */}
          <div className="flex-1 flex items-center justify-center">
            <Hero />
          </div>
        </div>
      </section>
      <div className="px-8 py-6 md:px-30">
        <TracingBeam className="pb-20">
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
    </>
  )
}

export default App