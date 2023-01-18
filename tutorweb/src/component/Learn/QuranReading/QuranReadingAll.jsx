import React from "react";
import { Rchilddata } from "../../../Data/Nooranidata/childlearn";
import { Rcurri } from "../../../Data/Nooranidata/Curridata";
import { readiLearnfaq } from "../../../Data/Nooranidata/learnFaqdata";
import { Readingdata, Recitingoverdata } from "../../../Data/Nooranidata/overdata";
import { rstudentdata } from "../../../Data/StudentData";
import Batch from "../../Batch/Batch";
import Footer from "../../footer/Footer";
import Start from "../../start/Start";
import IslamicStudies from "../KidAndAdult/courses/IslamicStudies";
import HeadTemplate from "../Memorization/HeadTemplate";
import Certification from "../Norani/certification/Certification";
import FeesPlan from "../Norani/feesplan/FeesPlan";
import Learnfaq from "../Norani/LearnFaq/Learnfaq";
import Navbar from "../Norani/LearnNavbar/Navbar";
import NooraniTop from "../Norani/NooraniTop/NooraniTop";
import Overview from "../Norani/overview.jsx/Overview";
import ParentSay from "../Norani/perentSay/ParentSay";
import Topscroll from "../Norani/Topscroll";
import Rbonus from "./Rbonus";
import RecitingOvr from "./RecitingOvr";
import Rfeature from "./Rfeature";


function QuranReadingAll() {
  return (
    <div className=" learn" id="top">
      <div className="container-fluid">
        <div className="row ">
          <h2 className=" mt-5 mb-3 text-capitalize text-danger">
           Qura'an Reading and Reciting
          </h2>
          <div className="col-lg-11 col-sm-12  m-auto">
            <NooraniTop />
            <Navbar/>
            <div>
                <HeadTemplate course="Quran Reading & Recitation" by="Involves learning to Read and Recite Verses (Ayats) from the Quran"/>
                <Overview data={Readingdata} id="overview" />
                <RecitingOvr course={Recitingoverdata.name} list={Recitingoverdata.list}/>
                <RecitingOvr course={Rcurri.name} list={Rcurri.list}/>
                <Rbonus/>
                <IslamicStudies
                name={Rchilddata.name}
                list={Rchilddata.list}
                com=""
                img={Rchilddata.img}
                p=" "
              />
              <Rfeature/>
               <Certification id="certifiaction" />
              <Batch />
              <FeesPlan id="fees" />
              <ParentSay studentData={rstudentdata} />
              <Learnfaq learnfaq={readiLearnfaq} />
              <Start />
            </div>
          </div>
        </div>
        <Footer />
        <Topscroll />
      </div>
    </div>
  );
}

export default QuranReadingAll;
