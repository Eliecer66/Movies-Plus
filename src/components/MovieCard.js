import React from 'react';
import PosterMovie from './PosterMovie';
import ProgressBar from './ProgressBar';
import DescriptionMovie from './DescriptionMovie';

export default function MovieCard({movieData, background}) {
    const {id, title, releaseDate, average, posterPath, score} = movieData;
    return (
        <div className='movie--card'>
            <li 
                key={id} 
                className='item--list'
            >
                <PosterMovie
                    score={score}
                    posterPath={posterPath}
                />
                <ProgressBar 
                    score={score}
                    average={average}
                /> 
                <DescriptionMovie 
                    background={background}
                    title={title}
                    releaseDate={releaseDate}
                />
            </li>
        </div>
    );
}