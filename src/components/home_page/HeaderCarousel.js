import React from 'react';
import { nanoid } from 'nanoid';

export default function HeaderCarousel({setSwitchRoute, switchRoute, title}) {
    const switchState = (name) => { 
        setSwitchRoute((prevItem) => {
            const elements = prevItem.map((element) => {
                if (name !== element.name) {
                    return {...element, isSelected: false};
                }
                return {...element, isSelected: true};
            })
            return elements;
        });
    }

    const containerOptions = () => {
        return switchRoute.map((item) => {
            return (
                <li 
                    key={nanoid()}
                    onClick={() => switchState(item.name)}
                    className={item.isSelected ? 'selected': ''}
                    > {item.name}
                </li>
            )
        })
    };

    return (
        <div className='carousel--header'>
            <h1>{title}</h1>
            <ul className='carousel--options'>
                {containerOptions()}
            </ul>
        </div>
    );
}