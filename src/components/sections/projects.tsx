"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects" className="max-w-7xl mx-auto md:mb-40">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Projects
        </h2>
      </Link>

      <div className="px-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          loop={true}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.src} className="!w-[400px]">
              <ProjectBox project={project} onClick={(input: Project) => setSelectedProject(input)} handleOpenModal={(input: boolean) => setIsOpen(input)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {selectedProject && <Modall project={selectedProject} isOpen={isOpen} setOpen={setIsOpen} />}
    </section>
  );
};

const ProjectBox = ({ project, onClick, handleOpenModal }: { project: Project, onClick: (input: Project) => void, handleOpenModal: (input: boolean) => void }) => {

  const handleClick = () => {
    onClick(project);
    handleOpenModal(true);
  }

  return (
    <div className="bg-transparent flex justify-center" onClick={handleClick}>
      <div
        className="relative w-[400px] h-auto rounded-lg overflow-hidden"
        style={{ aspectRatio: "3/2" }}
      >
        <Image
          className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
          src={project.src}
          alt={project.title}
          width={300}
          height={300}
        />
        <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
          <div className="flex flex-col h-full items-start justify-end p-6">
            <div className="text-lg text-left">{project.title}</div>
            <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
              {project.category}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Modall = ({ project, isOpen, setOpen }: { project: Project, isOpen: boolean, setOpen: (open: boolean) => void }) => {

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-center justify-center">
      <Modal
        open={isOpen}
        setOpen={setOpen}
        className="md:max-w-4xl md:max-h-[80%] overflow-auto"
      >
        <div className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button onClick={handleCloseModal} className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <Link href={project.live} target="_blank">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {project.content}
    </>
  );
};

export default ProjectsSection;
