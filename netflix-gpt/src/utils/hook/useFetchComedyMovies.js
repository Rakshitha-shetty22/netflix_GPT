import { useDispatch } from "react-redux";
import { addComedy } from "../redux/movieSlice";
import { useEffect } from "react";
import { COMEDY_MOVIES } from "../constant";

const useFetchComedyMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(COMEDY_MOVIES);
    const jsonData = await data.json();
    dispatch(addComedy(jsonData?.items));
  };
  useEffect(() => fetchData, []);
};

export default useFetchComedyMovies;
