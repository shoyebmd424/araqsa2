import React from 'react'
import { ArabicLearn } from '../../../Data/Nooranidata/childlearn'
import { ArabicCurri } from '../../../Data/Nooranidata/Curridata'
import { ArabicFaq } from '../../../Data/Nooranidata/learnFaqdata'
import { ArabicOver } from '../../../Data/Nooranidata/overdata'
import { ArabicStudent } from '../../../Data/StudentData'
import Batch from '../../Batch/Batch'
import Footer from '../../footer/Footer'
import Start from '../../start/Start'
import Courses from '../KidAndAdult/courses/Courses'
import HeadTemplate from '../Memorization/HeadTemplate'
import Certification from '../Norani/certification/Certification'
import FeesPlan from '../Norani/feesplan/FeesPlan'
import Learnfaq from '../Norani/LearnFaq/Learnfaq'
import Navbar from '../Norani/LearnNavbar/Navbar'
import NooraniTop from '../Norani/NooraniTop/NooraniTop'
import Overview from '../Norani/overview.jsx/Overview'
import ParentSay from '../Norani/perentSay/ParentSay'
import Topscroll from '../Norani/Topscroll'
import RecitingOvr from '../QuranReading/RecitingOvr'
import ArabicBonus from './ArabicBonus'
import ArabicFeature from './ArabicFeature'

function ArabicAll() {
  return (
    <div className=" learn" id="top">
        <div className="container-fluid">
          <div className="row ">
            <h2 className=" mt-5 mb-3 text-capitalize text-danger">
              Tajweed Course
            </h2>
            <div className="col-lg-11 col-sm-12  m-auto">
              <NooraniTop />
              <Navbar/>
              <HeadTemplate course="بسم الله الرحمن الرحيم         Arabic Language Course" by="     Knowledge of languages is the doorway to wisdom معرفة اللغات مدخل إلى الحكمة."/>
              <Overview data={ArabicOver} id="overview"/>  
              <Courses course={ArabicCurri}  />
              <ArabicBonus/>
              <RecitingOvr course={ArabicLearn.name} list={ArabicLearn.list}/>
              <ArabicFeature/>
              <Certification id="certifiaction" />
              <Batch />
              <FeesPlan id="fees" />
              <ParentSay studentData={ArabicStudent}
               />
                 <Learnfaq learnfaq={ArabicFaq}/>
                 <Start />
                </div>
    </div>
    </div>
    <Footer />
        <Topscroll />
    </div>
  )
}

export default ArabicAll
