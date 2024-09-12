import { useDispatch, useSelector } from "react-redux";
import { addThriller } from "../redux/movieSlice";
import { useEffect } from "react";
import { THRILLER_MOVIES } from "../constant";

const useFetchThrillerMovies = () => {
  const dispatch = useDispatch();
  const thriller =  useSelector(store=> store.movie.thriller)

  const fetchData = async () => {
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/${THRILLER_MOVIES}`);
    const jsonData = await data.json();
    dispatch(addThriller(jsonData?.items));
  };
  useEffect(() =>{ if(thriller.length===0) fetchData()}, [] );
};

export default useFetchThrillerMovies;
