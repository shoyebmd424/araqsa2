import React from "react";
import { memorylearn } from "../../../Data/kidAndAdultData/childlearn";
import { memorycurri } from "../../../Data/Nooranidata/Curridata";
import { Faqmemory } from "../../../Data/Nooranidata/learnFaqdata";
import { Memorydata } from "../../../Data/Nooranidata/overdata";
import { smemorization } from "../../../Data/StudentData";
import Batch from "../../Batch/Batch";
import Footer from "../../footer/Footer";
import Start from "../../start/Start";
import IslamicStudies from "../KidAndAdult/courses/IslamicStudies";
import Certification from "../Norani/certification/Certification";
import FeesPlan from "../Norani/feesplan/FeesPlan";
import Learnfaq from "../Norani/LearnFaq/Learnfaq";
import Navbar from "../Norani/LearnNavbar/Navbar";
import NooraniTop from "../Norani/NooraniTop/NooraniTop";
import Overview from "../Norani/overview.jsx/Overview";
import ParentSay from "../Norani/perentSay/ParentSay";
import Topscroll from "../Norani/Topscroll";
import EveryThing from "./EveryThing";
import HeadTemplate from "./HeadTemplate";
import Mbonus from "./Mbonus";
import McourseFeature from "./McourseFeature";

function Memorization() {
  return (
    <>
      <div className=" learn" id="top">
        <div className="container-fluid">
          <div className="row ">
            <h2 className=" mt-5 mb-3 text-capitalize text-danger">
              Qura'an Memorization
            </h2>
            <div className="col-lg-11 col-sm-12  m-auto">
              <NooraniTop />
              <Navbar/>
              <HeadTemplate course="Qura'an Memorization Course" by="Hifz-ul-Quran By ArAqsa"/>
              <Overview data={Memorydata} id="overview" />
              <IslamicStudies
                name={memorycurri.name}
                list={memorycurri.list}
                com="Students memorize a few verses on a everyday basis as per designed and customized course and there is revision for each learned portion."
                img={memorycurri.img}
                p=" "
              />
              <Mbonus />
              <IslamicStudies
                name={memorylearn.name}
                list={memorylearn.list}
                com=""
                img={memorylearn.img}
                p=" "
              />
              <EveryThing/>
              <McourseFeature/>
              <Certification id="certifiaction" />
              <Batch />
              <FeesPlan id="fees" />
              <ParentSay studentData={smemorization} />
              <Learnfaq learnfaq={Faqmemory} />
              <Start />
            </div>
          </div>
        </div>
        <Footer />
        <Topscroll />
      </div>
    </>
  );
}

export default Memorization;
