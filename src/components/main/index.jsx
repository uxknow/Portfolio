import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div
      id="main"
      className="w-full h-screen bg-cover bg-right bg-no-repeat bg-[url('assets/img/neom.jpg')]"
    >
      <div className="absolute h-screen top-0 left-0 right-0 bottom-0 bg-white/40"></div>
      <div className="h-full w-full p-20">
        <div className="flex relative flex-col gap-4 h-full max-w-2xl m-auto justify-center max-md:items-center max-md:text-center">
          <div className="text-slate-950">
            <h1 className="text-5xl font-bold leading-snug">
              I'm Borys Grebenuik
            </h1>
            <span className="text-3xl">I'm a</span>{" "}
            <TypeAnimation
              sequence={[
                "Developer",
                4000,
                "Coder",
                4000,
                "Tech Enthusiast",
                4000,
              ]}
              wrapper="span"
              speed={200}
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1.875rem" }}
            />
          </div>
          <div className="flex gap-6 text-2xl">
            <Link to='https://github.com/uxknow' target="_blank">
              <AiFillGithub className="cursor-pointer hover:text-white" />
            </Link>
            <Link to='' target="_blank">
              <FaLinkedinIn className="cursor-pointer hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
