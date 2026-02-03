import React from "react";
import "./ContactSection.modules.css";
import { motion } from "framer-motion";
import HeadSection from "../../features/HeadSection/HeadSection";

export default function ContactSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <section id="Contact" className="contact py-12 min-h-screen t-w">
          <HeadSection
            head="Let's Connect"
            dec="Ready to collaborate or have a project in mind? Let's make something amazing together."
          />
          <div className="container mx-auto px-3 md:px-10">
            <div className="location flex items-center justify-center">
              <p>
                <i className="fa-solid fa-location-dot fa-lg me-2"></i>
                Cairo, Egypt
              </p>
            </div>
            <form action="" className="mt-10">
              <div className="content w-3/4 mx-auto">
                <div className="relative z-0 my-12">
                  <input
                    type="text"
                    id="floating_standard"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#60a5fa] peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-[#60a5fa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative z-0 my-12">
                  <input
                    type="text"
                    id="floating_Email"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#60a5fa] peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_Email"
                    className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-[#60a5fa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative z-0 my-12">
                  <textarea
                    type="text"
                    id="floating_desc"
                    rows={7}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-[#60a5fa] peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_desc"
                    className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-[#60a5fa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Your Message
                  </label>
                </div>
                <button
                  className="btn px-7 py-2 rounded-xl cursor-pointer w-full border overflow-hidden font-bold border-white/50 relative"
                  type="submit"
                >
                  Send Message
                </button>
                <button
                  className="mt-5 px-7 py-2 rounded-xl cursor-pointer border gradient-text font-bold border-white/50 block mx-auto"
                  type="submit"
                >
                  <i className="fa-solid fa-file me-2"></i>
                  View Resume
                </button>
                <div className="social mt-12 flex items-center justify-center gap-5">
                  <a href="" target="_blank">
                    <i className="fa-brands fa-facebook cursor-pointer fa-2xl"></i>
                  </a>
                  <a href="https://github.com/Elmasry-Cloud" target="_blank">
                    <i className="fa-brands fa-github cursor-pointer fa-2xl"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="fa-brands fa-instagram cursor-pointer fa-2xl"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="fa-brands fa-square-linkedin cursor-pointer fa-2xl"></i>
                  </a>
                  <a href="https://wa.me/201007085234" target="_blank">
                    <i className="fa-brands fa-square-whatsapp cursor-pointer fa-2xl"></i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </motion.div>
    </>
  );
}
