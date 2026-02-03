import React from "react";
import "./SkillsSection.modules.css";
import HeadSection from "../../features/HeadSection/HeadSection";
import { motion } from "framer-motion";
import { SkillsData } from "../../data";

import SkillsSlider from "../../features/SkillsSlider/SkillsSlider";

export default function SkillsSection() {
  //   console.log(SkillsData);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <section id="Skills" className="about py-12 pb-24 t-w">
          <HeadSection
            head="Skills"
            dec="The skills, tools and technologies I am really good at:"
          />
          <div className="container mx-auto px-3 md:px-10">
            {/* grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 */}
            <div className="skill">
              <SkillsSlider SkillsData={SkillsData} />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
