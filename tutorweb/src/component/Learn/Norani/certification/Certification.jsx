import React from "react";
import certimg from "../../../../All_image/home/certificate.png";

function Certification(props) {
  return (
    <div className="certificate bg-white mt-5 p-md-5 rounded" id={props.id}>
      <div   style={{border:"4px solid indigo"}} >
        <h1 style={{border:"4px solid indigo"}} className="text-center  bg-info text-primary">Certification</h1>
        <div className="row row-cols-md-2 text-center  p-4"  >
          <div className="content">
            <h5 className="my-4">
              You will be awarded by Course certificate and an advanced badge
            </h5>
            <p>
              On completion of the test for a range of levels of a specific
              course, We award a course completion Badge & Certificate after the
              successful evaluation of the completed course. The Badges and
              certificates will be sent to your mail. The certificate will
              contain your name, the name of the course and the date. You will
              have the opportunity to download a certificate of participation as
              a PDF, that you can print out
            </p>
          </div>
          <div className="img">
            <img src={certimg} alt="" style={{width:"250px"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certification;
