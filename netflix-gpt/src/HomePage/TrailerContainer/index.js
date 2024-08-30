import { useEffect, useState } from "react";
import { TRAILER_MVE_DISCRIPTION } from "../../utils/constant";

import movieLogo from "../../assests/mvelogo.png";
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
        <div className="w-full h-full z-50">
          <iframe
            className="w-full h-[1045px] aspect-video"
            src="https://www.youtube.com/embed/hXzcyx9V0xw?si=f3LnML6QJZkD5r-B&modestbranding=1&controls=0&rel=0&autoplay=1&mute=1&loop=1&playlist=hXzcyx9V0xw"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="absolute top-0 left-0 w-full h-[1040px] bg-gradient-to-r from-black"></div>

      <div className="absolute bottom-96 text-white pl-[68px] z-10">
        <img src={movieLogo} alt="logo" />
        {showDescription && (
          <p className="font-bold text-lg w-1/4 pb-6">
            {TRAILER_MVE_DISCRIPTION}
          </p>
        )}
        <div>
          <button className="text-2xl font-bold bg-white text-black pb-[10px] pt-1 px-[35px] rounded-md mr-3  hover:bg-white/70">
            <span className="text-4xl pr-1">▸</span> Play
          </button>
          <button className="text-2xl font-bold  bg-[#6d6d6e]/70 text-white rounded-md pb-3 pt-3 px-[30px] hover:bg-[#6d6d6e]/40">
            <span className="text-2xl pr-1 font-bold">ⓘ</span> More info
          </button>
        </div>
      </div>
    </>
  );
};

export default TrailerContainer;
