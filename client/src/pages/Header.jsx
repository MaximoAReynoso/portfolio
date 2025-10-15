import './Header.css'

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Language (){
    const [text, setText] = useState('ENG');

    const handleClick = () => {
        setText(prev => (prev === 'ENG' ? 'ESP' : 'ENG'));
    };

    return (
        <p onClick={handleClick} className='languageSelector'>
            {text}
        </p>
    )
}

function Header(){
    return (
        <>
            <div className='header'>
                <p className='text'>M. Reynoso</p>
                <Language />
            </div>
            <div className='options'>
                <div><Link className="nav-link" to='/'>Home</Link></div>
                <div><Link className="nav-link" to='/'>Education</Link></div>
                <div><Link className="nav-link" to='/projects'>Projects</Link></div>
                <div><Link className="nav-link" to='/'>Skills</Link></div>
                <div><Link className="nav-link" to='/contact'>Contact</Link></div>
            </div>
        </>
    )
}

export {Header, Language};