import React from 'react';
import '../App.css';
import Transition2 from '../Transition2';
import backgroundImage from '../assets/aboutme2image.jpg';
import Navbar from './Navbar';
import ScrollImage from '../assets/scroll.gif';
import { AnimatedText } from './Animatedtext1';
import profilepic from '../assets/profile.png';
import { AnimatedText2 } from './Animatedtext2';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import '../css/About.css';
import { Bounce } from 'react-reveal';
import Reveal from 'react-reveal/Reveal';
import bitslogo from '../assets/bitslogo.png';
import htmllogo from '../assets/html.png';
import csslogo from '../assets/css.png';
import javascriptlogo from '../assets/javascriptlogo.png';
import reactlogo from '../assets/reactlogo.png';
import typescriptlogo from '../assets/typescriptlogo.png';
import mysqllogo from '../assets/mysql.png';
import cpp from '../assets/c.svg';
import pythonlogo from '../assets/python.png';
import nodejslogo from '../assets/nodejs.png';
import profilepicsmall from '../assets/profilepic.png'
const AboutMe = () => {
   const aboutmestyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      width: '98.9vw',
      height: '100vh'
   }
   const aboutmestyle2 = {
      // backgroundImage: `url(${backgroundImage2})`,
      backgroundSize: 'cover',
      width: '98.9vw',
      height: '100vh'
   }
   const sectionStyle = {
      position: "fixed",
      width: "98.9vw",
      zIndex: "1"
   }
   const Headingstyle = {
      fontFamily: "Remeole",
      // fontSize:"8.2rem",
      color: "white",
      textShadow: "8px 8px 4px #000000",
   }
   const scrollbaranimation = {
      position: "fixed",
      marginTop: "30%",
      width: "5%",
      zIndex: "2",

   }

   const profile = {
      height: "25%",
      width: "25%",
      marginTop: "20%",
   }

   return (
      <>
         <div style={sectionStyle}>
            <Navbar />
         </div>
         <div className="flex flex-col justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-30 w-screen" style={aboutmestyle}>
            <h1 className="name text-7xl md:text-9xl font-bold mb-6 text-white" style={Headingstyle}><AnimatedText text="About Me" /></h1>
            <div style={scrollbaranimation}>
               <img src={ScrollImage} alt="" />
            </div>
         </div>
         <div className=' hidden md:visible'>
         <div className="flex flex-col justify-center items-center backdrop-filter backdrop-blur-3xl bg-opacity-10 w-screen" style={aboutmestyle2}>
            <div className="container flex flex-col md:flex-row justify-center items-center bg-white h-4/5 w-4/5 boxshadow backdrop-blur-lg bg-opacity-30 ">
               <img src={profilepicsmall} style={{borderRadius:"50%"}}className='h-32 w-32 mb-6 visible md:hidden '/>
               <div className='flex flex-col justify-center items-center md:justify-start md:items-start '>
                  <h1 className='text-3xl md:text-7xl mb-6 ml-8' style={{ fontFamily: "roemelo" }}><AnimatedText text="So who Am I ?" /></h1>
                  <h2 className='text-xl md:text-3xl mb-6 ml-8' style={{ fontFamily: "roemelo" }}><AnimatedText2 text="I'm a Full Stack developer :)" /></h2>
                  <div className=' text-xs ml-8 mr-8 md:text-0.5xl ' style={{ fontFamily: "'lora',sans-serif " }}>Hello there! I'm Srigopal Sarda, a passionate fourth-year student pursuing my major in Electronics and Communication Engineering at BITS Pilani. I wear many hats - I am a dedicated web developer, a skilled software developer, and a creative artist. My journey in the world of technology and art has been an exciting and fulfilling one, where I've had the opportunity to explore the intersections between creativity and code.</div>
               </div>
               <img src={profilepic} alt="" className='hidden md:visible h-44 md:h-96 ml-5 mr-5 ' style={{ filter: "drop-shadow(14px 3px 8px #000000)" }} />
            </div>
         </div>
         </div>
         
         <div className="flex flex-col justify-center items-center backdrop-filter backdrop-blur-3xl bg-opacity-10 w-screen" style={aboutmestyle2}>
            <div className="container flex flex-col md:flex-row justify-center items-center bg-white h-4/5 w-4/5 boxshadow backdrop-blur-lg bg-opacity-30 ">
               <img src={profilepic} style={{borderRadius:"50%"}}className='h-32 w-32 mb-6 hidden md:visible '/>
               <div className='flex flex-col justify-center items-center md:justify-start md:items-start '>
                  <h1 className='text-3xl md:text-7xl mb-6 ml-8' style={{ fontFamily: "roemelo" }}><AnimatedText text="So who Am I ?" /></h1>
                  <h2 className='text-xl md:text-3xl mb-6 ml-8' style={{ fontFamily: "roemelo" }}><AnimatedText2 text="I'm a Full Stack developer :)" /></h2>
                  <p className=' text-xs ml-8 md:text-0.5xl mr-8' style={{ fontFamily: "'lora',sans-serif " }}>Hello there! I'm Srigopal Sarda, a passionate fourth-year student pursuing my major in Electronics and Communication Engineering at BITS Pilani. I wear many hats - I am a dedicated web developer, a skilled software developer, and a creative artist. My journey in the world of technology and art has been an exciting and fulfilling one, where I've had the opportunity to explore the intersections between creativity and code.</p>
               </div>
               <img src={profilepic} alt="" className='hidden md:visible h-44 md:h-96 ml-5 mr-5 ' style={{ filter: "drop-shadow(14px 3px 8px #000000)" }} />
            </div>
         </div>
        
         <ParallaxProvider>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-around">
               <Parallax className='education ' y={[-40, 20]} tagOuter="figure">
                  <Fade top>
                     <h2 className='text-3xl mt-32 mb-16' style={{fontFamily:"lora"}}>Education</h2>
                  </Fade>
                  <Bounce left y={[-20, 20]}>

                  <div>
                     <div className=' flex mb-16 md:mb-8'>
                        <img className='h-8 mr-3' src={bitslogo}/>
                        <div className='flex flex-row md:flex-col justify-center items-center'>
                           <p> <b>BTech </b>&nbsp;in Electronic and communication Engineering</p>
                           <p className='text-xs ml-3'>(2020-2024)</p>

                        </div>
                        
                        </div>

                        
                       
                        <div className='flex flex-col mb-16 md:mb-8 justify-center items-center md:justify-start md:items-start'>
                           <p className='text-2xl'> <b>Courses</b></p>
                            <p className='text-l' style={{fontFamily:"lora"}}>1) Data Structures and Algorithms</p>
                              <p className='text-l'style={{fontFamily:"lora"}}>2) Object Oriented Programming</p>
                              <p className='text-l'style={{fontFamily:"lora"}}>4) Operating Systems</p>
                              <p className='text-l'style={{fontFamily:"lora"}}>5) Database Management Systems</p>
                              <p className='text-l'style={{fontFamily:"lora"}}>8) Microprocessors</p>                       
                        </div>

                        <div className='flex mb-8 flex-col justify-center items-center md:justify-start md:items-start'>
                           <p className='text-2xl '> <b>Positions</b></p>
                            <p className='text-l'style={{fontFamily:"lora"}}>1) Ex-member of Automation and Robotics club</p>
                              <p className='text-l'style={{fontFamily:"lora"}}>2) Ex-member of Department of Sponsorship and Marketing</p>
                             

                        </div>
                        
                  </div>      
                     
                    
                  </Bounce>
               </Parallax>

               <Parallax y={[-20, 20]} tagOuter="figure">
                  <Fade top>
                     <h2 className='text-3xl ml-12 mt-32 mb-16' style={{fontFamily:"lora"}}>Tech Stacks</h2>
                  </Fade>
                  <Bounce delay={300} y={[-20, 20]}  >
                     <div className='h-16 w-72 flex flex-wrap' >
                    <img src={htmllogo} alt="" className="h-24" />
                    <img src={csslogo} alt="" className="h-24" />
                    <img src={javascriptlogo} alt="" className="h-24" />
                    <img src={reactlogo} alt="" className="h-24" />
                    <img src={cpp} alt="" className="h-24 ml-1 mr-1.5" />
                    <img src={mysqllogo} alt="" className="h-24" />
                    <img src={typescriptlogo} alt="" className="h-24" />
                    <img src={pythonlogo} alt="" className=" h-24" />
                    <img src={nodejslogo} alt="" className="h-24" />

                    </div>
                    </Bounce>
               </Parallax>

               <Parallax y={[-20, 20]} tagOuter="figure">
                  <Fade y={[-10, 20]} top>
                     <h2 className='text-3xl md:ml-6 ml-24 md:mt-32 mt-72 mb-16' style={{fontFamily:"lora"}}>Hobbies</h2>
                  </Fade>

                  <Bounce right >

<div className='flex flex-col items-center ml-4 justify-center md:justify-start md:items-start'>

                     <p className='mb-8 text-l' style={{fontFamily:"lora"}}>Learning about different Technologies</p>
                     <p className='mb-8 text-l' style={{fontFamily:"lora"}}>Programming and Coding </p>
                     <p className='mb-8 text-l' style={{fontFamily:"lora"}}>Problem and puzzles Solving </p>
                     <p className='mb-8 text-l' style={{fontFamily:"lora"}}>Learning different instruments like flute, Guitar</p>
</div>
                  </Bounce>
               </Parallax>

            </div>
         </ParallaxProvider>



      </>
   );
};

export default Transition2(AboutMe);
