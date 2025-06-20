import FadeContent from "./Animations/FadeContent/FadeContent";
import Silk from "./blocks/Backgrounds/Silk/Silk";
import Collaborate from "./components/Collaborate";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects"; // <- Adicione esta importação
import SectionDescription from "./components/SectionDescription";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

const Index = () => {
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
          {/* Hero */}
          <div className="flex-1 flex items-center justify-center">
            <Hero />
          </div>
        </div>
      </section>
      <div>
        <div className="mx-auto antialiased relative">

          {/* Projects Section */}
          <section className="min-h-screen flex flex-col px-8 py-16 md:px-30" id="projects">
            <div className="mb-16">
              <SectionDescription
                title="Projects"
                description="A selection of my favorite work, focusing on impactful, modern solutions that demonstrate my passion for creating exceptional digital experiences."
              />
            </div>
            <FadeContent 
              blur={true} 
              duration={1000} 
              easing="ease-out" 
              initialOpacity={0.2}>
              <Projects />
            </FadeContent>
          </section>

          {/* Testimonials Section */}
          <section className="min-h-screen">
            <div className="flex flex-col antialiased relative overflow-hidden">
              <div className="flex justify-center px-8 py-10 md:px-30">
                <SectionDescription
                  title="Testimonials"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus blandit tortor vitae est porta sollicitudin. Ut varius orci ac purus congue, vel varius ligula aliquam. Etiam non porta elit. Aenean tempus nibh nec velit varius luctus."
                />
              </div>
              <div className="flex justify-center">
                <Testimonials />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="min-h-screen flex justify-center items-center px-8 py-6 md:px-30" id="skills">
            <div className="flex-1 pr-10">
              <Skills />
            </div>
            <SectionDescription
              title="Skills"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus blandit tortor vitae est porta sollicitudin. Ut varius orci ac purus congue, vel varius ligula aliquam. Etiam non porta elit. Aenean tempus nibh nec velit varius luctus."
            />
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

export default Index;