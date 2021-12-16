/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable array-callback-return */
import React from "react";
import MovieName from "../../components/MovieName/MovieName";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from './../../axios/config';

export default function One() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState({
    value: "",
  });
  const [filtter, setFillter] = useState({});
  const useParam = useParams();

  const handleInput = (e) => {
    setSearch({
      ...search,
      value: e.target.value,
    });
  };

  const handleSearch = () => {
    useParam.name = search.value;
    axiosInstance
      .get(`/products`)
      .then((response) => {
        setMovie(response.data);
        movie.map((data) => {
          if (data.name === useParam.name) {
            setFillter(data);
            console.log(filtter);
          }
        });
      })
      .catch(console.error);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        className="form-control"
        value={search.value}
      />
      <input type="button" value="search" onClick={handleSearch} />
      <MovieName filtter={filtter} />
    </div>
  );
}
