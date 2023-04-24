import React from 'react';

export default function MediaContentInfo({tagline, overview}) {
    return (
        <div>
            <div className='tag--line'>
                {tagline}
            </div>
            <div className='overview'>
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}