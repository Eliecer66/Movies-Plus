import React, { useState } from 'react';
import setScore from '../../../../utils/setScore';
import ProgressBar from '../../../home_page/ProgressBar';

export default function AutoActions({voteAverage, homepage}) {
    // Getting the average and score of the media
    const average = Math.round(voteAverage * 10);
    const score = setScore(average);
    
    // Hook to track the changes of the bookmark button
    const [add, setAdd] = useState('bookmark');
        
    // function that change the state of the add depending on the prev value
    const bookmark = () => {    
        setAdd((prevState) => {
            if (prevState == 'bookmark') {
                return 'bookmark_added';
            }
            return 'bookmark';
        })
    }

    return (
        <ul className='auto--actions'>
            <li className="progress--bar--detail">
                <ProgressBar
                    average={average} 
                    score={score} 
                    position='relative'
                />
                <p>User Score</p>
            </li>
            <li>
                <a href={homepage}>
                    <span className="material-symbols-outlined">
                        play_circle
                    </span>
                    Play
                </a>
            </li>
            <li className='add--watch--list' onClick={bookmark}>
                <span className="material-symbols-outlined">
                    {add}
                </span>
                {add === 'bookmark_added' ? 'Added' : 'Add to watch list'}
            </li>
        </ul>
    );
}