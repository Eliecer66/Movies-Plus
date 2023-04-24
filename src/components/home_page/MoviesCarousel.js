import React from 'react';
import MovieList from './MovieList';

export default function MoviesCarousel({data, background, mediaType}) {

    return (
        <div className='carousel--content'>
           <MovieList
                data={data}
                background={background}
                mediaType={mediaType}
           />
        </div>
    );
}