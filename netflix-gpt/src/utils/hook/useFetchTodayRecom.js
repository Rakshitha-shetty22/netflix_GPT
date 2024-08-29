import { useDispatch } from "react-redux";
import { addtodaysRecom } from "../redux/movieSlice";
import { useEffect } from "react";
import { TODAYS_RECOM } from "../constant";

const useFetchTodayRecom = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(TODAYS_RECOM);
    const jsonData = await data.json();
   // console.log("f",jsonData?.sections);
    dispatch(addtodaysRecom(jsonData));
  };
  useEffect(() => fetchData, []);
};

export default useFetchTodayRecom;
