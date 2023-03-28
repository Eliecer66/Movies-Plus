import React from 'react';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

export default function PosterMovie({score, posterPath}) {
    return (
        <div className={`image--container image--container--${score}`}>
            <img 
                className='item--list--image'
                src={`${IMAGE_PATH}${posterPath}`}
            />
        </div>
    );
}