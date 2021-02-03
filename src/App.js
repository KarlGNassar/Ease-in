import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyle'
import { SliderData } from './data/SliderData'
import Hero from './components/Hero.js'
import Quotes from './components/Quotes'
import VideoHero from './components/VideoHero'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import BounceLoader from "react-spinners/BounceLoader"


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    {
      loading ?
      <div className="loader">
        <BounceLoader color={'#ffaf17'} loading={loading} size={100} />
      </div>
      :
      <>  
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <VideoHero />
      <Quotes />
      <Hero slides={SliderData} />
      <Footer />
      </>
    
    } 
    </>
  );
}

export default App;
