import './App.css';
import Hero from './component/Hero';
// import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ResumeData from './component/ResumeData';
import AboutMe from './component/AboutMe'
// import Resume from './component/Resume'
// import Portfolio from './component/Portfolio'
// import Testimonials from './component/Testimonials'
import ContactUs from './component/ContactUs';
// import Footer from './component/Footer'
import Nopage from './component/Nopage.js';
import Project from './component/Project';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (

    <>
        <BrowserRouter>
      <AnimatePresence mode="wait">
          <Routes >
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/projects" element={<Project />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
      </AnimatePresence>

        </BrowserRouter>
    </>
  );
}

export default App;
