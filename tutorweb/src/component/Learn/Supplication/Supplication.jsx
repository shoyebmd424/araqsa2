import React from 'react'
import { supplicationdata } from '../../../Data/SupplicationData/SupplicationData';
import Batch from '../../Batch/Batch';
import Footer from '../../footer/Footer';
import Start from '../../start/Start';
import Certification from '../Norani/certification/Certification';
import FeesPlan from '../Norani/feesplan/FeesPlan';
import Navbar from '../Norani/LearnNavbar/Navbar';
import NooraniTop from '../Norani/NooraniTop/NooraniTop';
import Topscroll from '../Norani/Topscroll';

function Supplication() {
  return (
    <div>
      <div className="container">
      <h2 className=' mt-5 mb-3 text-capitalize text-danger'>Islamic Supplication </h2>
      <NooraniTop/>
               <Navbar/>
      <div id='overview' >
            {supplicationdata.map((data,licationdatakey)=>(<>
                <span key={licationdatakey}>{data.head}</span>
                <div>{data.p}</div>
                </>
            ))}
        </div>
        <Batch/>
        <Certification id="certifiaction"/>
        <FeesPlan id="fees"/>
      </div>
  <span id='faq'>    <Start/> </span>
    <span id='reviews'>  <Footer/></span>
        <Topscroll/>
    </div>
  )
}

export default Supplication;
