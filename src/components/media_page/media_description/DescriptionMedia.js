import React from 'react';
import TitleMedia from './media_info/TitleMedia';
import DateGenresMedia from './media_info/DateGenresMedia';
import AutoActions from './media_info/AutoActions';
import MediaContentInfo from './media_info/MediaContentInfo';
import AuthorMedia from './media_info/AuthorMedia';

export default function DescriptionMedia({info}) {
    // Setting reliable variables
    const title = (info.name || info.title);
    const releaseDate = (info.first_air_date || info.release_date);
    const releaseYear = releaseDate.slice(0,4);

    return (
        <div className='information--container'>
            <TitleMedia 
                title={title}
                releaseYear={releaseYear}
            />
            <DateGenresMedia 
                releaseDate={releaseDate}
                genres={info.genres}
                runtime={info.runtime}
                seasons={info.seasons}
            />
            <AutoActions 
                voteAverage={info.vote_average}
                homepage={info.homepage}
            />
            <MediaContentInfo
                tagline={info.tagline}
                overview={info.overview}
            />
            <AuthorMedia
                created_by={info.created_by}
            />
        </div>
    );
}