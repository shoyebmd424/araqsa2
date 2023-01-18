import React from 'react'
import "./Feature.css";
function Feature() {
  return (
    <div className='bg-white mt-5 p-5'>
        <h1 className=' text-uppercase text-center text-primary'>Course feature</h1>
     <li className='d-flex feature-p ms-5'><span className='px-5 lesh  py-3 bg-warning rounded rounded-5'><span className='mx-3 h3'>1</span></span> <div className='px-5 leshp h5 border  shadow bg-secondary p-3 bg-light ms-5 rounded-5'>Account access to grades, reports, and managing your classes.</div></li>
     <li className='d-flex feature-p ms-5 '><span className='px-5 lesh   py-3 bg-primary rounded rounded-5'><span className='mx-3 h3'>2</span></span> <div className='px-5 leshp h5 border  shadow bg-secondary p-3 bg-light ms-5 rounded-5'>Read the Textbook and Quran directly in your account.</div></li>
     <li className='d-flex feature-p ms-5'><span className='px-5 lesh   py-3 bg-success rounded rounded-5'><span className='mx-3 h3'>3</span></span> <div className='px-5 leshp h5 border  shadow bg-secondary p-3 bg-light ms-5 rounded-5'>A complete course structure, so you know where your child is and where they are going.</div></li>
     <li className='d-flex feature-p ms-5'><span className='px-5 lesh   py-3 bg-secondary rounded rounded-5'><span className='mx-3 h3'>4</span></span> <div className='px-5 leshp h5 border  shadow bg-secondary p-3 bg-light ms-5 rounded-5'>Words in the practices and the tests are taken from the Quran in order to familiarize learners with Quranic words</div></li>
     <li className='d-flex feature-p ms-5'><span className='px-5 lesh   py-3 bg-warning rounded rounded-5'><span className='mx-3 h3'>5</span></span> <div className='px-5 leshp h5 border  shadow bg-secondary p-3 bg-light ms-5 rounded-5'>“Reference-Practice-Test” methodology, making it suitable both for learning by yourself and accompanied by a teacher.</div></li>
    </div>
  )
}

export default Feature
