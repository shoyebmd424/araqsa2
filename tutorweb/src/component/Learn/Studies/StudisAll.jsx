import React from 'react'
import { studies } from '../../../Data/Studies/Studies';
import Batch from '../../Batch/Batch';
import Footer from '../../footer/Footer';
import Start from '../../start/Start';
import Certification from '../Norani/certification/Certification';
import FeesPlan from '../Norani/feesplan/FeesPlan';
import Navbar from '../Norani/LearnNavbar/Navbar';
import NooraniTop from '../Norani/NooraniTop/NooraniTop';
import Topscroll from '../Norani/Topscroll';

function StudisAll() {
  return (
    <div>
        <div className="container">
        <h2 className=' mt-5 mb-3 text-capitalize text-danger'>Islamic studies</h2>
        <NooraniTop/>
               <Navbar/>
      <div className="about" >
        {studies.map((data,key)=>(<>
            <span>{data.head}</span>
            <div>{data.p}</div>
            </>
        ))}
       
        <Batch/>
        <Certification id="certifiaction"/>
        <FeesPlan id="fees"/>
      </div>
      </div>
        <Start/> 
      <Footer/>
        <Topscroll/>
    </div>
  )
}

export default StudisAll;
