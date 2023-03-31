import React from 'react';
import MovieList from './MovieList';

export default function MoviesCarousel({data, background}) {

    return (
        <div className='carousel--content'>
           <MovieList
                data={data}
                background={background}
           />
        </div>
    );
}