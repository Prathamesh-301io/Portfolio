import React from "react";

function Experience() {
  const experienceData = [
    {
      title: "Full Stack PHP Developer",
      company: "301io",
      duration: "March 2023 - Present",
      description:
        "At 301io, I work on scalable ERP systems and web platforms using Laravel, React, and real-time technologies. I’ve implemented Firebase push notifications, WebSockets, biometric integrations, and responsive UI/UX features to deliver optimized business solutions.",
      tech: [
        "Laravel",
        "CodeIgniter",
        "React",
        "JavaScript",
        "REST API's",
        "Firebase",
        "WebSockets",
        "HTML & CSS",
        "SEO",
      ],
    },
    {
      title: "Software Developer",
      company: "SoftwareGen Technologies",
      duration: "September 2023 - January 2025",
      description:
        "Built a jewelry ERP with modules like Scheme, Loan, Sell-Purchase, and Accounting. Integrated Paytm payment gateway and contributed to an e-commerce site using CodeIgniter and RESTful APIs.",
      tech: [
        "PHP",
        "CodeIgniter",
        "JavaScript",
        "Ajax",
        "REST API's",
        "MySQL",
        "HTML & CSS",
        "Bootstrap",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 md:text-left text-center text-slate-900 dark:text-slate-100">
        Experience
      </h2>

      <div className="grid gap-6">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
          >
            {/* TOP ROW: Position, Company, Years + Tech */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              {/* LEFT SIDE */}
              <div>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {exp.title}
                </p>
                <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {exp.duration}
                </p>
              </div>

              {/* RIGHT SIDE (Tech Stack) */}
              <div className="flex flex-wrap gap-2 *:dark:bg-white/10 *:bg-gray-100 *:dark:text-white *:text-gray-800 *:text-sm *:px-3 *:py-1 *:rounded-full justify-start md:justify-end">
                {exp.tech.map((tech, i) => (
                  <div key={i}>{tech}</div>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed ">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
