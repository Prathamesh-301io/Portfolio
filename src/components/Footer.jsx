import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-full font-inter dark:text-neutral-300 text-[#343434] px-5 md:px-40 pt-20 pb-10 border-t dark:border-neutral-700 border-neutral-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
        <div>
          <p className="text-sm leading-relaxed">
            Designed in <span className="font-semibold">Figma</span>, built with{" "}
            <span className="font-semibold">React.js</span> &{" "}
            <span className="font-semibold">Tailwind CSS</span>.
            <br className="hidden sm:inline" />
            Deployed on <span className="font-semibold">Vercel</span> using{" "}
            <span className="font-semibold">Visual Studio Code</span>.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          <a
            href="mailto:iamprathameshpatil2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            <MdOutlineAlternateEmail className="text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-white text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/prathamesh-patill/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            <FaLinkedinIn className="text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-white text-lg" />
          </a>
          <a
            href="https://github.com/Prath7057"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            <FaGithub className="text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-white text-lg" />
          </a>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="text-xs text-neutral-500 dark:text-neutral-500 text-center mt-8">
        © {new Date().getFullYear()} Prathamesh Patil. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
