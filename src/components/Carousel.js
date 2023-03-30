import React,{ useState } from 'react';
import HeaderCarousel from './HeaderCarousel';
import MoviesCarousel from './MoviesCarousel';
import apiUrls from '../utils/apiUrls';
import useFetch from '../utils/useFetch';

export default function Carousel({title, category, mediaType, background, apiKey}) {
    // The media categories that can be found depending on the category of it.
    const mediaOptions = {
        trending: [
            {
                name: 'Today', 
                path: `${apiUrls.domainName}trending/${mediaType}/day?api_key=${apiKey}`,
                isSelected: true
            },
            {
                name: 'This Week',
                path: `${apiUrls.domainName}trending/${mediaType}/week?api_key=${apiKey}`,
                isSelected: false
            }
        ],
        popular: [
            {
                name: 'Movies', 
                path: `${apiUrls.domainName}movie/popular?api_key=${apiKey}`,
                isSelected: true
            },
            {
                name: 'Series',
                path: `${apiUrls.domainName}tv/popular?api_key=${apiKey}`,
                isSelected: false
            }
        ]
    }
    
    // It load the options that it can be selected in the carousel to feature different categories
    const [switchRoute, setSwitchRoute] = useState(mediaOptions[category]);

    // Custom Hook 
    const data = useFetch(switchRoute);

    return (
        <div className='carousel--container'>
            <HeaderCarousel 
                setSwitchRoute={setSwitchRoute}
                switchRoute={switchRoute}
                title={title}
            />
            <MoviesCarousel
                data={data}
                background={background}
            />
        </div>  
    );
}