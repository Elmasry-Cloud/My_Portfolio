import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomeSection from "./sections/HomeSection/HomeSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import "flowbite";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-3 md:px-10 py-12">
        <HomeSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
