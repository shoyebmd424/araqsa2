import React from 'react'
import Footer from "../../footer/Footer";
import Start from '../../start/Start';
import Navbar from './LearnNavbar/Navbar';
import Overview from './overview.jsx/Overview';
import Curriculum from './Curriculum/Curriculum';
import Childlearn from './childlearn/Childlearn';
import CourseFeature from './coursefeature/CourseFeature';
import Batch from "../../Batch/Batch";
import Certification from './certification/Certification';
import FeesPlan from './feesplan/FeesPlan';
import ParentSay from './perentSay/ParentSay';
import Learnfaq from './LearnFaq/Learnfaq';
import NooraniTop from './NooraniTop/NooraniTop';
import Topscroll from './Topscroll';
import { nooranioverdata } from '../../../Data/Nooranidata/overdata';
import { Curriculamdata, Nleft } from '../../../Data/Nooranidata/Curridata';
import {nooraniStudent} from "../../../Data/StudentData";
import { learnfaq } from '../../../Data/Nooranidata/learnFaqdata';
import img from "../../../All_image/Course images/Noorani-qaida-circle.jpg";
function Learn() {
  return (
    <div className=' learn' id='top'>
        <div className="container-fluid">
            <div className="row ">
                <h2 className=' mt-5 mb-3 text-capitalize text-danger'>Noorani Qaida</h2>
                <div className="col-lg-11 col-sm-12  m-auto">
                <NooraniTop/>
               <Navbar/>
               <Overview data={nooranioverdata} id="overview"/>
               <Curriculum Left={Nleft} course="Noorani Quida" Curriculum={Curriculamdata} id="curriculum"/>
               <div className='mt-5 p-3 bg-white text-center'>
                <h1 className='text-primary text-start'>Free Bonus with The Noorani Qaida course</h1>
                <img src={img} className="col-md-5 col-sm-8 col-12" alt="" />
               </div>
               <Childlearn />
               <CourseFeature/>
               <Batch/>
               <Certification id="certifiaction"/>
               <FeesPlan id="fees"/>
               <ParentSay studentData={nooraniStudent}
               />
                <Learnfaq learnfaq={learnfaq}/>
              <Start/>  
                </div>
            </div>
        </div>
        <Footer/>
        <Topscroll/>
    </div>
  )
}

export default Learn
