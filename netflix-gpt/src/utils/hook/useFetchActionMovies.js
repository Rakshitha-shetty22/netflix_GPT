import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../redux/movieSlice";
import { useEffect } from "react";
import { ACTION_MOVIES } from "../constant";

const useFetchActionMovies = () => {
  const dispatch = useDispatch();
  const action =  useSelector (store=> store.movie.action)

  const fetchData = async () => {
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/${ACTION_MOVIES}`);
    const jsonData = await data.json();
    dispatch(addAction(jsonData?.items));
  };
  useEffect(() =>{ if(action.length===0) fetchData()}, [] );  //to reduce the unneccesary api calls
};

export default useFetchActionMovies;
