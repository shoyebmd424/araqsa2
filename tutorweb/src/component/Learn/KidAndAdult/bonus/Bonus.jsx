import React from 'react'
import { bonus } from '../../../../Data/kidAndAdultData/childlearn';
function Bonus() {
  return (
    <div className='bg-white mt-5 p-3'>
        <h1 className='text-center text-primary'>Free Bonus Course with The Complete Quran Course</h1>
        <div className="row m-auto row-cols-md-3 row-cols-sm-2">
        {bonus.map((data,bonuskey)=>(
          <div className='px-4 py-3'>
            <div className=" p-3">
                <div key={bonuskey} className="border rounded p-2 shadow" style={{height:"370px"}}>
                <img src={data.img} alt="" className='col-12 px-5 ' style={{height:"170px"}}/>
                <h4>{data.name}</h4>
                <p style={{textAlign:"justify"}}>{data.p}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Bonus
