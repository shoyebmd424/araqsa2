import React from "react";
import { TajweedOver } from "../../../Data/Nooranidata/overdata";
import Navbar from "../Norani/LearnNavbar/Navbar";
import NooraniTop from "../Norani/NooraniTop/NooraniTop";
import Overview from "../Norani/overview.jsx/Overview";
import Curriculum from "../Norani/Curriculum/Curriculum";
import { TajweedCurriL, TajweedCurriR } from "../../../Data/Nooranidata/Curridata";
import TajweedBonus from "./TajweedBonus";
import IslamicStudies from "../KidAndAdult/courses/IslamicStudies";
import {TajweedchildData} from "../../../Data/Nooranidata/childlearn";
import Everything from "./Everything";
import TajweedFeature from "./TajweedFeature";
import Certification from "../Norani/certification/Certification";
import Batch from "../../Batch/Batch";
import FeesPlan from "../Norani/feesplan/FeesPlan";
import ParentSay from "../Norani/perentSay/ParentSay";
import Start from "../../start/Start";
import Learnfaq from "../Norani/LearnFaq/Learnfaq";
import { TazweedFaq } from "../../../Data/Nooranidata/learnFaqdata";
import { tajweedSdata } from "../../../Data/StudentData";
import HeadTemplate from "../Memorization/HeadTemplate";
function TajweedAll() {
  return (
    <div>
      <div className=" learn" id="top">
        <div className="container-fluid">
          <div className="row ">
            <h2 className=" mt-5 mb-3 text-capitalize text-danger">
              Tajweed Course
            </h2>
            <div className="col-lg-11 col-sm-12  m-auto">
              <NooraniTop />
              <Navbar/>
              <HeadTemplate course="  بسم الله الرحمن الرحيم  Tajweed Course" by="The Foundation of Arabic"/>
              <Overview data={TajweedOver} id="overview" />
              <Curriculum Left={TajweedCurriL} course="Tajweed Course" Curriculum={TajweedCurriR}/>
              <TajweedBonus/>
              <IslamicStudies
                name={TajweedchildData.name}
                list={TajweedchildData.list}
                com=""
                img={TajweedchildData.img}
                p=" "
              />
              <Everything/>
              <TajweedFeature/>
              <Certification id="certifiaction" />
              <Batch />
              <FeesPlan id="fees" />
              <ParentSay studentData={tajweedSdata} />
              <Learnfaq learnfaq={TazweedFaq} />
              <Start />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TajweedAll;
