import React from "react";
import "./Fact.css";
import img from "../../All_image/About/homes page 1.webp";
function Fact() {
  return (
    < >
      <div className="row   " style={{backgroundColor:"#0000005a"}}>
        <div className="col-12  m-auto">
                    <h1 className="  text-center text-uppercase  my-md-5">Few Fact About Araqsa</h1>
          <div className="row  text-white  row-cols-md-2 fact p-md-5  pt-0">
            <div className="">
                <div className="row text-uppercase ">
              <div className="  fact-card text-center  p-3 m-2 col">
                <h1 className="  text-white text-capitalize"> 10+ </h1><h4>online Courses</h4>
              </div>
              <div className=" rounded fact-card text-center  p-3 m-2 col">
                <h1 className=" text-white text-capitalize ">160+ </h1><h4>Tutors around the globe</h4>
              </div>
              </div>
                <div className="row">
              <div className=" rounded fact-card text-center  p-3 m-2 col">
                <h1 className=" text-white text-capitalize ">35+ </h1><h4>cities around the globe</h4>
              </div>
              <div className=" rounded fact-card text-center  p-3 m-2 col">
                <h1 className=" text-white text-capitalize ">1500+</h1><h4> Students</h4>
              </div>
              </div>
            </div>
            <div className="">
              <div className=" w-100    rounded">
               <img src={img} alt="" className="col-12" style={{height:"500px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Fact;
