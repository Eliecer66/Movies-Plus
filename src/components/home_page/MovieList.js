import React from 'react';
import MovieCard from './MovieCard';
import setScore from '../../utils/setScore';

export default function MovieList({data, background, mediaType}) {
    const movieList = () => {
        return data.results.map((item) => {
            const average = Math.round(item.vote_average * 10);
            const movieData = {
                id: item.id,
                title: item.name || item.title,
                releaseDate: item.release_date || item.first_air_date,
                average,
                posterPath: item.poster_path || item.backdrop_path,
                mediaType: mediaType,
                score: setScore(average)
            }

            return (
                <MovieCard
                    key={movieData.id}
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
