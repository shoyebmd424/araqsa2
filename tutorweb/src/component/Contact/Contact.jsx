import React from "react";
import "./Contect.css";
import img from "../../All_image/contact/Free Vector _ Contact us concept for landing page .png";
import Footer from "../footer/Footer";
import CForm from "./CForm";
function Contact() {
  return (
    <div className="Contact ">
      <h1
        className="text-center shadow py-2 m-0"
        style={{ backgroundColor: "#30b23022  ", fontSize: "50px" }}
      >
        Contact <span className="text-success"> Us</span>
      </h1>
      <div className="container-fluids py-2 gradient">
        <div className="row">
          <div className="col-10 m-auto">
            <h1 className=" urdu text-center mb-5 "> ﷽ </h1> 
            <div className="row text-dark row-cols-md-2 mt-3">
              <div className="images text-center">
                <div className="d-flex justify-content-evenly">
            <li className="m-auto">logo</li> <h1 style={{fontSize:"50px"}} className="my-5 m-auto">Araqsa</h1>
                </div>
                <img src={img} alt="" />
              </div>
              <div className="form mt-3">
                <div>
                  <h4 className="text-capitalize register pb-2 text-primary">
                    register new for online
                  </h4>
                  <p>
                    <i className="uil uil-angle-right mb-0"></i>Contact Us for any
                    question or queries and fill out the form below to request
                    a free trial.
                  </p>
                  <p>
                    <i className="uil uil-angle-right mb-0"></i>We have available
                    24/7 for the support ans services we offer.
                  </p>
                </div>
                <CForm/>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
