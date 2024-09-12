import { useState } from "react";
import { IMAGE_CDN } from "../../utils/constant";

const MovieCardWidCategory = (props) => {
  const { category, movieList } = props;
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredMovie(id);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div className="flex flex-col mb-6">
      <div>
        <h1 className="text-white md:text-2xl py-4 text-xl">{category}</h1>
      </div>

      <div className="flex overflow-x-scroll space-x-3" style={{ scrollbarWidth: "none" }}>
        {movieList.map((items) => (
          <div
            key={items.id}
            className="relative w-[320px] h-[180px] flex-shrink-0 xs:w-[270px]" 
            onMouseEnter={() => handleMouseEnter(items.id)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredMovie === items.id && items?.stream?.videoHash ? (
              <video
                src={`https://media-content.akamaized.net/video/${items?.stream?.videoHash}/preview/1/16x9/320x180/h264_baseline.mp4`}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover rounded-lg"
              /> 
              
            ) : (
              <img
                src={IMAGE_CDN + items?.imageInfo[0]?.url}
                alt={items.title}
                className="w-full h-full object-cover rounded-md"
              />
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCardWidCategory;
