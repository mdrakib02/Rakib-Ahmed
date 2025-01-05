import React from "react";
import Hero from "../Components/Hero/Hero";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection";
import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";
import Contact from "../Components/Contact";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <AboutSection></AboutSection>
    </div>
  );
}
