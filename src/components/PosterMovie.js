import React from 'react';
import apiUrls from '../utils/apiUrls';

export default function PosterMovie({score, posterPath}) {
    return (
        <div className={`image--container image--container--${score}`}>
            <img 
                className='item--list--image'
                src={`${apiUrls.posterUrl}${posterPath}`}
            />
        </div>
    );
}