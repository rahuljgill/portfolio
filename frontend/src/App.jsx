import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import profilePic from "./assets/me.jpeg";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textElements = heroTextRef.current.children;
      gsap.fromTo(
        textElements,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          delay: 0.3,
        },
      );

      gsap.fromTo(
        heroImageRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-(--color-bg-primary) dark:bg-(--color-dark-bg) text-text-primary dark:text-(--color-dark-text) min-h-screen transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center w-full">
          {/* RIGHT SIDE - IMAGE */}
          <div className="flex justify-center pb-12 md:order-2">
            <div
              ref={heroImageRef}
              className="bg-bg-card dark:bg-(--color-dark-bg) p-6 rounded-full shadow-2xl transition-colors duration-300 overflow-hidden"
            >
              <img
                src={profilePic}
                alt="Rahul Jake Gill"
                className="w-96 h-96 md:w-105 md:h-105 object-cover rounded-full scale-125"
              />
            </div>
          </div>

          {/* LEFT SIDE - TEXT  */}
          <div
            ref={heroTextRef}
            className="space-y-6 text-center md:text-left md:order-1"
          >
            <h1 className="text-3xl md:text-4xl font-medium text-text-muted dark:text-(--color-dark-text) transition-colors duration-300 tracking-tight">
              Hi, my name is
            </h1>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-brand transition-colors duration-300 tracking-tight">
              Rahul Jake Gill
            </h2>

            <h3 className="text-xl md:text-2xl font-medium text-text-muted dark:text-(--color-dark-text) transition-colors duration-300 tracking-tight">
              Aspiring Full Stack Web Developer
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-brand hover:bg-brand-hover dark:hover:bg-(--color-brand-dark) text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200 tracking-tight inline-block"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-border dark:border-(--color-dark-border) px-6 py-3 rounded-lg hover:bg-bg-card dark:hover:bg-(--color-dark-bg) transition-all duration-200 font-medium tracking-tight inline-block"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
