import React from 'react';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar--container'>
                <h1 className='navbar--header'>
                    <span className='letter--style'>M</span>
                        ovies 
                    <span className='plus--sign'>+</span>
                </h1>
                <ul className='navbar--items'>
                    <li>
                        <a href='link' className='navbar--item'>
                            <span className="material-symbols-outlined">wysiwyg</span>
                            Whish List
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}