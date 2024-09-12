import React from "react";
import Header from "../header/Header";
import TrailerContainer from "./TrailerContainer";
import MovieContainer from "./MovieContainer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <TrailerContainer />
      <MovieContainer />
    </div>
  );
};

export default HomePage;
