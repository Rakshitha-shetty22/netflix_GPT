import { useDispatch } from "react-redux";
import { addNowPlaying } from "../redux/movieSlice";
import { useEffect } from "react";
import { NOW_PLAYING } from "../constant";

const useFetchNowPlaying = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(NOW_PLAYING);
    const jsonData = await data.json();
    dispatch(addNowPlaying(jsonData?.items));
  };
  useEffect(() => fetchData, []);
};

export default useFetchNowPlaying;
