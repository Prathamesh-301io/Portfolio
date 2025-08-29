import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // <-- add loading state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // disable button

    try {
      const response = await fetch(
        "https://nodemailer-34ze.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
    } finally {
      setLoading(false); // enable button again
    }
  };

  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* Email & Resume Block */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-lg text-center md:text-left">
            Feel free to reach out directly via email:
          </p>
          <a
            href="mailto:iamprathameshpatil2001@gmail.com"
            className="inline-flex items-center justify-center md:justify-start gap-3 text-base sm:text-lg p-4 rounded-xl border dark:border-gray-600 border-gray-300 dark:hover:bg-[#232323] hover:bg-black/10 transition-all duration-300"
          >
            <span className="break-all">iamprathameshpatil2001@gmail.com</span>
            <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1">
              arrow_outward
            </span>
          </a>

          {/* Resume download section */}
          <div className="text-center md:text-left p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg">
            <p className="text-lg sm:text-xl font-semibold text-white mb-3">
              Ready to explore my adventure in coding?
              <span className="block text-sm font-normal mt-1">
                Check out my resume and see what I’ve been up to!
              </span>
            </p>
            <a
              href="/resume/Prathamesh_Patil_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-purple-700 font-bold hover:bg-gray-100 transition-all shadow-md"
            >
              <span>📄 Take a Peek!</span>
              <span className="material-symbols-outlined">download</span>
            </a>
          </div>
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
            disabled={loading} // disable while submitting
            className={`w-full sm:w-auto px-6 py-2 rounded-md font-semibold transition-transform duration-300 ${
              loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-black text-white dark:bg-white dark:text-black hover:scale-105"
            }`}
          >
            {loading ? "Sending..." : "Submit"} {/* change text */}
          </button>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

export default Contact;
