import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://nodemailer-34ze.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "iamprathameshpatil2001@gmail.com", // or dynamic
            subject: `New message from ${formData.name}`,
            message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
          `,
          }),
        }
      );

      if (response.ok) {
        toast.success("Thanks for contacting me!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* Email Block */}
        <div className="flex flex-col justify-center">
          <p className="text-lg mb-4 text-center md:text-left">
            Feel free to reach out directly via email:
          </p>
          <a
            href="mailto:iamprathameshpatil2001@gmail.com"
            className="inline-flex flex-wrap items-center justify-center md:justify-start gap-3 text-base sm:text-lg p-4 rounded-xl border dark:border-gray-600 border-gray-300 dark:hover:bg-[#232323] hover:bg-black/10 transition-all duration-300"
          >
            <span className="break-all">iamprathameshpatil2001@gmail.com</span>
            <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1">
              arrow_outward
            </span>
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-6 rounded-xl border dark:border-gray-600 border-gray-300 bg-white/20 dark:bg-black/20 shadow-sm backdrop-blur-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-500 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-500 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-500 bg-transparent text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black font-semibold hover:scale-105 transition-transform duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

export default Contact;
