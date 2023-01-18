import React from "react";

function HeadTemplate(props) {
  return (
    <div className="head container m-5  ">
      <div className="row">
        <div className="col-md-4 m-auto bg-danger p-4">
            <div className="p-5 m-3 border border-4">
        <h1>{props.course}</h1>
        <h4 style={{textAlign:"justify"}} className="text-white text-center mt-5">{props.by}</h4>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HeadTemplate;
