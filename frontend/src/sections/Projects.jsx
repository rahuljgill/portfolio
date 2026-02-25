import { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Projects() {
  const middleRef = useRef(null);
  const scrollerRef = useRef(null);
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    const scroller = scrollerRef.current;
    const target = middleRef.current;

    if (!scroller || !target) return;

    const left =
      target.offsetLeft + target.offsetWidth / 2 - scroller.clientWidth / 2;

    scroller.scrollTo({ left, behavior: "instant" });
  }, []);

  const projects = [
    {
      title: "Job Board Platform",
      description:
        "Full-stack job board application with role-based access, secure authentication, and application tracking. Built with React and a Laravel API.",
      techStack: [
        "React",
        "TailwindCSS",
        "Laravel",
        "PostgreSQL",
        "Sanctum Token Auth",
        "REST API",
      ],
      features: [
        "Role-based access (Job Seeker / Employer)",
        "Secure authentication",
        "Resume uploads",
        "Application tracking system",
      ],
      deployment: [
        "Frontend deployed on Vercel",
        "Backend hosted on Render",
        "PostgreSQL database",
        "Fully decoupled architecture",
      ],
      demo: "https://job-board-frontend-two-sigma.vercel.app/",
      code: "https://github.com/rahuljgill/fullstack-job-board",
    },

    // CENTER CARD (index 1)
    {
      title: "RoastLab",
      description:
        "Coffee e-commerce platform with custom blends, dynamic pricing, and Stripe checkout. Built with React, TailwindCSS, and Laravel.",
      techStack: [
        "React",
        "TailwindCSS",
        "Laravel",
        "PostgreSQL",
        "Sanctum Token Auth",
        "Stripe",
      ],
      features: [
        "Stripe API integration with secure checkout flow",
        "Custom blend builder with dynamic pricing",
        "Server-side price validation at checkout",
        "Persistent cart (localStorage)",
      ],
      deployment: [
        "Frontend deployed on Vercel",
        "Backend hosted on Render (Docker)",
        "PostgreSQL hosted on Supabase",
        "Stripe test mode checkout",
      ],
      demo: "https://roast-lab-theta.vercel.app/",
      code: "https://github.com/rahuljgill/Roastlab",
    },

    {
      title: "Coming Soon",
      description:
        "Almost completed new full-stack application with React and Laravel. Card will be updated with more details coming soon. ",
      techStack: ["React", "TailwindCSS", "Laravel", "PostgreSQL"],
      features: ["Work in progress", "", "", ""],
      deployment: ["More info soon", "", "", ""],
      demo: "#",
      code: "#",
      comingSoon: true,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-(--color-bg-primary) dark:bg-(--color-dark-bg) transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-brand">Projects</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-text-muted dark:text-(--color-dark-text) max-w-2xl mx-auto">
            A showcase of my recent full-stack development work
          </p>
        </div>

        {/* Mobile Prompt */}
        <p className="mt-2 mb-4 w-full text-center text-xs tracking-wide text-text-muted/80 dark:text-(--color-dark-text)/70 md:hidden">
          ← Swipe to explore projects →
        </p>

        {/* Horizontal Scroll */}
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-linear-to-r from-(--color-bg-primary) dark:from-(--color-dark-bg) to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-linear-to-l from-(--color-bg-primary) dark:from-(--color-dark-bg) to-transparent" />

          <div
            ref={scrollerRef}
            className="overflow-x-auto snap-x snap-mandatory scroll-smooth pt-8 pb-8"
          >
            <div className="flex gap-10 px-[15%]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  ref={index === 1 ? middleRef : null}
                  className="snap-center"
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
