import React from 'react';
import MovieCard from './MovieCard';
const setScore = require('../utils/setScore');

export default function MovieList({data, background}) {
    const movieList = () => {
        return data.results.map((item) => {
            const movieData = {
                id: item.id,
                title: item.name || item.title,
                releaseDate: item.release_date || item.first_air_date,
                average: Math.round(item.vote_average * 10),
                posterPath: item.poster_path || item.backdrop_path,
                score() {
                    return setScore(this.average);
                }
            }

            return (
                <MovieCard 
                    movieData={movieData}
                    background={background}
                />
            );
        });
    };
    return (
        <ul className={`list--content list--content--${background}`}>
            {data && movieList()}
        </ul>
    );
}
