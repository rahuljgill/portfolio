import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-(--color-bg-primary)/80 dark:bg-(--color-dark-bg)/80 border-b border-border dark:border-(--color-dark-border) transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-xl font-bold text-brand transition-colors duration-300 tracking-tight"></div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Nav Links */}
          <div className="hidden md:flex gap-6 text-text-muted dark:text-(--color-dark-text) transition-colors duration-300 font-medium">
            <a
              href="#about"
              className="hover:text-brand dark:hover:text-brand transition-colors duration-200 tracking-tight"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-brand dark:hover:text-brand transition-colors duration-200 tracking-tight"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-brand dark:hover:text-brand transition-colors duration-200 tracking-tight"
            >
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className="relative w-14 h-7 bg-bg-card dark:bg-(--color-bg-primary) rounded-full border-2 border-border dark:border-brand transition-all duration-300 hover:border-brand dark:hover:border-brand-hover"
          >
            {/* Sliding Circle */}
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-brand shadow-lg transform transition-transform duration-300 flex items-center justify-center
                ${darkMode ? "translate-x-7" : "translate-x-0.5"}`}
            >
              {darkMode ? (
                <HiMoon className="w-3 h-3 text-slate-900" />
              ) : (
                <HiSun className="w-3 h-3 text-slate-900" />
              )}
            </span>

            {/* Background Icons */}
            <div className="absolute inset-0 flex items-center justify-between px-1.5">
              <HiSun
                className={`w-4 h-4 transition-opacity duration-300 ${
                  darkMode ? "opacity-30 text-text-muted" : "opacity-0"
                }`}
              />
              <HiMoon
                className={`w-4 h-4 transition-opacity duration-300 ${
                  darkMode ? "opacity-0" : "opacity-30 text-text-muted"
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
