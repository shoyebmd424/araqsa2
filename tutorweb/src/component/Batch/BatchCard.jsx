import React from "react";
import "./Batch.css";
import { Batchdata } from "./BatchData";
function BatchCard(props) {
  return (
    <div className="batch-card">
      <div className=" px-0  py-3 px-md-4   ">
        <ol className="text-start  row row-cols-3 text-capitalize">
        <div className="mt-sm-2"> </div>
       <h2 className="mt-sm-2 text-primary">Private</h2>
       <h2 className="mt-sm-2 text-primary">solo</h2>
     {Batchdata.map((data,batchindex)=>( <> <div key={batchindex} className="mt-3 d-flex blist"> {data.name}</div>
       <div  className="mt-3 blist" >{data.private}</div>
       <div className="mt-3 blist">{data.solo}</div>
       </>
       ))}
        </ol>
      </div>
    </div>
  );
}

export default BatchCard;
