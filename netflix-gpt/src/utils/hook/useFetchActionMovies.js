import { useDispatch } from "react-redux";
import { addAction } from "../redux/movieSlice";
import { useEffect } from "react";
import { ACTION_MOVIES } from "../constant";

const useFetchActionMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(ACTION_MOVIES);
    const jsonData = await data.json();
    dispatch(addAction(jsonData?.items));
  };
  useEffect(() => fetchData, []);
};

export default useFetchActionMovies;
