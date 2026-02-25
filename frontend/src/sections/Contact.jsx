import cvFile from "../assets/NEW CV.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Contact() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-bg-card dark:bg-(--color-dark-bg) border-t border-border dark:border-(--color-dark-border) transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Get In <span className="text-brand">Touch</span>
        </h2>

        <p className="text-lg font-medium text-text-muted dark:text-(--color-dark-text) mb-12 max-w-2xl mx-auto transition-colors duration-300">
          I'm currently seeking junior full stack developer opportunities. If
          you'd like to collaborate or have a role in mind, feel free to reach
          out.
        </p>

        {/* Contact Card */}
        <div className="bg-(--color-bg-primary) dark:bg-(--color-dark-bg) p-10 rounded-3xl border border-border dark:border-(--color-dark-border) shadow-xl space-y-8 transition-colors duration-300">
          {/* Email */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-text-muted dark:text-(--color-dark-text) mb-3 transition-colors duration-300">
              Email
            </p>
            <a
              href="mailto:rahulgill2929@gmail.com"
              className="text-xl md:text-2xl font-semibold text-brand hover:underline inline-flex items-center gap-3 transition-colors duration-200 tracking-tight"
            >
              <MdEmail className="w-6 h-6 md:w-7 md:h-7" />
              rahulgill2929@gmail.com
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 pt-6 flex-wrap">
            <a
              href="https://www.linkedin.com/in/rahul-jake-gill"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border dark:border-(--color-dark-border) px-6 py-3 rounded-lg hover:bg-bg-card dark:hover:bg-(--color-dark-bg) transition-all duration-200 inline-flex items-center gap-2 font-medium tracking-tight"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href={cvFile}
              download
              className="border border-border dark:border-(--color-dark-border) px-6 py-3 rounded-lg hover:bg-bg-card dark:hover:bg-(--color-dark-bg) transition-all duration-200 inline-flex items-center gap-2 font-medium tracking-tight"
            >
              <HiDownload className="w-5 h-5" />
              Download CV
            </a>

            <a
              href="https://github.com/rahuljgill"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border dark:border-(--color-dark-border) px-6 py-3 rounded-lg hover:bg-bg-card dark:hover:bg-(--color-dark-bg) transition-all duration-200 inline-flex items-center gap-2 font-medium tracking-tight"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
