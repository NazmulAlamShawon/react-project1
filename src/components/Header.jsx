import React from 'react'
import { Navbar } from './Navbar'
import HeroSection from './HeroSection'

const Header = () => {
  return (
    <header className='container'>
     <Navbar />
     <HeroSection />
    </header>
  )
}

export default Header