import React from "react";
import ImagePoster from "./poster_section/ImagePoster";
import ProviderMedia from "./poster_section/ProviderMedia";

export default function PosterSection({poster, homePage, networks, mediaType, id}) {    
    return (
        <div className='poster--container'>
            <ImagePoster 
                poster={poster}
            />
            { networks && 
                <ProviderMedia 
                    homePage={homePage}
                    mediaType={mediaType}
                    id={id}
                />
            }
        </div>
    );
}