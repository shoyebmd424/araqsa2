import React from "react";
import { coursefeature } from "../../../../Data/Nooranidata/Coursefeature";
import "./CourseFeature.css";
function CourseFeature() {
  return (
    <div className="coursefeature mt-4" id="course">
        <div className="bg-white p-4 rounded">
      <h1 className="text-center">COURSE FEATURES</h1>
      <div className="">
        {coursefeature.map((data,f)=>(
        <div key={f} className="row mt-2 px-md-0 course-box row-cols-2">
          <div className="d-flex " style={{gap:"5px", justifyContent:"space-between"}}>
            <div className="d-none d-md-block first-circle">
              <i style={{fontSize:"4rem"}} className="uil text-light uil-arrow-circle-right"></i>
            </div>
            <li style={{listStyle:"disc",fontSize:"18px",fontWeight:"400"}} className="m-0">{data.first}.</li>
          </div>
          <div style={{borderLeft: "2px dashed white"}}>
            <li style={{listStyle:"disc",fontSize:"18px",fontWeight:"400"}} className="m-0">{data.second}.</li>
          </div>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}

export default CourseFeature;
