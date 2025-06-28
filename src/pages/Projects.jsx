import React from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <>
      <div className="py-8 scroll-mt-20" id="full-stak-projects">
        <h2 className="text-2xl font-[600] mb-4 md:text-left text-center">
          Projects
        </h2>
        <div className="grid xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-5">
          <a
            href="https://demo.spyclass.co.in/site/login"
            target="_blank"
            className="block"
          >
            <div className="rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#232323] dark:hover:bg-[#fff]/10 hover:bg-black/20 transition-all duration-300 cursor-pointer flex xl:flex-row flex-col xl:items-center gap-5 group h-[100%]">
              <img
                src="spyclass.png"
                alt="SpyClass - School ERP Software"
                className="rounded-xl xl:w-[25%] w-[100%]"
              />
              <div className="grid gap-3 w-[100%]">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">
                      SpyClass - School ERP Software
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Built a scalable school ERP with real-time features and
                      third-party integrations.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://demo.spyclass.co.in/site/login"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined p-3 cursor-pointer text-neutral-700 dark:text-[#cfcfcf] rounded-full transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                        arrow_outward
                      </span>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm *:text-[#323232] *:dark:text-neutral-300">
                    <div>
                      <p>CodeIgniter 4</p>
                    </div>
                    <div>
                      <p>JavaScript</p>
                    </div>
                    <div>
                      <p>RESTful APIs</p>
                    </div>
                    <div>
                      <p>WebSockets</p>
                    </div>
                    <div>
                      <p>Firebase Notifications</p>
                    </div>
                    <div>
                      <p>OmniPay Integration</p>
                    </div>
                    <div>
                      <p>MySQL</p>
                    </div>
                    <div>
                      <p>Responsive UI</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm   md:text-left text-gray-700 dark:text-gray-300">
                  SpyClass is an advanced School ERP system designed with
                  modular architecture. I developed features like attendance,
                  homework, communication tools, biometric (eSSL) integration,
                  and push notifications using Firebase. Payment gateway support
                  via OmniPay ensures smooth fee transactions. The project
                  includes role-based access, real-time updates via WebSockets,
                  and a fully responsive admin panel.
                  <div className="mt-2">
                    <p>
                      <span className="font-medium text-black dark:text-white">
                        Username:
                      </span>{" "}
                      <span className="text-blue-700 dark:text-blue-400">
                        info@zeplinix.com
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-black dark:text-white">
                        Password:
                      </span>{" "}
                      <span className="text-blue-700 dark:text-blue-400">
                        123456
                      </span>
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </a>

          <a href="https://www.sky.com/" target="_blank" className="block">
            <div className="rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#232323] dark:hover:bg-[#fff]/10 hover:bg-black/20 transition-all duration-300 cursor-pointer flex xl:flex-row flex-col xl:items-center gap-5 group h-[100%]">
              <img
                src="sky.png"
                alt="Sky Marketing Management Tool"
                className="rounded-xl xl:w-[25%] w-[100%]"
              />
              <div className="grid gap-3 w-[100%]">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">
                      Sky - Marketing Management Tool
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Full Stack Development & Email Automation
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href="https://www.sky.com/" target="_blank">
                      <span className="material-symbols-outlined p-3 cursor-pointer text-neutral-700 dark:text-[#cfcfcf] rounded-full transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                        arrow_outward
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm *:text-[#323232] *:dark:text-neutral-300">
                  <div>
                    <p>CodeIgniter 4</p>
                  </div>
                  <div>
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <p>PostgreSQL</p>
                  </div>
                  <div>
                    <p>Bootstrap</p>
                  </div>
                  <div>
                    <p>Email APIs</p>
                  </div>
                  <div>
                    <p>Queue Optimization</p>
                  </div>
                </div>

                <p className="text-sm   md:text-left text-gray-700 dark:text-gray-300">
                  Developed a robust email campaign management system for Sky’s
                  marketing team. This tool sends over 11,000+ personalized
                  emails daily using optimized SQL queries and scalable
                  architecture. Integrated multiple third-party email services
                  to ensure smooth, high-speed delivery and real-time
                  performance. Built for performance, reliability, and marketing
                  automation efficiency.
                </p>
              </div>
            </div>
          </a>

          <a href="https://omunim.in/" target="_blank" className="block">
            <div className="rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#232323] dark:hover:bg-[#fff]/10 hover:bg-black/20 transition-all duration-300 cursor-pointer flex xl:flex-row flex-col xl:items-center gap-5 group h-[100%]">
              <img
                src="omunim.png"
                alt="Omunim Jewellery Software"
                className="rounded-xl xl:w-[25%] w-[100%]"
              />
              <div className="grid gap-3 w-[100%]">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">
                      Omunim Jewellery Software
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      A product-based ERP solution tailored for jewellery
                      businesses.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href="https://omunim.in/" target="_blank">
                      <span className="material-symbols-outlined p-3 cursor-pointer text-neutral-700 dark:text-[#cfcfcf] rounded-full transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                        arrow_outward
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm *:text-[#323232] *:dark:text-neutral-300">
                  <div>
                    <p>PHP</p>
                  </div>
                  <div>
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <p>AJAX</p>
                  </div>
                  <div>
                    <p>MySQL</p>
                  </div>
                  <div>
                    <p>HTML & CSS</p>
                  </div>
                  <div>
                    <p>Bootstrap</p>
                  </div>
                  <div>
                    <p>REST APIs</p>
                  </div>
                </div>

                <p className="text-sm   md:text-left text-gray-700 dark:text-gray-300">
                  Omunim Jewellery Software is a product-based ERP solution
                  crafted for jewellery businesses, streamlining daily
                  operations and financial tracking. I developed key modules
                  like Loan & Scheme Management, Sell-Purchase, and Accounting
                  Reports, while integrating the Paytm payment gateway for
                  secure transactions. With technologies like PHP, JavaScript,
                  AJAX, and Bootstrap, the system delivers seamless UI
                  experiences and end-to-end business automation.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
