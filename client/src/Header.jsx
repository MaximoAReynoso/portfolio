import React from 'react'
import './Header.css'

function Header(){
    return (
        <>
            <div className='header'>
                <p className='text'>M. Reynoso</p>
            </div>
            <div className='options'>
                <div><a href='#'>Home</a></div>
                <div><a href='#'>Education</a></div>
                <div><a href='#'>Skills</a></div>
                <div><a href='#'>Contact</a></div>
            </div>
        </>
    )
}

export default Header;