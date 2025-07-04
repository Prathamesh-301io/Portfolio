import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineAlternateEmail,
} from "react-icons/md";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#full-stak-projects", id: "full-stak-projects" },
  { name: "Frontend", href: "#frontend-projects", id: "frontend-projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function Header() {
  const [themeIcon, setThemeIcon] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  // Dark mode toggle
  const handleThemeChange = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setThemeIcon(isDark);
  };

  // Auto-close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set current section on click
  const handleLinkClick = (id) => {
    setCurrentSection(id);
    setShowMenu(false); // Close mobile menu after click
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#181818] transition-colors duration-300 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 lg:py-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick("home")}
          className="font-bold text-xl text-gray-800 dark:text-gray-100 no-underline hover:no-underline"
        >
          Prathamesh
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-5 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleLinkClick(link.id)}
              className={`px-4 py-2 rounded-full transition duration-200 ${
                currentSection === link.id
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-neutral-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-2">
          <a
            href="mailto:iamprathameshpatil2001@gmail.com"
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            <MdOutlineAlternateEmail className="text-lg text-neutral-700 dark:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/prathamesh-patill/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            <FaLinkedinIn className="text-lg text-neutral-700 dark:text-gray-300" />
          </a>
          <a
            href="https://github.com/Prath7057"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            <FaGithub className="text-lg text-neutral-700 dark:text-gray-300" />
          </a>
          <button
            onClick={handleThemeChange}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            {themeIcon ? (
              <MdOutlineDarkMode className="text-xl text-neutral-700 dark:text-gray-300" />
            ) : (
              <MdOutlineLightMode className="text-xl text-neutral-700 dark:text-gray-300" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden p-2 rounded-full bg-gray-100 dark:bg-[#232323] text-gray-800 dark:text-gray-100"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed right-5 top-20 w-[250px] bg-[#6e6d6a] rounded-xl shadow-lg p-5 space-y-4 z-40 transition-all duration-300 ${
          showMenu
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => handleLinkClick(link.id)}
            className={`block text-center font-semibold rounded-lg py-2 transition-colors duration-200 ${
              currentSection === link.id
                ? "bg-yellow-400 text-[#1a1a1a]"
                : "bg-white text-[#323232] hover:bg-yellow-300 hover:text-black"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
