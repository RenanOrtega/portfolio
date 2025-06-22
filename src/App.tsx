import { useTranslation } from "react-i18next";
import FadeContent from "./Animations/FadeContent/FadeContent";
import Silk from "./blocks/Backgrounds/Silk/Silk";
import Collaborate from "./components/Collaborate";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SectionDescription from "./components/SectionDescription";
import Skills from "./components/Skills";
import './i18n';
import Testimonials from "./components/Testimonials";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-dark overflow-x-hidden"> {/* Adiciona overflow-x-hidden */}
      <section className="min-h-screen relative flex flex-col">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden"> {/* Adiciona overflow-hidden */}
          <Silk
            speed={3}
            scale={0.8}
            color="#2D2D2D"
            noiseIntensity={0.5}
            rotation={0}
          />
        </div>
        <div className="relative z-10 flex flex-col h-full min-h-screen">
          <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-15"> {/* Padding responsivo mais controlado */}
            <Navbar />
          </div>
          {/* Hero */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6"> {/* Adiciona padding horizontal */}
            <Hero />
          </div>
          <div className="flex px-4 py-6 sm:px-6 md:px-8 lg:px-15"> {/* Padding responsivo */}
            <a
              className="text-light px-4 py-1.5 bg-dark border-2 rounded-lg hover:border-primary hover:scale-105 transition-all"
              href="/certificate.pdf"
              target="_blank"
            >
              {t('cv.download')}
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-x-hidden"> {/* Container com overflow controlado */}
        <div className="mx-auto antialiased relative max-w-full"> {/* Adiciona max-w-full */}

          {/* Projects Section */}
          <section className="min-h-screen flex flex-col px-4 py-16 sm:px-6 md:px-8 lg:px-15" id={t('nav.projects')}>
            <SectionDescription
              title={t('projects.title')}
              description={t('projects.description')}
            />
            <div className="flex justify-center overflow-hidden"> {/* Adiciona overflow-hidden */}
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0.2}
              >
                <div className="w-full max-w-full"> {/* Container com largura controlada */}
                  <Projects />
                </div>
              </FadeContent>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="min-h-screen overflow-hidden"> {/* Adiciona overflow-hidden */}
            <div className="flex flex-col antialiased relative">
              <div className="flex justify-center px-4 py-10 sm:px-6 md:px-8 lg:px-15">
                <SectionDescription
                  title={t('testimonials.title')}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus blandit tortor vitae est porta sollicitudin. Ut varius orci ac purus congue, vel varius ligula aliquam. Etiam non porta elit. Aenean tempus nibh nec velit varius luctus."
                />
              </div>
              <div className="flex justify-center overflow-hidden"> {/* Controla overflow dos testimonials */}
                <Testimonials
                  direction="left"
                  speed="slow"
                />
              </div>
              <div className="overflow-hidden"> {/* Controla overflow dos testimonials */}
                <Testimonials
                  direction="right"
                  speed="slow"
                />
              </div>
            </div>
          </section>

          {/* Skills Section - Layout responsivo melhorado */}
          <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-4 py-6 sm:px-6 md:px-8 lg:px-15 gap-8" id={t('nav.skills')}>
            {/* SectionDescription primeiro no mobile, segundo no desktop */}
            <div className="w-full lg:w-auto lg:max-w-md lg:order-2"> {/* order-2 no desktop */}
              <SectionDescription
                title={t('skills.title')}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Phasellus blandit tortor vitae est porta sollicitudin. Ut varius orci ac purus congue, vel varius ligula aliquam. Etiam non porta elit. Aenean tempus nibh nec velit varius luctus."
              />
            </div>
            {/* Skills segundo no mobile, primeiro no desktop */}
            <div className="w-full lg:flex-1 lg:pr-8 lg:order-1"> {/* order-1 no desktop */}
              <Skills />
            </div>
          </section>


          {/* Contact Section */}
          <section className="min-h-screen flex flex-col justify-center bg-light overflow-hidden" id={t('nav.contact')}>
            <Collaborate />
          </section>
        </div>

        {/* Footer */}
        <div className="bg-neutral-950 px-4 py-6 sm:px-6 md:px-8 lg:px-15">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Index;