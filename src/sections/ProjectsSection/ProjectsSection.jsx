import React from "react";
import "./ProjectsSection.modules.css";
import ProjectsBox from "../../features/ProjectsBox/ProjectsBox";
import { motion } from "framer-motion";
import HeadSection from "../../features/HeadSection/HeadSection";
import FilterProjectsLinks from "../../features/FilterProjectsLinks/FilterProjectsLinks";
import { ProjectsData } from "../../data";

export default function ProjectsSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0 }}
      >
        <section
          id="Projects"
          className="projects py-12 bg-sec-color min-h-screen t-w"
        >
          <div className="container mx-auto px-3 md:px-10">
            <HeadSection
              head="Featured Projects"
              dec="A selection of my recent work"
            />
            <FilterProjectsLinks data={ProjectsData} />
          </div>
        </section>
      </motion.div>
    </>
  );
}
