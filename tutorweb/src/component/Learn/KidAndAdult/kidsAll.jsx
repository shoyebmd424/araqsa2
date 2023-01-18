import React from 'react'
import Footer from '../../footer/Footer';
import Navbar from '../Norani/LearnNavbar/Navbar';
import NooraniTop from '../Norani/NooraniTop/NooraniTop';
import Overview from '../Norani/overview.jsx/Overview';
import Topscroll from '../Norani/Topscroll';
import {kidadultOverData} from "../../../Data/Nooranidata/overdata";
import Curriculum from '../Norani/Curriculum/Curriculum';
import { KidAndAdultCurri, Left } from '../../../Data/Nooranidata/Curridata';
import Childlearn from './Childlearn/childlearn';
import Courses from './courses/Courses';
import { bonuscourse, hifz, morals, noorani, qirat, quran, stud, tajweed } from '../../../Data/kidAndAdultData/Coursesdata';
import IslamicStudies from './courses/IslamicStudies';
import Bonus from './bonus/Bonus';
import Feature from './Feature/Feature';
import Moral from './bonus/Moral';
import Batch from '../../Batch/Batch';
import Certification from '../Norani/certification/Certification';
import FeesPlan from '../Norani/feesplan/FeesPlan';
import ParentSay from '../Norani/perentSay/ParentSay';
import Learnfaq from '../Norani/LearnFaq/Learnfaq';
import Start from '../../start/Start';
import { kidStudent } from '../../../Data/StudentData';
import { kidFaq } from '../../../Data/Nooranidata/learnFaqdata';
function kidsAll() {
  return (
    <div>
     <div className=' learn' id='top'>
        <div className="container-fluid">
            <div className="row ">
                <h2 className=' mt-5 mb-3 text-capitalize text-danger'>Quran for kids And Adult</h2>
                <div className="col-lg-11 col-sm-12  m-auto">
                <NooraniTop/>
                <Navbar/>
                <Overview data={kidadultOverData}  id="overview"/>
                <Curriculum Left={Left} course="The Quran for Kids And Adult" Curriculum={KidAndAdultCurri}/>
                <Childlearn/>
                <Courses course={tajweed} 
                />
                <Courses course={noorani}/>
                <Courses course={quran}/>
                <Courses course={qirat}/>
                <Bonus/>
                <IslamicStudies name={stud.name}
                list={stud.list}
                com=""
                img={stud.img}
                p="p-3"
                />
                <IslamicStudies name={bonuscourse.name}
                com={bonuscourse.comlimentary}
                list={bonuscourse.list}
                img={bonuscourse.img}
                p=""
                
                />
                <Moral course ={morals} l="disc"/>
                <Moral course ={hifz}/>
              <Feature/>
              <Batch/>
               <Certification id="certifiaction"/>
               <FeesPlan id="fees"/>
               <ParentSay studentData={kidStudent}
               />
               <Learnfaq learnfaq={kidFaq}/>
              <Start/>  
                </div>
            </div>
        </div>
        <Footer/>
        <Topscroll/>
    </div>
    </div>
  )
}

export default kidsAll
