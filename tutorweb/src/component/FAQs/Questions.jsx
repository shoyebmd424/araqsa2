import React from "react";
import { useState } from "react";

function Questions(props) {
const [open,setopen]=useState(false);
  return (
    <div>
        <div  className="cardl border mb-2 bg-white rounded  p-2">
          <div className="card-header" id="headingOne">
            <h2 className="m-0">
              <button style={{textDecoration:"none"}}
                className="btn btn-link p-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target={`#collapse${props.numb}`}
                aria-expanded="false"
                aria-controls={`collapse${props.numb}`}
              >
           <div    onClick={()=>(setopen(!open))} >{props.ques}? <i className= {`${open===true?"uil uil-angle-up":"uil uil-angle-down"}`} > </i> </div>
              </button>
            </h2>
          </div>

          <div
            id={`collapse${props.numb}`}
            className="collapse"
            aria-labelledby='headingOne'
            data-parent="#accordionExample"
          >
            <div className="card-body">
             <p className="ms-5"> {props.ans}</p>
            </div>
          </div>
    </div>
    </div>
  );
}

export default Questions;
