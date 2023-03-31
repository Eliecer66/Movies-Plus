import React from 'react';

export default function ProgressBar({score, average}) {
    return (
        <div className={`progress--bar progress--bar--${score}`}>
            <span className='progress--bar--average'>{average}<span className='percent--sign'>%</span></span>
        </div>
    );
}