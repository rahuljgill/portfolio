import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiVite,
  SiGreensock,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const skillCardsRef = useRef([]);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "GSAP", icon: SiGreensock, color: "text-green-500" },
        { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
        { name: "Express.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "REST APIs", icon: TbApi, color: "text-purple-400" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "text-gray-700 dark:text-gray-300",
        },
        { name: "Vite", icon: SiVite, color: "text-purple-500" },
        { name: "VS Code", icon: VscCode, color: "text-blue-400" },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Animate text content
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      //Animate skills
      gsap.fromTo(
        skillCardsRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-bg-card dark:bg-(--color-dark-bg) transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-brand">Me</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-text-muted dark:text-(--color-dark-text) max-w-2xl mx-auto transition-colors duration-300">
            I'm a junior full stack developer focused on building clean,
            responsive, and scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side — Text */}
          <div
            ref={textRef}
            className="space-y-6 text-text-muted dark:text-(--color-dark-text) leading-relaxed transition-colors duration-300 text-base"
          >
            <p>
              I graduated in September 2025 with a 4.0 GPA in Computer Science,
              where I built a strong foundation in software engineering and
              full-stack development.
            </p>

            <p>
              I’ve also worked on frontend interfaces for an early-stage
              startup, using a minimalist, product-focused design approach that
              prioritised clarity, usability, and responsive layouts. An
              archived version of that work can be viewed{" "}
              <a
                href="https://web.archive.org/web/20250107150352/https://cannasa.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline font-semibold transition-colors duration-200"
              >
                here
              </a>
              .
            </p>

            <p>
              Since then, I’ve been building full-stack projects with React,
              TailwindCSS, and Laravel, focusing on clean, maintainable code and
              continuing to strengthen my problem-solving and development
              skills.
            </p>
          </div>

          {/* Right Side — Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                ref={(el) => (skillCardsRef.current[index] = el)}
                className="bg-(--color-bg-primary) dark:bg-(--color-dark-bg) p-6  rounded-2xl border border-border dark:border-(--color-dark-border) hover:border-brand transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-brand mb-4 tracking-tight">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="skill-badge flex items-center gap-2 group"
                        title={skill.name}
                      >
                        <Icon
                          className={`w-6 h-6 ${skill.color} transition-transform duration-200 group-hover:scale-110`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
