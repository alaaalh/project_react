/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect } from "react";
import { useState } from "react";
import { axiosInstance } from './../../axios/config';
import ChangeLanguage from './../../components/ChangeLanguage';
import ChangeCounter from "../../components/ChangeCounter";





export const Three = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/products`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  
  return (
    <>
    <ChangeCounter/>
    <ChangeLanguage/>
    <div className="row container" >
      {movie.map((movies, index) => {
        return (
          <div key={index} className="col-md-4 d-flex " style={{ justifyContent: 'space-around', }}>
            <MovieCard movies={movies} />
          </div>
        ); 
      })}
    </div>
      </>
  );
};
