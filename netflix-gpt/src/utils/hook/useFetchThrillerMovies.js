import { useDispatch } from "react-redux";
import { addThriller } from "../redux/movieSlice";
import { useEffect } from "react";
import { THRILLER_MOVIES } from "../constant";

const useFetchThrillerMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(THRILLER_MOVIES);
    const jsonData = await data.json();
    dispatch(addThriller(jsonData?.items));
  };
  useEffect(() => fetchData, []);
};

export default useFetchThrillerMovies;
