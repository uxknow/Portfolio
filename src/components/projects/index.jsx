import { Container } from "../container";
import { projectsData } from "../../common/moks/projects";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from "../../hooks/use-media-query";
import { scrollNext, scrollPrev, scrollDots, handleDotClick } from "../../utils/slider";

export const Projects = () => {
  const refImg = useRef(null);
  const refContainer = useRef(null);
  const refDots = useRef(null);
  const [currSlide, setCurrSlide] = useState(1);
  const [isToched, setIsToched] = useState(true);
  const isMobile = useMediaQuery("(max-width: 639px)");

  const slideLength = isMobile ? projectsData : projectsData.slice(1);

  useEffect(() => {
    const dots = [...refDots.current.children];

    dots.forEach((otherDot) => {
      otherDot.style.backgroundColor = "rgba(0,0,0,0.2)";
    });

    if (dots[currSlide - 1] && isMobile)
      dots[currSlide - 1].style.backgroundColor = "black";
    if (dots[currSlide - 1] && !isMobile) {
      dots[currSlide - 1].style.backgroundColor = "black";
    }
  }, [currSlide, isMobile]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <Container id="projects">
      <h2 className="text-4xl font-semibold text-center">Projects</h2>
      <div className="overflow-hidden relative">
        {!isMobile && (
          <>
            <button
              className="absolute right-7 top-4 text-2xl disabled:opacity-20"
              onClick={() =>
                scrollPrev(
                  refImg,
                  refContainer,
                  refDots,
                  currSlide,
                  setCurrSlide
                )
              }
              disabled={currSlide === 1}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-2 top-4 text-2xl disabled:opacity-20"
              onClick={() =>
                scrollNext(
                  refImg,
                  refContainer,
                  refDots,
                  currSlide,
                  setCurrSlide
                )
              }
              disabled={currSlide === slideLength.length}
            >
              <FaChevronRight />
            </button>
          </>
        )}
        <ul
          onScroll={() =>
            isToched &&
            scrollDots(refContainer, refDots, isMobile, isToched, setCurrSlide)
          }
          ref={refContainer}
          className="flex w-full items-center mx-auto pb-2
          gap-[4%] mt-12 scroll-smooth ease-in duration-200 overflow-x-auto snap-mandatory snap-x slide-container"
        >
          {projectsData.map(({ title, slug, img }) => (
            <li
              key={slug}
              className="relative text-white lg:h-64 md900:h-52 md:h-44 sm:h-40  max-sm:basis-full basis-[48%] flex-shrink-0 snap-end"
            >
              <img
                ref={refImg}
                src={img}
                alt={title}
                className="w-full h-full rounded-lg object-cover shadow-md shadow-gray-400"
              />
              <div className="flex flex-col items-center justify-center gap-4 rounded-md opacity-0 absolute top-0 left-0 w-full h-full hover:opacity-100 hover:bg-black/80 ease-out duration-300">
                <h3 className="text-xl text-white font-bold tracking-widest">
                  {title}
                </h3>
                <Link
                  to={`/${slug}`}
                  className="bg-white text-black rounded-sm py-2 px-8 hover:bg-white/80"
                >
                  More info
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div
          ref={refDots}
          className="flex justify-center gap-2 mt-3"
        >
          {slideLength.map(({ slug }, idx) => (
            <span
              onClick={() =>
                handleDotClick(
                  refImg,
                  refContainer,
                  refDots,
                  idx,
                  setIsToched,
                  setCurrSlide
                )
              }
              key={slug}
              className="bg-black/20 rounded-full w-8 h-1.5 inline-block  cursor-pointer"
            ></span>
          ))}
        </div>
      </div>
    </Container>
  );
};