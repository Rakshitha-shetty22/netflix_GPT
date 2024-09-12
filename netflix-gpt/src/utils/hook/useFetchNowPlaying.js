import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../redux/movieSlice";
import { useEffect } from "react";
import { NOW_PLAYING } from "../constant";

const useFetchNowPlaying = () => {
  const dispatch = useDispatch();
  const nowplaying =  useSelector (store=> store.movie.nowplaying)

  const fetchData = async () => {
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/${NOW_PLAYING}`);
    const jsonData = await data.json();
    dispatch(addNowPlaying(jsonData?.items));
  };
  useEffect(() =>{ if(nowplaying.length===0) fetchData()}, [] );
};

export default useFetchNowPlaying;
