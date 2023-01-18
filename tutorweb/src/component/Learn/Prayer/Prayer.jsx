import React from 'react'
import { Prayerdata } from '../../../Data/PrayerData/PrayerData'
import Batch from '../../Batch/Batch'
import Footer from '../../footer/Footer'
import Start from '../../start/Start'
import Certification from '../Norani/certification/Certification'
import FeesPlan from '../Norani/feesplan/FeesPlan'
import Navbar from '../Norani/LearnNavbar/Navbar'
import NooraniTop from '../Norani/NooraniTop/NooraniTop'
import Topscroll from '../Norani/Topscroll'

function Prayer() {
  return (
    <div>
     <div className="container">
     <h2 className=' mt-5 mb-3 text-capitalize text-danger'>Islamic Prayers</h2>
     <NooraniTop/>
               <Navbar/>
               <div id="overview">
        {Prayerdata.map((data,prayerkey)=>(<>
            <span key={prayerkey}>{data.head}</span>
            <div>{data.p}</div>
            </>
        ))}
        </div>
        <Batch/>
        <Certification id="certifiaction"/>
        <FeesPlan id="fees"/>
     </div>
     <span id='reviews'><Start/> </span>
     <span id='faq'> <Footer/></span>
        <Topscroll/>
    </div>
  )
}

export default Prayer
