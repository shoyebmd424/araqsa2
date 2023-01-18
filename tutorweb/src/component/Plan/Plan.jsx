import React from 'react'
import { PlanData } from '../../Data/PlanData/Plan'
import PlanCard from './PlanCard'

function Plan() {
  return (
   <div className='conatiner-fluid my-4  '>
    <div className="row my-5 mb-5">
        <div className="col-12 rounded p-sm-3 m-auto">
            
    <h1
        className="text-center text-uppercase py-md-5 m-0"
      >
       Study Plans 
      </h1>
  
    <div className="row mt-1  row-cols-sm-2 row-cols-md-3 ">
      {PlanData.map((data,pkey)=>(
                <div key={pkey} className="mt-4">    
                 <PlanCard
                 color={data.color}
                 type={data.type}
                 duration={data.duration}
                 exercise={data.exercise}
                 rating={data.rating}
                 buy={data.buy}
                 path={data.path}
                 />
                 </div>
                 ))}
                
                 
        </div>
    </div>
    </div>
   </div>
  )
}

export default Plan
