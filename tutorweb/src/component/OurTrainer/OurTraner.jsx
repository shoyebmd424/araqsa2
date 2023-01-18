import React from "react";
import "./OurTrainer.css";
import { trainerdata } from "../../Data/CourseData";
function OurTraner() {
  return (
    <div className=" trainer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-white m-auto p-4 ">
            <h1
              className="text-center text-uppercase py-2 m-0"
            >
              Meet our 
              tutors
            </h1>
            <div className="">
              <div
                className="row row-cols-2 flex-nowrap animate mt-4 bg-white"
                style={{ gap: "3rem" }}
              >
                {trainerdata.map((data, q) => (
                  <div key={q}  style={{width:"23rem"}} className="text-center">
                    <span className="comma text-success"> "</span>{" "}
                    <img
                      src={data.image}
                      alt=""
                      className="position-relative  rounded-circle"
                      style={{
                        width: "6rem",
                        top: "3rem",
                        border: "0.5rem solid white",
                      }}
                    />
                    <div
                      style={{ border: "5px solid blue", height: "30rem" }}
                      className="pt-4 p-2 rounded text-center  shadow bg-white"
                    >
                      <div>
                        <h4 className="text-capitalize text-primary">
                          {data.name}
                        </h4>
                        <p   style={{textAlign:"justify"}}>{data.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTraner;
