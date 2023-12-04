import React from 'react'
import Transition3 from '../Transition3';
import Navbar from './Navbar';
import ScrollImage from '../assets/scroll.gif';
import { AnimatedText } from './Animatedtext1';
import project1 from '../assets/bg1.jpg';
import githublogo from '../assets/github.gif'

import backgroundImage from '../assets/projectspic.jpg';
import { AnimatedText2 } from './Animatedtext2';

function Project() {
  const sectionStyle = {
    position: "fixed",
    width: "98.9vw",
    zIndex: "1"
  }
  const Headingstyle = {
    fontFamily: "Remeole",
    // fontSize:"8.2rem",
    textShadow: "8px 8px 4px #000000",
  }
  const scrollbaranimation = {
    position: "fixed",
    marginTop: "30%",
    width: "5%",
    zIndex: "2",

  }
  const aboutmestyle = {

    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    width: '98.9vw',
    height: '100vh',
  }
  return (
    <>
      <div style={sectionStyle}>
        <Navbar color="black" />
      </div>

      <div className="flex flex-col justify-center md:bg-blend-darken items-center backdrop-filter backdrop-blur-lg bg-opacity-0 w-screen" style={aboutmestyle}>

        <h1 className="name text-7xl md:text-9xl font-bold mb-6  text-sky-200" style={Headingstyle}><AnimatedText text="Projects" /></h1>
        <div style={scrollbaranimation}>
          <img src={ScrollImage} alt="scrollimage" />
        </div>
      </div>
      <div className='flex justify-center items-center h-44'>
      <p style={{fontFamily:"Lora"}}><AnimatedText2 className="text-2xl md:text-5xl font-bold mb-6  text-sky-700" text="Some of my Recent Projects ..." />
      </p>
      </div>
      <div className='flex flex-row justify-evenly flex-wrap items-start '>

        <div className=" book mr-2">
        <div className='flex flex-col justify-center items-center '>
          <p className='pl-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus in iure molestias libero explicabo blanditiis iste quia recusandae officia totam, dolorum aperiam voluptatem reiciendis nam debitis sint culpa quaerat?</p>
        <a target="_blank" href='https://github.com'><img src={githublogo} className='h-16 w-16 mt-4'/></a>
        </div>
        <div className=" text-white cover w-full h-full flex flex-col justify-start items-start">
          <img src={project1} className='p-4' alt=''></img>
          <p className='p-4'>Lets Read</p>
        </div>

        </div>
        <div className=" book mr-2">
        <div className='flex flex-col justify-center items-center '>
          <p className='pl-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus in iure molestias libero explicabo blanditiis iste quia recusandae officia totam, dolorum aperiam voluptatem reiciendis nam debitis sint culpa quaerat?</p>
        <a target="_blank" href='https://github.com'><img src={githublogo} className='h-16 w-16 mt-4'/></a>
        </div>
        <div className=" text-white cover w-full h-full flex flex-col justify-start items-start">
          <img src={project1} className='p-4' alt=''></img>
          <p className='p-4'>Lets Read</p>
        </div>

        </div><div className=" book mr-2">
        <div className='flex flex-col justify-center items-center '>
          <p className='pl-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus in iure molestias libero explicabo blanditiis iste quia recusandae officia totam, dolorum aperiam voluptatem reiciendis nam debitis sint culpa quaerat?</p>
        <a target="_blank" href='https://github.com'><img src={githublogo} className='h-16 w-16 mt-4'/></a>
        </div>
        <div className=" text-white cover w-full h-full flex flex-col justify-start items-start">
          <img src={project1} className='p-4' alt=''></img>
          <p className='p-4'>Lets Read</p>
        </div>

        </div><div className=" book mr-2">
        <div className='flex flex-col justify-center items-center '>
          <p className='pl-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus in iure molestias libero explicabo blanditiis iste quia recusandae officia totam, dolorum aperiam voluptatem reiciendis nam debitis sint culpa quaerat?</p>
        <a target="_blank" href='https://github.com'><img src={githublogo} className='h-16 w-16 mt-4'/></a>
        </div>
        <div className=" text-white cover w-full h-full flex flex-col justify-start items-start">
          <img src={project1} className='p-4' alt=''></img>
          <p className='p-4'>Lets Read</p>
        </div>

        </div><div className=" book mr-2">
        <div className='flex flex-col justify-center items-center '>
          <p className='pl-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus in iure molestias libero explicabo blanditiis iste quia recusandae officia totam, dolorum aperiam voluptatem reiciendis nam debitis sint culpa quaerat?</p>
        <a target="_blank" href='https://github.com'><img src={githublogo} className='h-16 w-16 mt-4'/></a>
        </div>
        <div className=" text-white cover w-full h-full flex flex-col justify-start items-start">
          <img src={project1} className='p-4' alt=''></img>
          <p className='p-4'>Lets Read</p>
        </div>

        </div>
      </div>

    </>
  )
}

export default Transition3(Project)
