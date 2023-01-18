import React from "react";

function FeesPlan(props) {
  return (
    <div className=" bg-white mt-5 rounded p-md-4" id={props.id}>
        <div style={{border:"4px solid #0034"}} className="p-4 shadow">
      <h1 className="text-center text-success ">Fees Plan</h1>
      <div className="row row-cols-md-2">
        <div>
          <h4 className="text-primary">
            WE OFFER AFFORDABLE FEES TO ENCOURAGE YOU TO LEARN NOORANI QAIDA .
          </h4>
          <li>
          <i class="uil uil-calendar-alt text-warning"></i> Last date of Offer January 12,2022
          </li>
          <li>
          <i class="uil uil-clock text-primary"></i>5 Days 9 Hours 26 Minutes 16 Seconds
          </li>
          <li>
          <i class="uil uil-stopwatch text-danger"></i> 16 weeks
          </li>
          <li><span className="bg-warning"> offer 23%</span></li>
        </div>
        <div className="text-center">
          <h4>
            Enroll Now and get an amazing deal with additional Courses and
            support.
          </h4><div >
        <div className="mt-4">  <button className="btn btn-primary">contact us</button></div>
        <div className="mt-4">  <button className="btn btn-danger">Book Demo class now</button></div>
        <div className="mt-4">  <button className="btn btn-warning">learn more</button></div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FeesPlan;
