import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiGithub,
} from "react-icons/si";

export const techSkills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-600" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript className="text-yellow-400 bg-black" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-500" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    name: "MUI",
    icon: <SiMui className="text-blue-600" />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
];

export const softSkills = [
  {
    name: "Communication",
  },
  {
    name: "Problem-solving",
  },
  {
    name: "Attention to detail",
  },
  {
    name: "Teamwork",
  },
  {
    name: "Continuous learning",
  },
  {
    name: "Not crazy (but it's not exactly)",
  },
];
