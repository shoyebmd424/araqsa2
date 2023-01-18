import React from "react";
import "./Courses.css";
import { courseData } from "../../Data/NavbarData";
import { Link, NavLink } from "react-router-dom";
function Courses() {
  return (
    <>
      <div className="courses mt-5 ">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 m-auto pb-4 bg-white shadow rounded">
            <h1
        className="text-center text-uppercase py-2 m-0"
      >
        our  Course</h1>
              <div className="course-cards">
                <div className=" d-flex cards mt-4 bg-white">
                {courseData.map((data,ckey)=>( 
                     <div key={ckey}   className="col-12 col-md-5 col-lg-3  p-4 rounded border text-center  shadow bg-white">
                      <img src={data.image} alt="" id="cimg" className="w-100" />
                      <h4 className="course-name text-uppercase mt-2">{data.anker}</h4>
                  
                      <div className="m-auto" ><Link to="/book" style={{backgroundColor:"#f4b43f"}} className="btn  mt-2  ">
                        Book a Demo class
                      </Link></div>
                     <div className="d-flex justify-content-between mt-3"> <NavLink to={`${data.path}`}  className=" btn  btn-primary ">Learn More</NavLink> 
                     <NavLink to="/dashboard/buy" className='btn trial px-5 btn-success'>Buy</NavLink>
                     </div>
                    </div>
                    ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
