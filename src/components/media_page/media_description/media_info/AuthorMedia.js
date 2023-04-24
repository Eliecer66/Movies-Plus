import React from 'react';

export default function AuthorMedia({created_by}) {
    return (
        <div className='creator'>
            {created_by &&
                <div>
                    <h2>Created by</h2>
                    <ul>
                        {created_by.map(element => {
                            return <li className='createdby--list--element'>{element.name}</li>
                        })}
                    </ul>
                </div>
            }
        </div>
    );
}