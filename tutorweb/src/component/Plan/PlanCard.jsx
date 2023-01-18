import React from "react";
import { Link } from "react-router-dom";
import "./Plan.css";
import Rating from "./Rating";
function PlanCard(props) {
  return (
    <>
      <div className="batch-card ">
        <div 
          className="box card p-lg-5 p-2 m-3   pb-1"
          style={{ backgroundColor: props.color,height:"45rem" }}
        >
          <span className="text-center  text-capitalize mb-1 "> {props.type}</span>
          <ol className="text-start plan-list ps-0 text-capitalize">
            <li><i className="uil text-warning  me-2 uil-clock-eight"></i> {props.duration}</li>
            <li><i className="uil text-warning  me-2 uil-file-alt"></i> {props.exercise}</li>
            <li><i className="uil text-warning  me-2 uil-user-square"></i> Live classes</li>
            <li><i className="uil text-warning  me-2 uil-video"></i> Recorded videos</li>
            <li><i className="uil text-warning  me-2 uil-heart"></i> Unlimited LIfetime Access</li>
            <li><i className="uil text-warning  me-2 uil-users-alt"></i> Community support</li>
            <li><i className="uil text-warning  me-2 uil-cloud-download"></i> Downloadable notes</li>
            <small> <i className="uil text-warning  me-2 uil-file-question-alt"></i> 14 Days No-Question- Asked refund policy</small>
            <li><i className="uil text-warning  me-2 uil-parcel"></i> Certificate Upon completio</li>
            <Rating rating={props.rating.rating} value={props.rating.values}/>
            <li className="my-4 d-flex justify-content-between">
              <Link to="/contact" className="btn  trial btn-primary">
                Contact Us
              </Link>
              <Link to={props.path} className="btn trial btn-warning">
                Learn More
              </Link>
            </li>
            <Link
              to="/dashboard/buy"
              className="btn col-12 trial px-md-5 btn-success"
            >
              <h2>GET IT NOW</h2>
            {props.buy.min!==""? <h3> <strike> ₹{props.buy.min}</strike> ₹{props.buy.max} </h3>: <h5>This is Free complimentary course</h5>}
            </Link>
          <h4 style={{borderBottom:"2px dashed white"}} className="my-2">100% Money-Back Guarantee</h4>
          </ol>
        </div>
      </div>
    </>
  );
}

export default PlanCard;
