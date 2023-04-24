import React from 'react';
import PosterSection from './PosterSection';
import DescriptionMedia from './media_description/DescriptionMedia';

export default function MediaPage({info, mediaType,id}) {
    return (
        <div className='overview--container'>
            <div className='overlay--bg'>
                <PosterSection
                    poster={info.poster_path}
                    homePage={info.homepage}
                    networks={info.networks}
                    mediaType={mediaType}
                    id={id}
                />
                <DescriptionMedia
                    info={info}
                />
            </div>
        </div>
    );
}