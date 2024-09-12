import { useDispatch, useSelector } from "react-redux";
import { addComedy } from "../redux/movieSlice";
import { useEffect } from "react";
import { COMEDY_MOVIES } from "../constant";

const useFetchComedyMovies = () => {
  const dispatch = useDispatch();
  const comedy =  useSelector(store=> store.movie.comedy)

  const fetchData = async () => {
    const data = await fetch(COMEDY_MOVIES);
    const jsonData = await data.json();
    dispatch(addComedy(jsonData?.items));
  };
  useEffect(() =>{ if(comedy.length===0) fetchData()}, [] );
};

export default useFetchComedyMovies;
