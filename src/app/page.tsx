"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import Experiences from "@/components/sections/experiences";
import Achivment from "@/components/sections/achivment";

function MainPage() {
  return (
    <div>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <HeroSection />
          <SkillsSection />
          <Experiences />
          <Achivment />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </div>
  );
}

export default MainPage;
