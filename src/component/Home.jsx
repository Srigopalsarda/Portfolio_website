import React from 'react'
import logo from '../assets/logo.png'

function Home() {
    return (
        <div id='Homepage' className='bg1'>
            <nav className='navbar'>
                <a><img src={logo} alt='Logo' className='logo' /></a>
                <ul className='nav-links'>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Skills'>Skills</a></li>
                    <li><a href='#Projects'>Projects</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                </ul>
            </nav>

            <div className='hero'>
                <h1 className='hero-text'>Gopal Sarda</h1>
            </div>
        </div>
    )
}

export default Home
