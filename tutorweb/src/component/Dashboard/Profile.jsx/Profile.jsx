import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";
function Profile() {
    const [mydata, setmydata] = useState([]);
    useEffect(() => {
    axios
    .get("/dashboard")
    .then((res) => {
      console.log(res.data);
      setmydata(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  return (
    <div>
          {mydata.map((data,dashprofilkey)=>(
      <div className="container">
        <div className="row ">
          <div className="col-md-4 col-12  m-md-4 m-2 mb-3">
          
            <div key={dashprofilkey} className="card bg-secondary text-white text-center p-5">
              <div>
                <i
                  style={{ fontSize: "6rem" }}
                  className="uil uil-user-circle"
                ></i>
              </div>
              <h2 style={{ fontWeight: "bold" }}>{data.name}</h2>
              <h4>Bihar,India</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  commodi libero id sint accusamus. Itaque mollitia possimus
                  quisquam asperiores soluta.
                </p>
              </div>
            </div>
     
          </div>
          <div className="col-md-7 col-12 m-auto card bg-secondary text-white py-5">
            <h1 className="text-center text-info">Your Details</h1>
            <div className=" row row-cols-2 my-4">
              <div className="d-flex ">
                <h4> <i className="uil text-info mx-1 uil-chat-bubble-user"></i> Name :</h4>
                <h5 className="my-auto ms-3">{data.name}</h5>
              </div>
              <div className="d-flex ">
                <h4><i className="uil text-info mx-1 uil-dialpad-alt"></i>Reference Id :</h4>
                <h5 className="my-auto ms-3">ARQ2023S0{data.id}</h5>
              </div>
            </div>
            <div className=" row row-cols-2 my-4">
              <div className="d-flex ">
                <h5 className="m-auto"><span className="text-info m-1">@</span>Username :</h5>
                <h6 className="my-auto ms-3">{data.username}</h6>
              </div>
              <div className="d-flex ">
                <h5><i className="uil text-info mx-1 uil-phone-alt"></i>Modile Number :</h5>
                <h6 className="my-auto ms-3">{data.phone}</h6>
              </div>
            </div>
            <div className=" row row-cols-2 my-4">
              <div className="d-flex ">
                <h4><i className="uil text-info mx-1 uil-adjust"></i>Gender :</h4>
                <h5 className="my-auto ms-3">Male</h5>
              </div>
              <div className="d-flex ">
                <h4><i className="uil text-info mx-1 uil-calendar-alt"></i>DOB</h4>
                <h5 className="my-auto ms-3">12:01:1999</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
             ))}
    </div>
  );
}

export default Profile;
