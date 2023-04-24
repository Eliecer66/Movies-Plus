import React from 'react';
import { posterUrl } from '../../utils/apiUrls';
import { Link } from 'react-router-dom';

export default function PosterMovie({score, posterPath, id, mediaType}) {
    const data = {id, mediaType};

    return (
        <Link to='media' state={data} className={`image--container image--container--${score}`}>
            <img 
                className='item--list--image'
                src={`${posterUrl}${posterPath}`}
            />
        </Link>
    );
}