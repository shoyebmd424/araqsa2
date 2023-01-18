import React from 'react'
import { PlanData } from '../../../Data/PlanData/Plan'
import PlanCard from '../../Plan/PlanCard'

function Courses() {
  return (
    <div>
        <div className="row  row-cols-sm-2 row-cols-md-3 ">
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
  )
}

export default Courses
