import React from "react";
import "./Feature.css";
import { features } from "./featuresdata";
function Feature() {
 
  return (
    <>
      <div className="feature mt-5 mb-5">
        <div className="container-fluid">
          <div className="col-12 m-auto">
              <h1
        className="text-center text-uppercase shadow py-2 m-0"
        style={{ backgroundColor: "#30b23022  "}}
      >
        Why study <span className="text-primary"> with Us</span>
      </h1>
            <div className="row bg-white shadow ">
                <div className=" feature-bod row  row-cols-sm-2 row-cols-md-3  pb-5 pt-sm-4">
                {features.map((data,feat)=>(  <div key={feat}  className="mt-3 p-sm-3">
                    <div className="col-md shadow text-center h-100  p-3 p-md-4 py-2 border rounded" > 
                   <i style={{fontSize:"3rem"}} className= {data.icon}></i>
                    <h4 className="text-primary text-capitalize">{data.name}</h4>
                    <p  style={{textAlign:"justify"}}>{data.para}</p>
                    </div>
                  </div>
                 ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;