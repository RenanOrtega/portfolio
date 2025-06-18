import Silk from "./blocks/Backgrounds/Silk/Silk"
import Collaborate from "./components/Collaborate"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SectionDescription from "./components/SectionDescription"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div className="bg-dark">
      <section className="min-h-screen relative flex flex-col">
        <div className="absolute inset-0 w-full h-full z-0">
          <Silk
            speed={3}
            scale={0.8}
            color="#2D2D2D"
            noiseIntensity={0.5}
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
      <div>

        <div className="mx-auto antialiased relativ">
          {/* Projects Section */}
          {/* <section className="min-h-screen flex flex-col px-8 py-6 md:px-30" id="projects">
              <SectionDescription
                description="A selection of my favorite work across design and development, with a focus on impactful, modern solutions."
              />
              <Projects />
            </section> */}
          <section className="min-h-screen">
            <div className="flex flex-col antialiased relative overflow-hidden">
              <div className="flex justify-start px-8 py-6 md:px-30">
                <SectionDescription
                  title="Testimonials"
                  description="A selection of my favorite work across design and development, with a focus on impactful, modern solutions."
                />
              </div>
              <div className="flex justify-center">
                <Testimonials />
              </div>
            </div>
          </section>
          {/* Skills Section */}
          <section className="min-h-screen flex flex-col justify-center" id="skills">
            <Skills />
          </section>

          {/* Contact Section */}
          <section className="min-h-screen flex flex-col justify-center bg-light" id="contact">
            <Collaborate />
          </section>
        </div>

        {/* Footer */}
        <div className="bg-neutral-950 px-8 py-6 md:px-30">
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default App