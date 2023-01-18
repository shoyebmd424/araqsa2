import React from 'react'
import { TajweedBonusData } from '../../../Data/kidAndAdultData/Coursesdata'
import img from "../../../All_image/Course images/tajweedcurri.jpg";
function TajweedBonus() {
  return (
    <div className="bg-white mt-5 p-3">
      <h1 className='text-primary text-center'>Free Bonus Course with The Tajweed Course</h1>
      <div className="row row-cols-md-2">
        <div><img src={img} alt="" className='w-100'/></div>
        <div className='d-flex flex-column justify-content-between p-md-3'>
            {TajweedBonusData.map((data,m)=>(
            <li key={m} style={{fontSize:"18px",fontWeight:"500"}}>{data.li}</li>
        ))}
            </div>
      </div>
    </div>
  )
}

export default TajweedBonus
