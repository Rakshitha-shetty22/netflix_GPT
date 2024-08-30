import { useDispatch } from "react-redux";
import { addAnimated } from "../redux/movieSlice";
import { useEffect } from "react";
import { KIDS_SECTION } from "../constant";

const useFetchAnimatedMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(KIDS_SECTION);
    const jsonData = await data.json();
      dispatch(addAnimated(jsonData?.sections[3]?.items));
  };
  useEffect(() => fetchData, []);
};

export default useFetchAnimatedMovies;
