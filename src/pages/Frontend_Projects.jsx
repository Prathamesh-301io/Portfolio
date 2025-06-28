import React from "react";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    name: "SpyClass Website",
    image: "spyclass-frontend.png",
    link: "https://spyclass.co.in/",
    shortDesc: "Landing site for SpyClass School ERP",
    description:
      "Designed a responsive landing site for SpyClass ERP using CodeIgniter, Tailwind CSS, and libraries like GSAP, AOS, and Animate.css. Ensures smooth animations, mobile-first responsiveness, and fast performance across all devices including iPhones.",
    stack: [
      "CodeIgniter",
      "Tailwind CSS",
      "JavaScript",
      "Tawk.to",
      "GSAP",
      "AOS",
      "Animate.css",
    ],
  },
  {
    name: "301io Company Website",
    image: "301io.png",
    link: "https://301io.in/",
    shortDesc: "Company profile & service showcase",
    description:
      "Built the company website for 301io using CodeIgniter, Tailwind CSS, and performance-enhancing libraries. Features include animated sections, optimized load times, and intuitive UI/UX.",
    stack: [
      "CodeIgniter",
      "JavaScript",
      "animate.css",
      "Tailwind CSS",
      "GSAP",
      "UI Libraries",
    ],
  },
  {
    name: "GautamLabdhi Certificate Generator",
    image: "gautamlabdhi.png",
    link: "https://gautamlabdhidiagnostic.in/",
    shortDesc: "Certificate generation for Kumbh Mela attendees",
    description:
      "A single-page application that allows centwants to fill out forms and receive certificates. Features include WhatsApp API integration for bulk messaging, auto PDF generation, and admin panel for customer data management.",
    stack: ["CodeIgniter", "JavaScript", "MySQL", "WhatsApp API", "Tailwind"],
  },
  {
    name: "YourA-Z Website",
    image: "youraz.png",
    link: "https://youra2z.com/",
    shortDesc: "Modern business website",
    description:
      "Company website built using CodeIgniter 4, JavaScript, Tailwind CSS, and Figma-based designs. Fully responsive layout optimized for branding, services display, and lead capture.",
    stack: ["CodeIgniter 4", "JavaScript", "Tailwind CSS", "Figma"],
  },
];

function FrontendProjects() {
  return (
    <section className="py-10 scroll-mt-20" id="frontend-projects">
      <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
        Frontend Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl overflow-hidden shadow-lg bg-[#F3F4F6] dark:bg-[#1f1f1f] transition-all hover:scale-[1.01] hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.shortDesc}
                </p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-right">
                <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                  Visit Project <FaArrowRight className="text-xs" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default FrontendProjects;
