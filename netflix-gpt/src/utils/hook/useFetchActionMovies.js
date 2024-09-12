import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../redux/movieSlice";
import { useEffect } from "react";
import { ACTION_MOVIES } from "../constant";

const useFetchActionMovies = () => {
  const dispatch = useDispatch();
  const action =  useSelector (store=> store.movie.action)

  const fetchData = async () => {
    try {
      const response = await fetch(ACTION_MOVIES);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      dispatch(addAction(jsonData?.items));
    } catch (error) {
      console.error("Failed to fetch action movies:", error);
    }
  };
  useEffect(() =>{ if(action.length===0) fetchData()}, [] );  //to reduce the unneccesary api calls
};

export default useFetchActionMovies;
