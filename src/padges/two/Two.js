import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./../../components/Movie-details/MovieDetails";
import { axiosInstance } from "./../../axios/config";

export default function Two() {
  const params = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axiosInstance.get(`/products/${params.id}`).then((response) => {
      setDetails(response.data);
      console.log(response.data.name);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <MovieDetails details={details} />
    </div>
  );
}
