import React from 'react'
import img from "../../../../All_image/Course images/Noorani Qaida .jpeg";
import { childdata } from '../../../../Data/Nooranidata/childlearn';
import "./Childlearn.css";
function Childlearn() {
  return (
    <div className='childlearn p-md-5 rounded bg-warning mt-5' id='child'>
        <div className='bg-light shadow border p-5'>
        <h1 className='text-primary'>YOUR CHILD WILL LEARN</h1>
     <div className="row row-cols-md-2">
        <div className='childlist'>
          {childdata.map((data,e)=>(
        <li key={e}>{data.li}</li>
        ))}
        </div>
     <div><img src={img} className="w-100" alt="" /></div>
     </div>
    </div>
    </div>
  )
}

export default Childlearn
