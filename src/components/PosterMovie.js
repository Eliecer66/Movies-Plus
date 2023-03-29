import React from 'react';
import posterUrl from '../utils/posterUrl';
export default function PosterMovie({score, posterPath}) {
    return (
        <div className={`image--container image--container--${score}`}>
            <img 
                className='item--list--image'
                src={`${posterUrl}${posterPath}`}
            />
        </div>
    );
}