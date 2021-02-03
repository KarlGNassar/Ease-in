import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import { SliderData } from './data/SliderData'
import Hero from './components/Hero.js';
import Quotes from './components/Quotes';
import VideoHero from './components/VideoHero'
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <VideoHero />
      <Quotes />
      <Hero slides={SliderData} />
      <Footer />
    </>
  );
}

export default App;
