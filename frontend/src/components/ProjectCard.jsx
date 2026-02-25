import { FaReact, FaLaravel, FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiRender,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { FaStripe } from "react-icons/fa";

const techIcons = {
  "Node.js": { icon: FaNodeJs, color: "text-green-500" },
  Express: { icon: SiExpress, color: "text-gray-600 dark:text-gray-300" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-500" },
  "Sanctum Token Auth": { icon: MdSecurity, color: "text-yellow-500" },
  "REST API": { icon: TbApi, color: "text-purple-400" },
  "MVC Architecture": { icon: BiCodeBlock, color: "text-orange-500" },
  React: { icon: FaReact, color: "text-cyan-400" },
  TailwindCSS: { icon: SiTailwindcss, color: "text-cyan-500" },
  Laravel: { icon: FaLaravel, color: "text-red-500" },
  Docker: { icon: FaDocker, color: "text-blue-400" },
  Render: { icon: SiRender, color: "text-purple-500" },
  Vercel: { icon: SiVercel, color: "text-gray-800 dark:text-white" },
  Stripe: { icon: FaStripe, color: "text-indigo-500" },
};

function ProjectCard({
  title,
  description,
  techStack,
  features,
  deployment,
  demo,
  code,
}) {
  return (
    <div className="w-[90vw] max-w-225 shrink-0 snap-center bg-bg-card dark:bg-(--color-dark-bg) rounded-3xl p-10 border border-border dark:border-(--color-dark-border) shadow-xl flex flex-col justify-between transition-colors duration-300">
      {/* Title */}
      <h3 className="text-3xl font-bold text-brand mb-6 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-text-muted dark:text-(--color-dark-text) mb-8 leading-relaxed transition-colors duration-300">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-8">
        {techStack.map((tech) => {
          const techInfo = techIcons[tech];
          const Icon = techInfo?.icon;

          return (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-medium rounded-full bg-(--color-bg-primary) dark:bg-(--color-dark-bg) border border-border dark:border-(--color-dark-border) text-text-muted dark:text-(--color-dark-text) transition-colors duration-300 flex items-center gap-2"
            >
              {Icon && <Icon className={`w-4 h-4 ${techInfo.color}`} />}
              {tech}
            </span>
          );
        })}
      </div>

      {/* Features + Deployment */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 text-text-muted dark:text-(--color-dark-text) transition-colors duration-300">
        <div>
          <h4 className="font-semibold text-brand mb-3 tracking-tight">
            Key Features
          </h4>
          <ul className="space-y-2 text-sm leading-relaxed">
            {features.map((feature, i) => (
              <li key={i}>• {feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-brand mb-3 tracking-tight">
            Deployment
          </h4>
          <ul className="space-y-2 text-sm leading-relaxed">
            {deployment.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-auto">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand hover:bg-brand-hover text-slate-900 px-6 py-3 rounded-lg font-semibold tracking-tight transition-all duration-200"
        >
          Live Demo
        </a>

        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border dark:border-(--color-dark-border) px-6 py-3 rounded-lg hover:bg-(--color-bg-primary) dark:hover:bg-(--color-dark-bg) font-medium tracking-tight transition-all duration-200"
        >
          View Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
