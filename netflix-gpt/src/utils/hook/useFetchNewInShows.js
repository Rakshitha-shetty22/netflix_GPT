import { useDispatch } from "react-redux";
import { addnewInShows } from "../redux/movieSlice";
import { useEffect } from "react";
import { NEW_IN_SHOWS } from "../constant";

const useFetchNewInShows = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(NEW_IN_SHOWS);
    const jsonData = await data.json();
    console.log("d",jsonData?.sections[1]?.items);
    dispatch(addnewInShows(jsonData?.sections[1]?.items));
  };
  useEffect(() => fetchData, []);
};

export default useFetchNewInShows;
