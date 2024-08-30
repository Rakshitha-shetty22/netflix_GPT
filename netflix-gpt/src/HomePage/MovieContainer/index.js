import React from 'react'
import MovieCardWidCategory from './MovieCardWidCategory'
import { useSelector } from 'react-redux'
import useFetchNowPlaying from '../../utils/hook/useFetchNowPlaying'
import useFetchNewInShows from '../../utils/hook/useFetchNewInShows'
import useFetchComedyMovies from '../../utils/hook/useFetchComedyMovies'
import useFetchThrillerMovies from '../../utils/hook/useFetchThrillerMovies'
import useFetchActionMovies from '../../utils/hook/useFetchActionMovies'
import useFetchAnimatedMovies from '../../utils/hook/useFetchAnimatedMovies'

const MovieContainer = () => {
  useFetchNowPlaying();
  useFetchNewInShows();
  useFetchComedyMovies();
  useFetchThrillerMovies();
  useFetchActionMovies();
  useFetchAnimatedMovies();
  const nowPlaying = useSelector(store=>store.movie);
  
  return (
    <div className='bg-black w-full h-auto '>
    <div className="pl-[68px] relative z-20 -mt-64">
      <MovieCardWidCategory category={"Now Playing"} movieList={nowPlaying.nowplaying}/>
      <MovieCardWidCategory category={"New In Shows"} movieList={nowPlaying.newInShows}/>
      <MovieCardWidCategory category={"Comedy Movies"} movieList={nowPlaying.comedy}/>
      <MovieCardWidCategory category={"Thriller Movies"} movieList={nowPlaying.thriller}/>
      <MovieCardWidCategory category={"Action Movies"} movieList={nowPlaying.action}/>
      <MovieCardWidCategory category={"Animation Movies"} movieList={nowPlaying.animated}/> 
    </div></div>
  )
}

export default MovieContainer
