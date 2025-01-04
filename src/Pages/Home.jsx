import React from "react";
import Hero from "../Components/Hero/Hero";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection";
import AboutSection from "../Components/AboutSection";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <AboutSection></AboutSection>
    </div>
  );
}
