import React from 'react'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header/index'
import Navbar from './components/navbar/index'
import Services from './components/services'
import Skills from './components/skills'
import Project from './components/project'
import Experience from './components/experiences'
function HomePage() {
  return (
    <div className='scroll-smooth overflow-hidden'>
       <Navbar></Navbar>
       <Header></Header>
       <Contact></Contact>
       <Services></Services>
       <Skills></Skills> 
       <Project></Project>
       <Experience></Experience>     
       <Footer></Footer>
    </div>
  )
}

export default HomePage