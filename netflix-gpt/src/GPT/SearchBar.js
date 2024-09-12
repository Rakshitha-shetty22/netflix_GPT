import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addopenAIkey } from "../utils/redux/userSlice";
import useOpenAi from "../utils/hook/useOpenAi";
import { BG_IMAGE } from "../utils/constant";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [movieData, setMovieData] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const openAi = useOpenAi();
  const storedKey = useSelector((state) => state.user.openAIKey);

  const handleClick = async () => {
    setError("");

    if (!storedKey) {
      setError("API key is missing. Please enter your OpenAI key.");
      return;
    }

    try {
      const query =
        "Act as a movie suggestion system. Give the movie related to: " +
        text +
        ". Provide only 5 movies, comma-separated.";
      const aiResult = await openAi.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });

      const movies = aiResult?.choices?.[0]?.message?.content.split(",");
      setMovieData(movies || []);
    } catch (err) {
      setError("Failed to fetch movie suggestions. Please try again.");
      console.error("API Error:", err);
    }
  };

  const handleClickKey = () => {
    if (key.trim()) {
      dispatch(addopenAIkey(key));
    } else {
      setError("Please enter a valid OpenAI key.");
    }
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center bg-black flex-col items-center">
      <div className="absolute inset-0 bg-cover bg-center">
        <img className="md:h-auto h-screen object-cover" src={BG_IMAGE} alt="bgImage" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black opacity-75"></div>

      <div className="w-full flex justify-center z-40">
        <form
          className="w-[95%] md:w-1/2 flex flex-col md:flex-row justify-evenly p-2 items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            value={text}
            className="w-10/12 mr-0 md:mr-8 rounded-md p-2 h-full"
            placeholder="what do you want to watch today.."
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-red-500 text-white p-4 w-auto rounded-md mt-4 mb-8 md:mt-0 md:mb-0"
            onClick={handleClick}
          >
            Search
          </button>
          <input
            value={key}
            className="w-10/12 mr-0 md:mr-8 rounded-md p-2 md:ml-10 ml-0 h-full"
            placeholder="Please Enter your OpenAI key..."
            onChange={(e) => setKey(e.target.value)}
          />
          <button
            className="bg-red-500 text-white p-4 w-auto rounded-md mt-4 mb-8 md:mt-0 md:mb-0"
            onClick={handleClickKey}
          >
            Submit
          </button>
        </form>
      </div>

      {error && <p className="text-red-800 font-bold mt-80 md:mt-40 text-2xl shadow-md absolute z-50 bg-gradient-to-b from-black">{error}</p>}

      {movieData && (
        <div className="z-50 border border-white px-48 py-3 rounded-md text-white font-bold md:mt-8 mt-80">
          {movieData.map((i, index) => (
            <p className="px-2" key={index}>
              {i}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
 
export default SearchBar;
