import React from "react";
import "./HomeSection.modules.css";
import ImagePort from "../../assets/Khaled-modified-removebg-preview.png";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <>
      {/* <div className="t-w pt-20">HomeSection</div> */}
      <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <section
          id="Home"
          className="layout h-screen t-w flex items-center justify-center"
        >
          {/* flex justify-center items-center md:items-center md:justify-between flex-col md:flex-row */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            {/* mt-50 md:mt-0 */}
            <div className="info order-2">
              <h3 className="font-bold text-3xl">Hi, I am</h3>
              <h1 className="font-bold mt-5 mb-2 text-6xl">Khaled Ali</h1>
              <h5 className="text gradient-text pe-2 font-bold text-3xl p-color overflow-hidden">
                Front-end Developer
              </h5>
              <div className="social mt-12 flex items-center justify-start gap-5">
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
              {/* <div className="social mt-12 flex items-center justify-start gap-5">
                <i className="fa-brands fa-facebook cursor-pointer fa-2xl"></i>
                <i className="fa-brands fa-github cursor-pointer fa-2xl"></i>
                <i className="fa-brands fa-instagram cursor-pointer fa-2xl"></i>
                <i className="fa-brands fa-square-linkedin cursor-pointer fa-2xl"></i>
              </div> */}
            </div>
            {/* flex justify-center md:order-2 mb-16 md:mb-0 xm:mt-0 */}
            <div className="image rounded-full w-3/5 mx-auto md:w-full md:mx-0 xl:w-3/4 order-1 md:order-3 my-18 md:my-0">
              {/* w-3/4 */}
              <img
                className="w-full rounded-full"
                src={ImagePort}
                alt="Portfolio-image"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* <section
          id="Home"
          className="layout t-w h-screen flex items-center justify-center"
        >
          <div className="container mx-auto flex md:items-center justify-center flex-col md:flex-row">
            <div className="info flex-1 order-1">
              <h3 className="font-bold text-3xl">Hi, I am</h3>
              <h1 className="font-bold mt-5 mb-2 text-6xl">Khaled Ali</h1>
              <h5 className="text gradient-text pe-2 font-bold text-3xl p-color overflow-hidden">
                Front-end Developer
              </h5>
              <div className="social mt-12 flex items-center justify-start gap-5">
                <i className="fa-brands fa-facebook cursor-pointer fa-2xl"></i>
                <i className="fa-brands fa-github cursor-pointer fa-2xl"></i>
                <i className="fa-brands fa-instagram cursor-pointer fa-2xl"></i>
                <i className="fa-brands fa-square-linkedin cursor-pointer fa-2xl"></i>
              </div>
            </div>
            <div className="image flex-1 flex justify-center md:order-2 mb-16 md:mb-0 xm:mt-0 mt-50 md:mt-0">
              <div className="image w-3/4">
                <img className="w-full" src={ImagePort} alt="Portfolio-image" />
              </div>
            </div>
          </div>
        </section> */}
      </motion.div>
    </>
  );
}
