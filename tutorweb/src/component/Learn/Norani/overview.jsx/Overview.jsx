import React from "react";

function Overview(props) {
  return (
    <div className="overview bg-white rounded p-md-5" id={props.id}>
      <div className="bg-light p-md-5 shadow border">
        <div className="text-center  text-capitalize m-0">
          <h1 className="text-primary">{props.data.course} </h1>
          <h3 className="m-0 text-success"> {props.data.caption}</h3>
        </div>
        <h4 className="px-2"> About The Course</h4>
        <h5 className="px-2">{props.data.course}</h5>
        <div>
          <div>
         {props.data.desc.map((data,overdata)=>( <>
          <p key={overdata} className="mt-2 p-3"> {data.p}</p>
          </>
         ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
