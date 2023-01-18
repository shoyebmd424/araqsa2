import React from "react";

function RecitingOvr(props) {
  return (
    <div className="bg-white mt-5 p-3">
      <h2 className="text-center text-primary">{props.course}</h2>
      <div className="p-md-5">
        {props.list.map((data,l)=>(
         <p key={l}> <li style={{fontSize:"18px", fontWeight:"400",listStyle:"disc"}}>{data.li}</li></p>
          ))}
      </div>
    </div>
  );
}

export default RecitingOvr;
