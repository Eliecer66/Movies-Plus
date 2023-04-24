import React from 'react';

export default function DateGenresMedia({releaseDate, genres, runtime, seasons}) {
    // Transform minutes into a time format
    function transformMinutes(minutes) {
        const rawHours = minutes / 60,
        hours = Math.trunc(rawHours),
        totalMinutes = minutes - (hours * 60);

        return `${hours}h ${totalMinutes}m`;
    }

    return (
        <ul className='date-genres--info'>
            <li className='date--list'>
                {releaseDate}
            </li>
            <li>
                {
                    genres && genres.map((element, index) => {
                        return (`${element.name} ${(index + 1) === genres.length ? '' : ', '}`);
                    })
                }
            </li>
            <li>
                {runtime ? transformMinutes(runtime): `${seasons.length} Season${seasons.length > 1 ? 's' : ''}`}
            </li>
        </ul>
    );
}