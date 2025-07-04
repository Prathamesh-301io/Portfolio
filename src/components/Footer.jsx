import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-full font-inter text-sm text-[#343434] dark:text-neutral-300 bg-white/50 dark:bg-black/30 backdrop-blur-md px-6 md:px-24 pt-20 pb-10 border-t border-neutral-300 dark:border-neutral-700">
      <div className="grid md:grid-cols-2 gap-8 items-start text-center md:text-left">
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Built with passion</h4>
          <p className="leading-relaxed text-sm text-neutral-700 dark:text-neutral-400">
            Designed in <strong>Figma</strong>, built with{" "}
            <strong>React.js</strong> and <strong>Tailwind CSS</strong>.
            <br />
            Coded in <strong>VS Code</strong>, deployed via{" "}
            <strong>Netlify</strong>.
          </p>
        </div>

        <div className="flex md:justify-end justify-center items-center gap-4">
          {[
            {
              href: "mailto:iamprathameshpatil2001@gmail.com",
              label: "Email",
              icon: <MdOutlineAlternateEmail />,
            },
            {
              href: "https://www.linkedin.com/in/prathamesh-patill/",
              label: "LinkedIn",
              icon: <FaLinkedinIn />,
            },
            {
              href: "https://github.com/Prath7057",
              label: "GitHub",
              icon: <FaGithub />,
            },
          ].map(({ href, label, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:shadow-lg hover:border-transparent hover:bg-gradient-to-tr from-purple-500 to-indigo-500 dark:from-purple-600 dark:to-blue-600 transition-all duration-300"
            >
              <span className="text-xl text-neutral-700 dark:text-neutral-200 group-hover:text-white transition">
                {icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-neutral-200 dark:border-neutral-700 pt-4 text-center text-xs text-neutral-500 dark:text-neutral-400">
        Made with <span className="text-red-500">❤️</span> by{" "}
        <strong>Prathamesh Patil</strong> • © {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
