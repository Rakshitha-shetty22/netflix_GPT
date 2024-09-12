import { useDispatch, useSelector } from "react-redux";
import { addAnimated } from "../redux/movieSlice";
import { useEffect } from "react";
import { KIDS_SECTION } from "../constant";

const useFetchAnimatedMovies = () => {
  const dispatch = useDispatch();
  const animation =  useSelector (store=> store.movie.animated)

  const fetchData = async () => {
    const data = await fetch(KIDS_SECTION);
    const jsonData = await data.json();
      dispatch(addAnimated(jsonData?.sections[3]?.items));
  };
  useEffect(() =>{ if(animation.length===0) fetchData()}, [] );
};

export default useFetchAnimatedMovies;
