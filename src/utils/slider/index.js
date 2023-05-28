export const scrollPrev = (refImg, refContainer, refDots, currSlide, setCurrSlide) => {
  const slideWidth = refImg.current.clientWidth;
  const prevScrollLeftSize = refContainer.current.scrollLeft;

  refContainer.current.scrollLeft -= slideWidth;

  if (prevScrollLeftSize !== refContainer.current.scrollLeft) {
    const newVal = currSlide - 1;
    setCurrSlide(newVal);

    const dots = [...refDots.current.children];
    dots.forEach((otherDot) => {
      otherDot.style.backgroundColor = "rgba(0,0,0,0.2)";
    });
    dots[newVal - 1].style.backgroundColor = "black";
  }
};

export const scrollNext = (refImg, refContainer, refDots, currSlide, setCurrSlide) => {
  const slideWidth = refImg.current.clientWidth;
  const prevScrollLeftSize = refContainer.current.scrollLeft;

  refContainer.current.scrollLeft += slideWidth;

  if (prevScrollLeftSize !== refContainer.current.scrollLeft) {
    const newVal = currSlide + 1;
    setCurrSlide(newVal);

    const dots = [...refDots.current.children];
    dots.forEach((otherDot) => {
      otherDot.style.backgroundColor = "rgba(0,0,0,0.2)";
    });
    dots[newVal - 1].style.backgroundColor = "black";
  }
};

export const scrollDots = (
  refContainer,
  refDots,
  isMobile,
  isToched,
  setCurrSlide
) => {
  const dots = [...refDots.current.children];
  const scrollLeft = refContainer.current.scrollLeft;
  const slideWidth = refContainer.current.clientWidth;

  const activeIndex = isMobile
    ? Math.round(scrollLeft / slideWidth)
    : Math.round((scrollLeft * 2) / slideWidth);

  if (isToched) {
    dots.forEach((otherDot, idx) => {
      otherDot.style.backgroundColor = "rgba(0,0,0,0.2)";

      if (idx === activeIndex) {
        otherDot.style.backgroundColor = "black";
      }
    });
  }

  setCurrSlide(activeIndex + 1);
};

export const scrollToSlide = (refImg, refContainer, idx) => {
  const slideWidth = refImg.current.clientWidth;
  refContainer.current.scrollLeft = idx * slideWidth;
};

export const handleDotClick = (refImg, refContainer, refDots, index, setIsToched, setCurrSlide) => {
  const dots = [...refDots.current.children];

  setIsToched(false);

  dots.forEach((otherDot) => {
    otherDot.style.backgroundColor = "rgba(0,0,0,0.2)";
  });

  dots[index].style.backgroundColor = "black";
  setCurrSlide(index + 1);
  scrollToSlide(refImg, refContainer, index);

  setTimeout(() => {
    setIsToched(true);
  }, 500);
};