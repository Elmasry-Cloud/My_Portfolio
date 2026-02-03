import React from "react";
import "./AboutSection.modules.css";
import Image from "../../assets/Khaled-removebg-preview.png";
import { motion } from "framer-motion";
import HeadSection from "../../features/HeadSection/HeadSection";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <section id="About" className="about py-12 bg-sec-color min-h-screen t-w">
        <HeadSection
          head="About me"
          dec="Get to know more about my background and passion"
        />
        <div className="container mx-auto px-3 md:px-10 flex flex-col md:flex-row items-center gap-5">
          <div className="image w-[70%] md:w-[45%] flex items-center justify-center">
            <div className="lay lg:w-[65%] lg:h-[65%] relative z-10">
              <img
                src={Image}
                alt="Portfolio-img"
                className="bg-[#0f172a] w-full h-full"
              />
            </div>
          </div>
          <div className="info mt-12 md:mt-0 md:w-[50%]">
            I'm a passionate Front-End Developer dedicated to crafting
            responsive and engaging user experiences. I specialize in modern web
            technologies including HTML, CSS, JavaScript, React.js, and Tailwind
            CSS, and I enjoy turning ideas into interactive, high-performance
            websites and applications.
            <br />
            <br />I thrive in collaborative environments that value creativity
            and continuous learning. I'm always exploring new tools and
            frameworks to improve code quality and user experience.
            <br />
            <br />
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge
            through tech blogs and tutorials. I believe in continuous learning
            and pushing the boundaries of what's possible on the web.
          </div>
        </div>
      </section>
    </motion.div>
  );
}
