import React from 'react';
import PosterMovie from './PosterMovie';
import ProgressBar from './ProgressBar';
import DescriptionMovie from './DescriptionMovie';

export default function MovieCard({movieData, background}) {
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
}