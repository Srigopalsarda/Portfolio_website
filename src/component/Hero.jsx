import React from 'react';
import backgroundImage from '../assets/6191107.jpg';
import { motion } from "framer-motion";
import Navbar from './Navbar';
import Button from './button';
import profilewithhat from '../assets/profilewithhat-transformed.png';
import SocialMedia from './SocialMedia';
import Transition from '../Transition';
import { AnimatedText } from './Animatedtext1';
import { AnimatedText2 } from './Animatedtext2';
import profilepic from '../assets/profilepic.png'

const Hero = () => {
    const sectionStyle = {
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        // backgroundColor:"#212121",
        backgroundSize: 'cover',
    };
    const profile_style={
        // height:"680px",
        // width:"600px",
        filter:"drop-shadow(32px 32px 4px 0.75rem #ffffff)"

    }

    return (
        <div style={sectionStyle} className='flex '>
        
            <Navbar color="white"/>
            <section className="h-screen flex flex-col md:flex-row justify-center items-center bg-cover bg-center hero_style" style={sectionStyle}>
                <div className="max-w-3xl text-center md:text-start flex flex-col justify-center items-center flex-start text-white">
                    <div className='flex flex-col md:justify-start md:items-start justify-center items-center'>
                    <img src={profilepic} className="h-32 w-32 md:hidden mb-10 " style={{borderRadius:"50%"}}/>
                <motion.h1 className="name text-2xl md:text-5xl font-bold ml-0 md:ml-16 mb-6"><AnimatedText2 text="Hi!"/></motion.h1>
                    <motion.h1 className="name text-3xl md:text-6xl font-bold ml-0 md:ml-16 mb-6"><AnimatedText text="I am Gopal Sarda!"/></motion.h1>
                    <motion.p className="text-0.5xl md:text-xl ml-0 md:ml-16 mb-8"><AnimatedText2 text=" Web Developer | Artist | Software Developer"/></motion.p>
                    </div>
                    
                    <SocialMedia/>
                </div>
            <img style={profile_style} className='w-0 h-0 sm:w-0 sm:h-0 md:w-2/4 md:h-full' src={profilewithhat} alt='profile pic'/> 
            </section>
        </div>
    );
};

export default Transition(Hero);
