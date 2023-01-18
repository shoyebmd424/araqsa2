import React from 'react'
import img from "../../../All_image/Course images/ArabicBonus.jpg";
function ArabicBonus() {
  return (
    <div className='pt-3' style={{backgroundColor:"rgb(21, 21, 173)"}}>
      <h1 className='text-white text-center'>Free Bonus Course with Arabic Language Course</h1>
      <img src={img} className="w-100" alt="" />
    </div>
  )
}

export default ArabicBonus
