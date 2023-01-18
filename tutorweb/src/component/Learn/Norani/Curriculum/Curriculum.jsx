import React from "react";
import "./Curriculum.css";
function Curriculum(props) {
  return (
    <div className="curriculum rounded bg-info p-md-5 mt-5" id={props.id}>
        <div className="p-4 bg-light shadow">
      <h1 className="text-primary">The Curriculum of the {props.course}</h1>
      <h4 className="my-3  text-center">{props.Left.caption}</h4>
      <h5 className="text-primary">{props.course}</h5>
      <div className="row row-cols-md-2 ms-1">
        {props.Curriculum.map((data,g)=>(
        <li key={g} className="lic my-1">{data.li}.</li>
        ))}
    </div>
    {props.Left.content}
      <p className="row col m-auto">.</p>  
    </div>
    </div>
  );
}

export default Curriculum;
