import React from 'react'
import { about } from '../../Data/AboutData/AboutData'
import Footer from '../footer/Footer'
import SubAbout from './SubAbout'
function About() {
  return (
    <div>
        {about.map((data,aboutkey)=>(
      <SubAbout
     class={data.class}
     head={data.head}
     left={data.left}
     right={data.right}
     key={aboutkey}
      />
      ))}
      <div className='misssio  p-md-5' style={{backgroundColor:"rgb(118 118 109 / 26%)"}}>
        <div className='m-md-5'>
        <h1 className='text-center mt-4'>Our Mission</h1>
        <p  className="col-md-8 p-2 h1-md m-auto">Our mission is to empower Students with the tools
they need to achieve dynamic learning
environments that engage and inspire students.</p>
<h1 className='text-center mt-4'>Our Vision</h1>
<p  className="col-md-8 p-2 m-auto">We believe in the power of education to transform
lives and empower communities. Our Vision is to
provide affordable, convenient, and access to highquality education to everyone.
</p>
</div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
