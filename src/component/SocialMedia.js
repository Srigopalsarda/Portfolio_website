import React from 'react'
import '../App.css'
import githublogo from '../assets/github.gif'
import linkedinlogo from '../assets/linkedin.gif'
import instagram from '../assets/instagramlogo.gif'
import { Link } from 'react-router-dom'

function SocialMedia() {
  return (
    <div>
      <ul className="wrapper">
    <li className="icon linkedin">
        <span className="tooltip">Linkedin</span>
        <Link target='_blank' to="https://www.linkedin.com/in/gopalsarda/"><img alt="" className='linkedinlogo' src={linkedinlogo}></img></Link>
    </li>
    <li className="icon github">
        <span className="tooltip">Github</span>
       <Link target="_blank" to="https://github.com/Srigopalsarda"> <img alt="" className='githublogo' src={githublogo}></img> </Link>
    </li>
    <li className="icon instagram">
        <span className="tooltip">Instagram</span>
       <Link target="_blank" to="https://www.instagram.com/yashsarda_007"><img alt="" className='instagramlogo' src={instagram}  /></Link> 
    </li>
</ul>
    </div>
  )
}

export default SocialMedia
