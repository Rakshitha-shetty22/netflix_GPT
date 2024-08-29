import React from 'react'
import Header from '../header/Header'
import useFetchTodayRecom from '../utils/hook/useFetchTodayRecom'
import {  useSelector } from "react-redux";
import TrailerContainer from './TrailerContainer';
import MovieContainer from './MovieContainer';


const HomePage = () => {

  useFetchTodayRecom();
 const movies = useSelector((store) => store.movie.movie);
 console.log("a",movies);

  return (
    <div>
      <Header/>
      <TrailerContainer/>
     <MovieContainer/>
    </div>
  )
}

export default HomePage
