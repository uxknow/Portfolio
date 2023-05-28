import Balancer from "react-wrap-balancer";
import { Container } from "../container";

export const AboutMe = () => {
  return (
    <Container id="about-me">
      <Balancer>
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold text-center">About Me</h2>
          <p>
            <span className="ml-4 font-bold text-2xl">Hi!</span> My name is
            Borys and I'm a highly ambitious, self-motivated, and driven
            frontend web developer base in Zaporizhzhia, Ukraine. I'm very
            passionate about the world of programming and I'm looking to develop
            my skills in this field.
          </p>
          <p>
            My journey into programming started not too long ago, but I've
            already managed to gain some experience and master the basic
            concepts. I studied on my own and took online courses to learn the
            necessary programming language and technologies for web development
            such as HTML, CSS, Tailwind, Mui, Javascript, Typescript, React,
            GitHub. I am also familiar with concepts such as object-oriented
            programming, databases, and backend and strive to continue expanding
            my knowledge and skills in these areas.
          </p>
          <p>
            While studying programming, I have learned to be creative and think
            logically. I enjoy solving complex problems and finding solutions to
            everyday problems. I also appreciate teamwork and am willing to
            learn from experienced programmers. At the moment I'm looking to
            apply my skills and experience to real projects. I am ready to work
            on projects where I can apply my knowledge and continue my
            professional development in programming.
          </p>
          <p>
            As a novice programmer, I am enthusiastic and ready to tackle new
            challenges, as well as learn and grow together with the team. I look
            forward to participating in creating exciting projects. Thank you
            for your time, and I would be happy to discuss collaboration
            opportunities.
          </p>
        </div>
      </Balancer>
    </Container>
  );
};
