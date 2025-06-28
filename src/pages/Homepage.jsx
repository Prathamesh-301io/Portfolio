import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Frontend_Projects from "./Frontend_Projects";

function Homepage() {
  return (
    <div className="md:px-40 px-5 text-left mt-6 dark:text-neutral-300 text-[#343434] font-inter">
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Profile Intro */}
        <div>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <img
              src="/profile.jpg"
              alt="Prathamesh Patil profile photo"
              className="w-[150px] sm:w-[200px] aspect-square object-cover rounded-full border dark:border-neutral-300 border-[#343434] shadow-lg transition-transform hover:scale-105"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">
                Prathamesh Patil
                <span className="text-[#fdca40] text-4xl sm:text-5xl">.</span>
              </h1>
              <h2 className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">
                Full Stack PHP Developer
              </h2>
            </div>
          </div>

          <div className="mt-6 md:text-left leading-relaxed text-[15px] sm:text-base">
            <p>
              I’m a Full Stack Developer with hands-on experience in building
              scalable web applications using <strong>Laravel</strong>,{" "}
              <strong>CodeIgniter</strong>, <strong>React</strong>, and{" "}
              <strong>JavaScript</strong>. I develop real-time systems using{" "}
              <strong>REST APIs</strong>, <strong>WebSockets</strong>, and{" "}
              <strong>Firebase</strong>. I'm also skilled in{" "}
              <strong>MySQL</strong>, <strong>PostgreSQL</strong>,{" "}
              <strong>MongoDB</strong>, and have implemented systems like{" "}
              <strong>eSSL biometric</strong> and{" "}
              <strong>payment gateways</strong> into ERP modules. I focus on
              clean, responsive UI with TailwindCSS, Bootstrap, HTML, and CSS.
            </p>
          </div>
        </div>

        <div>
          <div className="hidden md:grid grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
            {[
              "laravel",
              "codeigniter",
              "html",
              "css",
              "js",
              "reactjs",
              "nodeJs",
              "mongodb",
              "postman",
              "mysql",
              "firebase",
              "github",
            ].map((skill) => (
              <div
                key={skill}
                className={`bg-[#E9E9E9] dark:bg-[#232323] rounded-xl flex items-center justify-center w-full aspect-square p-4 hover:scale-105 transition-transform skill-${skill.toLowerCase()}`}
              >
                <img
                  src={`/${skill}.png`}
                  alt={`${skill} logo`}
                  className="w-[60px] sm:w-[80px] object-contain"
                />
              </div>
            ))}
          </div>

          <div className="md:hidden flex flex-wrap gap-3 justify-center mt-4">
            {[
              "laravel",
              "reactjs",
              "nodeJs",
              "html",
              "css",
              "js",
              "mysql",
              "postman",
              "mongodb",
              "firebase",
            ].map((skill) => (
              <div
                key={skill}
                className={`bg-[#E9E9E9] dark:bg-[#232323] rounded-xl flex items-center justify-center w-[100px] h-[100px] p-4 skill-${skill.toLowerCase()}`}
              >
                <img
                  src={`/${skill}.png`}
                  alt={`${skill} logo`}
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Down Icon */}
      <div className="flex justify-center mt-16 animate-bounce">
        <a href="#experience" aria-label="Scroll to experience section">
          <span className="material-symbols-outlined text-neutral-500 border rounded-full p-3 dark:border-neutral-700 border-neutral-300 cursor-pointer">
            keyboard_arrow_down
          </span>
        </a>
      </div>

      {/* Sections */}
      <Experience />
      <Projects />
      <Frontend_Projects />
      <Contact />
    </div>
  );
}

export default Homepage;
