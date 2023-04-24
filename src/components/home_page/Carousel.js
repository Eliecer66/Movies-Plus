import React,{ useState } from 'react';
import HeaderCarousel from './HeaderCarousel';
import MoviesCarousel from './MoviesCarousel';
import useFetch from '../../utils/custom_hooks/useFetch';
import MediaOptions from '../../utils/MediaOptions';

export default function Carousel({title, category, mediaType, background, apiKey}) {
    
    // Creating media options
    const mediaOptions = new MediaOptions(title, mediaType, apiKey);
    
    // It load the options that it can be selected in the carousel to feature different categories
    const [switchRoute, setSwitchRoute] = useState(mediaOptions[category]);
    
    const switchMediaType = () => {
        let element = mediaType;
        if (!mediaType) {
            const index = switchRoute.findIndex(element => element.isSelected);
            element = switchRoute[index].name === 'Movies' ? 'movie': 'tv';
        }
        return element;
    }

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
                mediaType={switchMediaType()}
            />
        </div>
    );
}