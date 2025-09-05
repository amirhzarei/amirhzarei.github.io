import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaAws } from "react-icons/fa6";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiAstro,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  astro: {
    title: "Astro",
    bg: "black",
    fg: "white",
    icon: <SiAstro />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <FaAws />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <Image src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <Image src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "musicplayer",
    category: "FrontEnd",
    title: "Music Player",
    src: "/assets/projects-screenshots/musicplayer/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "",
    github: "https://github.com/amirhzarei/music-player",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite, PROJECT_SKILLS.framerMotion],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A clean, lightweight, installable Progressive Web App music player with offline-ready shell, local playlist persistence, and smooth micro-interactions — built to learn core PWA + modern React fundamentals without extra framework noise.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/musicplayer/1.png`,
              `${BASE_PATH}/musicplayer/2.png`,
              `${BASE_PATH}/musicplayer/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "todolist",
    category: "FrontEnd And BackEnd",
    title: "Task Flow App",
    src: "/assets/projects-screenshots/todolist/1.png",
    screenshots: ["/assets/projects-screenshots/todolist/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts
      ],
      backend: [
        PROJECT_SKILLS.supabase,
      ],
    },
    live: "",
    github: "https://github.com/amirhzarei/To-Do-List",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A modern, real-time task manager built with Next.js 14, TypeScript, TailwindCSS, and Radix UI offers collaborative list sharing, push notifications, commenting, file attachments, and activity logs.
          </TypographyP>
          <TypographyP className="font-mono ">
            A modern, real-time, offline-first task manager built with Next.js 14 App Router, TypeScript, TailwindCSS, and Radix UI primitives, following a clean architecture. This application enables users to organize their tasks into customizable lists, add comments and attachments to tasks, and smoothly reorder or delete tasks as needed. Collaboration is at the heart of the app—users can share task lists, invite others, view the number of collaborators in each list, and leave shared lists when desired. Real-time push notifications keep all participants updated on changes, while robust authentication ensures secure login and registration. The app features comprehensive activity logs for tracking changes, a powerful search for locating tasks or lists quickly, and a responsive design for seamless use across devices. Offline-first capabilities allow users to manage tasks even without an internet connection, making this task manager a reliable companion for both individual productivity and team collaboration.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/todolist/1.png`,
              `${BASE_PATH}/todolist/2.png`,
              `${BASE_PATH}/todolist/3.png`,
              `${BASE_PATH}/todolist/4.png`,
              `${BASE_PATH}/todolist/5.png`,
              `${BASE_PATH}/todolist/6.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "blog",
    category: "FrontEnd",
    title: "My Blog",
    src: "/assets/projects-screenshots/blog/1.png",
    screenshots: ["assets/projects-screenshots/blog/1.png"],
    live: "https://blog-flax-theta.vercel.app",
    github: "https://github.com/amirhzarei/blog",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.astro
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my corner of the web—where pixels, code, and creativity collide to build dope experiences.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2">
            Welcome to my digital corner, where design and development crash into each other in the best way possible. I’m obsessed with building playful, interactive experiences that go beyond static pixels—think 3D keyboards, quirky UI experiments, and creative takes on the web. This blog is my space to share those ideas, break down the process, and maybe spark some inspiration along the way. Whether you’re here for code snippets, design vibes, or just curious experiments, you’re in the right place.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blog/1.png`,
              `${BASE_PATH}/blog/2.png`,
              `${BASE_PATH}/blog/3.png`,
              `${BASE_PATH}/blog/4.png`,
              `${BASE_PATH}/blog/5.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "FrontEnd",
    title: "My Portfolio",
    src: "/assets/nav-link-previews/home.png",
    screenshots: ["about.png", "skils.png"],
    live: "https://amirhzarei.github.io/",
    github: "https://github.com/amirhzarei/amirhzarei.github.io",
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.framerMotion, PROJECT_SKILLS.gsap, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            My portfolio is a collection of projects where creativity meets code. From sleek user interfaces to experimental 3D interactions, each piece reflects my passion for crafting experiences that feel intuitive, engaging, and a little unexpected. I focus on blending design and development—building not just functional websites, but memorable digital moments. Every project is a chance to push the limits of frontend, experiment with new ideas, and show what’s possible when code becomes a creative tool.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/nav-link-previews/home.png`,
              `/assets/nav-link-previews/about.png`,
              `/assets/nav-link-previews/skils.png`,
              `/assets/nav-link-previews/achivments.png`,
              `/assets/nav-link-previews/achivments.png`,
              `/assets/nav-link-previews/experience.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "infinitescrolling",
    category: "FrontEnd",
    title: "Infinite Scrolling",
    src: "/assets/projects-screenshots/infinitescrolling/1.png",
    screenshots: ["1.png"],
    live: "",
    github: "https://github.com/amirhzarei/infinite-scrolling",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.vite, PROJECT_SKILLS.css, PROJECT_SKILLS.html],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Infinite scrolling is a popular web interface pattern that automatically loads new content as users reach the bottom of a page, creating a seamless browsing experience without traditional pagination. A simple infinite scrolling project typically involves detecting when a user has scrolled near the bottom of the viewport, then triggering an API call or data fetch to load additional content items.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/infinitescrolling/1.png`
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dynamicthem",
    category: "FrontEnd",
    title: "Dynamic Them",
    src: "/assets/projects-screenshots/dynamicthem/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "",
    github: "https://github.com/amirhzarei/dynamic-them",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind,],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A dynamic theme project involves creating a web application or website that can automatically switch between different visual themes, most commonly light and dark modes, based on user preferences or system settings.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/savinderpuriportfolio/1.png`,
              `${BASE_PATH}/savinderpuriportfolio/2.png`,
              `${BASE_PATH}/savinderpuriportfolio/3.png`,
              `${BASE_PATH}/savinderpuriportfolio/4.png`,
              `${BASE_PATH}/savinderpuriportfolio/5.png`,
              `${BASE_PATH}/savinderpuriportfolio/6.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "fastfoodcatalog",
    category: "FrontEnd",
    title: "Fast Food Catalog",
    src: "/assets/projects-screenshots/fastfoodcatalog/1.png",
    screenshots: ["1.png"],
    live: "",
    github: "https://github.com/amirhzarei/fast-food-catalog",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.css, PROJECT_SKILLS.html],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A simple fast food catalog project is a web application that displays a menu of food items in an organized, browsable format, typically mimicking the experience of viewing a restaurant's menu online. The project usually features a clean, responsive layout with food categories like burgers, pizzas, drinks, and desserts, where each item displays an image, name, description, and price.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/fastfoodcatalog/1.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "ifs",
    category: "Web Development",
    title: "IFS",
    src: "/assets/projects-screenshots/ifs/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.ifscurrency.com/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.css, PROJECT_SKILLS.html, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.aws],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An IFS Currency website project would be a comprehensive money transfer platform that enables users to send money globally through a streamlined three-step process. The website features a user-friendly interface with "Register Online" through quick sign-up, "Set Your Transfer" to choose amounts with real-time exchange rates, and "Confirm and Send" to finalize secure payments.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ifs/1.png`,
              `${BASE_PATH}/ifs/2.png`,
              `${BASE_PATH}/ifs/3.png`,
              `${BASE_PATH}/ifs/4.png`,
              `${BASE_PATH}/ifs/5.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "kixy",
    category: "Web Development",
    title: "Kixy",
    src: "/assets/projects-screenshots/kixy/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.kixy.com",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.css, PROJECT_SKILLS.html, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A Kixy website project would focus on creating a modern social finance platform with a vibrant, user-friendly interface that emphasizes the social aspect of money management. The core features include "Send Money," "Request Money," and "Split Bills" International Money Transfer | Send Money Abroad with Wise functionality, all integrated within a social messaging environment. The website would likely feature a colorful, mobile-first design with chat-like interfaces, group transaction capabilities, and social features that make financial interactions feel more like conversations with friends.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/kixy/1.png`,
              `${BASE_PATH}/kixy/2.png`,
              `${BASE_PATH}/kixy/3.png`,
              `${BASE_PATH}/kixy/4.png`,
              `${BASE_PATH}/kixy/5.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "oranex",
    category: "Web Development",
    title: "Oranex.ir",
    src: "/assets/projects-screenshots/oranex/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.oranex.ir",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.css, PROJECT_SKILLS.html, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An Oranex website project would focus on creating a bilingual (Persian/English) investment platform with multiple asset trading capabilities. The core features include gold market investment opportunities with any amount of capital, cryptocurrency trading with easy buy/sell processes, physical gold purchasing with minimal fees, and gift card functionality for valuable assets.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/oranex/1.png`,
              `${BASE_PATH}/oranex/2.png`,
              `${BASE_PATH}/oranex/3.png`,
              `${BASE_PATH}/oranex/4.png`,
              `${BASE_PATH}/oranex/5.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "oranexcom",
    category: "Web Development",
    title: "Oranex.com",
    src: "/assets/projects-screenshots/oranexcom/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.oranex.com",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.css, PROJECT_SKILLS.html, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An Oranex website project would focus on creating a bilingual (Persian/English) investment platform with multiple asset trading capabilities. The core features include gold market investment opportunities with any amount of capital, cryptocurrency trading with easy buy/sell processes, physical gold purchasing with minimal fees, and gift card functionality for valuable assets.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/oranexcom/1.png`,
              `${BASE_PATH}/oranexcom/2.png`,
              `${BASE_PATH}/oranexcom/3.png`,
              `${BASE_PATH}/oranexcom/4.png`,
              `${BASE_PATH}/oranexcom/5.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
