import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { GiGiftOfKnowledge } from "react-icons/gi";

export const sideNavList = [
  {
    path: "#main",
    title: "Home",
    icon: <HiOutlineHome />,
  },
  {
    path: "#about-me",
    title: "Person",
    icon: <MdOutlinePersonOutline />,
  },
  {
    path: "#skills",
    title: "Work",
    icon: <GiGiftOfKnowledge />,
  },
  {
    path: "#projects",
    title: "Project",
    icon: <AiOutlineProject />,
  },
  {
    path: "#contact",
    title: "Contact",
    icon: <HiOutlineMail />,
  },
];
