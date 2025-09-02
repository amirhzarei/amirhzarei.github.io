import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import DeveloperCard from "../DeveloperCard";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen md:mb-40")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col md:flex-row">
              <div className="">
                <div>
                  <BlurIn delay={0.7}>
                    <p
                      className={cn(
                        "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                        "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                      )}
                    >
                      Hi, I am
                      <br className="md:hidden" />
                    </p>
                  </BlurIn>
                  <BlurIn delay={1}>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <h1
                          className={cn(
                            "font-thin text-6xl text-transparent text-slate-800 ml-1 text-left",
                            "cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl "
                          )}
                        >
                          {config.author.split(" ")[0]}
                          <br className="md:block hiidden" />
                          {config.author.split(" ")[1]}
                          {/* PLEASE hello??

                        <br className="md:block hiidden" />
                        UNMUTE ME 😢😢 */}
                        </h1>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="dark:bg-white dark:text-black"
                      >
                        theres something waiting for you in devtools
                      </TooltipContent>
                    </Tooltip>
                  </BlurIn>
                  <BlurIn delay={1.2}>
                    <p
                      className={cn(
                        "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                        "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                      )}
                    >
                      FrontEnd Developer
                    </p>
                  </BlurIn>
                </div>
                <div className="mt-8 md:ml-2 flex flex-col gap-3">
                  <Link
                    href={
                      "https://drive.google.com/file/d/16CrNuz2j-NRNtO8WsCUrxZyV8HiTYzP_/view?usp=share_link"
                    }
                    target="_blank"
                    className="flex-1"
                  >
                    <BoxReveal delay={2} width="43%" >
                      <Button className="flex items-center gap-2 w-full">
                        <File size={24} />
                        <p>Resume</p>
                      </Button>
                    </BoxReveal>
                  </Link>
                  <div className="md:self-start flex gap-3">
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link href={"#contact"}>
                          <Button
                            variant={"outline"}
                            className="block w-full overflow-hidden"
                          >
                            Hire Me
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>pls 🥹 🙏</p>
                      </TooltipContent>
                    </Tooltip>
                    <Link
                      href={config.social.github}
                      target="_blank"
                    >
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div id="about" className="w-full p-20 pl-36 pr-0 flex items-center justify-center">
                <DeveloperCard />
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
