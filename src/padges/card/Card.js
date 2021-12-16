/* eslint-disable no-undef */
import React from 'react'
import MovieCard from './../../components/MovieCard/MovieCard';


export default function Card() {
    useData = localStorage.getItem('data');
    console.log(useData)
    return (
        <div>
            <MovieCard/>
        </div>
    )
}
