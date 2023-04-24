import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar--container'>
                <Link className='navbar--header' to='/'>
                    <span className='letter--style'>M</span>
                        ovies
                    <span className='plus--sign'>+</span>
                </Link>
                <ul className='navbar--items'>
                    <li>
                        <Link className='navbar--item' to='watchlist'>
                            <span className="material-symbols-outlined">wysiwyg</span>
                            Whish List
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}