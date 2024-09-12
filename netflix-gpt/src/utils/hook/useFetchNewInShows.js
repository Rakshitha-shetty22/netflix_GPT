import { useDispatch, useSelector } from "react-redux";
import { addnewInShows } from "../redux/movieSlice";
import { useEffect } from "react";
import { NEW_IN_SHOWS } from "../constant";

const useFetchNewInShows = () => {
  const dispatch = useDispatch();
  const newInShows =  useSelector (store=> store.movie.newInShows)

  const fetchData = async () => {
    const data = await fetch(NEW_IN_SHOWS);
    const jsonData = await data.json();
    dispatch(addnewInShows(jsonData?.sections[1]?.items));
  };
  useEffect(() =>{ if(newInShows.length===0) fetchData()}, [] );
};

export default useFetchNewInShows;
