import React from 'react';
import PosterMovie from './components/PosterMovie';
import ProgressBar from './components/ProgressBar';
import DescriptionMovie from './components/DescriptionMovie';
const GOOD = 70;
const REGULAR = 50;
const LOW = 'low';
const HIGH = 'high';
const MEDIUM = 'medium';

export default function MoviesCarousel({data, background}) {

    const setScore = (average) => {
        const goodRate = average > GOOD;
        const regularRate = average > REGULAR && average <= GOOD;
        let rate = LOW;

        if (goodRate) {
            rate = HIGH;
        } 
        
        if (regularRate) {
            rate = MEDIUM;
        }
        return rate;
    };

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
                <div className='movie--card'>
                    <li 
                        key={movieData.id} 
                        className='item--list'
                    >
                        <PosterMovie
                            score={movieData.score()}
                            posterPath={movieData.posterPath}
                        />
                        <ProgressBar 
                            score={movieData.score()}
                            average={movieData.average}
                        /> 
                        <DescriptionMovie 
                            background={background}
                            title={movieData.title}
                            releaseDate={movieData.releaseDate}
                        />
                    </li>
                </div>
            );
        });
    };
    return (
        <div className='carousel--content'>
            <ul className={`list--content list--content--${background}`}>
                {data !== undefined && movieList()}
            </ul>
        </div>
    );
}