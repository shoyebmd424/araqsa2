import React from "react";
import "./Home.css";
function SubHome(props) {
  return (
    <div className="" style={{ height: "80vh" }}>
      <div className="mx-sm-5">
            <h1 style={{ fontSize: "55px" }}>ArAqsa</h1>
            <h2 className="text-capitalize ms-sm-4">The only islamic Edtech </h2>
          </div>
        
      <div className="col-md-5 offset-md-1   mt-4">
        <div>{props.content}</div>
      </div>
    </div>
  );
}

export default SubHome;
