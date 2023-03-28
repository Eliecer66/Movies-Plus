import React from 'react';

export default function DescriptionMovie({background, title, releaseDate}) {
    return (
        <div className={`item--list--description item--list--description--${background}`}>
            <h2 className='item--list--title'>{title}</h2>
            <p className='item--list--release--date'>{releaseDate}</p>
        </div>
    );
}