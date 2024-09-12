import { useEffect, useState } from "react";
import { TRAILER_MVE_DISCRIPTION } from "../../utils/constant";

import movieLogo from "../../assests/mvelogo.png";
import playLogo from "../../assests/playIcon.png";
const TrailerContainer = () => {
  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
        <div className="w-full h-full">
          <iframe
            className="w-full md:h-[1045px] h-auto aspect-video xs:h-[252px]"
            src="https://www.youtube.com/embed/hXzcyx9V0xw?si=f3LnML6QJZkD5r-B&modestbranding=1&controls=0&rel=0&autoplay=1&mute=1&loop=1&playlist=hXzcyx9V0xw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute top-0 left-0 w-full h-[1040px] bg-gradient-to-r from-black"></div>

      <div className="absolute top-24 xs:top-24 md:top-72 text-white md:pl-[68px] z-10 pl-8">
        <img src={movieLogo} className="w-[55%] xs:w-[40%] md:w-auto" alt="logo" />
        {showDescription && (
          <p className="font-bold text-lg w-1/4 pb-6 md:flex hidden">
            {TRAILER_MVE_DISCRIPTION}
          </p>
        )}
        <div className="flex">
          <button className="flex items-center text-lg xs:text-sm md:text-2xl font-bold bg-white text-black py-1 px-[20px] md:py-3 md:px-[30px] rounded-md mr-3  hover:bg-white/70">
            <img src={playLogo} className="w-[25px] md:w-[38px] pr-1" alt="play"/> Play
          </button>
          <button className="text-lg xs:text-sm md:text-2xl font-bold bg-[#6d6d6e]/70 text-white rounded-md py-1 px-[20px] md:py-3 md:px-[30px] hover:bg-[#6d6d6e]/40">
            <span className="text-lg md:text-2xl pr-1 font-bold">ⓘ</span> More info
          </button>
        </div>
      </div>
    </>
  );
};

export default TrailerContainer;
