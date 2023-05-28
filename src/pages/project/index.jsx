import { Link, useParams } from "react-router-dom";
import { projectsData } from "../../common/moks/projects";
import { ProjectButton } from "../../components/project-button";
import { IoMdRadioButtonOn } from "react-icons/io";
import { useEffect } from "react";

export const ProjectPage = () => {
  const { slug } = useParams();

  const { description, title, img, technologies, codeLink, demoLink } =
    Object.assign(...projectsData.filter((project) => project.slug === slug));

  useEffect(() => {
    const scrollTarget = document.getElementById("project");
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ scrollBehavior: "auto" });
    }
  }, []);

  return (
    <div id="project" className="h-screen flex flex-col">
      <div className="w-full h-[44%] relative">
        <img src={img} alt="" className="object-cover w-full h-full" />
        <div className="flex flex-col justify-end absolute top-0 w-full h-full bg-black/70 text-white pl-20 pb-24 max-lg:pl-10 max-md900:pl-5 max-sm480:pl-2">
          <h2 className="text-white font-semibold text-4xl tracking-wider">
            {title}
          </h2>
          <span className="flex">{technologies.slice(0, 3).join(" / ")}</span>
        </div>
      </div>
      <div className="w-full bg-zinc-200 flex-1 py-6 px-10 max-md900:px-5 max-sm480:px-2">
        <div className="flex justify-between max-md:flex-col gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-3xl tracking-wider">
              Project description
            </h2>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            <div className="flex gap-8">
              <ProjectButton>
                <Link to={demoLink} target="_blank">
                  Demo
                </Link>
              </ProjectButton>
              <ProjectButton>
                <Link to={codeLink} target="_blank">
                  Code
                </Link>
              </ProjectButton>
            </div>
          </div>
          <div className="p-6 bg-white/30 shadow-md shadow-gray-400 rounded-lg mb-auto">
            <h3 className="font-semibold text-center mb-2">Technologies</h3>
            <ul className="flex flex-col max-md:grid max-md:grid-cols-3 max-sm480:grid-cols-2 gap-2 text-gray-600">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-1 whitespace-nowrap max-sm:whitespace-normal">
                  <IoMdRadioButtonOn /> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between max-w-7xl mx-auto">
          <Link
            to="/#projects"
            className="block max-w-max text-slate-600 text-lg underline mt-6 hover:text-slate-900"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};
