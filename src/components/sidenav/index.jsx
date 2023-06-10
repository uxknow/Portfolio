import { useLocation } from "react-router-dom";
import { sideNavList } from "../../common/moks/navigate";
import { useMediaQuery } from "../../hooks/use-media-query";
import { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

export const Sidenav = () => {
  const { hash } = useLocation();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={`fixed will-change-transform	 z-10 h-screen md:pl-3 max-md:pb-5 max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:bottom-0 ${
        isShow && isMobile ? "portrait:top-[90%] landscape:top-[80%]" : ""
      } ${!isShow && isMobile ? "top-[100%]" : ""} ${
        isMobile ? "ease-in duration-300" : ""
      }`}
    >
      {isMobile && (
        <button
          className="text-blue-900 text-4xl -top-10 absolute p-1 animate-move-arrow"
          onTouchStart={() => setIsShow((prev) => !prev)}
        >
          {isShow ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </button>
      )}
      <ul
        className={`md:h-full flex justify-center gap-5 md:flex-col max-md:items-center  ${
          isMobile &&
          "bg-white rounded-full py-2 px-4 shadow-md shadow-gray-500"
        }`}
      >
        {sideNavList.map(({ path, title, icon }) => (
          <li key={title}>
            <a
              href={path}
              className={`flex justify-center items-center text-black text-xl bg-gray-200 shadow-lg shadow-gray-300 rounded-full w-10 h-10 cursor-pointer hover:scale-110 transition duration-300 
              ${hash.includes(path) && "text-blue-900"} `}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
