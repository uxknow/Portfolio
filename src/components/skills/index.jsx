import React from "react";
import { softSkills, techSkills } from "../../common/moks/skills";
import { Container } from "../container";
import { AiOutlineCheck } from "react-icons/ai";

export const Skills = () => {
  return (
    <Container id="skills">
      <h2 className="text-4xl font-semibold text-center text-slate-950">Skills</h2>
      <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-10 lg:justify-between mt-12">
        <div className="text-center">
          <h3 className="text-2xl mb-6 font-semibold text-slate-950">Tech skills</h3>
          <ul className="grid grid-cols-2 gap-14">
            {techSkills.map(({ name, icon }) => (
              <li
                key={name}
                className="flex items-center max-sm:flex-col gap-4 shadow-lg shadow-gray-400 rounded-md p-4"
              >
                <span className="text-6xl">{icon}</span>{" "}
                <span className="text-lg font-bold">{name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-2xl mb-4 font-semibold text-slate-950">Soft skills</h3>
          <ul className="grid grid-cols-1 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
            {softSkills.map(({ name }) => (
              <li
                key={name}
                className="flex items-center gap-2 text-xl text-left"
              >
                <AiOutlineCheck className="text-3xl text-green-600" /> {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};
