import React from 'react';

export default function TitleMedia({title, releaseYear}) {
    return (
        <div className='information--title'>
            <h1>
                {`${title} (${releaseYear})`}
            </h1>
        </div>
    );
}