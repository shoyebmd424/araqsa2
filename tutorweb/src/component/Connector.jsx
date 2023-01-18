import React from 'react'
import Courses from './courses/Courses'
import Fact from './Fact/Fact'
import Feature from './Feature/Feature'
import Footer from './footer/Footer'
import Home from './Home/Home'
import OurTraner from './OurTrainer/OurTraner'
import Plan from './Plan/Plan'
import Start from './start/Start'
import Students from './Students/Students'

function Connector() {
  return (
    <div>
      <Home/> 
    <Courses/>
    <Plan/>
    <Feature/>
    <Fact/>
    <Students/>
    <OurTraner/>
    <Start/>
    <Footer/>
    </div>
  )
}

export default Connector
