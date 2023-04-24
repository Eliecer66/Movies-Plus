import React from 'react';
import { apiKey } from '../utils/apiUrls';
import Carousel from './home_page/Carousel';

export default function HomePage() {
    return (
        <div>
            <Carousel
                title='Trending Movies'
                category='trending'
                mediaType='movie'
                background='main'
                apiKey={apiKey}
            /> 
            <Carousel
                title='Trending Series'
                category='trending' 
                mediaType='tv'
                background='secondary'
                apiKey={apiKey}
            />
            <Carousel
                title='Popular'
                category='popular'
                background='main'
                apiKey={apiKey}
            /> 
        </div>
    );
}