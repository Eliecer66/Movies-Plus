import React from 'react';

export default function ProgressBar({score, average, position}) { 
    return (
        <div className={ position ? `progress--bar progress--bar--position progress--bar--${score}` : `progress--bar progress--bar--${score}`}>
            <span className='progress--bar--average'>{average}<span className='percent--sign'>%</span></span>
        </div>
    );
}