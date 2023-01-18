import React from 'react'
import { arabicFeature } from '../../../Data/Nooranidata/Coursefeature'

function ArabicFeature() {
  return (
    <div className='bg-white mt-5 p-3'>
      <h1 className='text-center text-primary mb-2'>COURSE FEATURES</h1>
    <div className="row row-cols-md-5 row-cols-sm-3 row-cols-2">
        {arabicFeature.map((data,arabicfeat)=>(
        <div>
    <div key={arabicfeat} style={{border:`0.3rem solid ${data.color}`}} className=' m-auto  col-4 rounded-circle p-2'>
        <div style={{height:"3rem",border:`0.3rem solid ${data.color}`}} className=" m-auto"> </div>
    </div>
            <p style={{textAlign:"justify"}} className='mt-5 col-md-11'>{data.p}</p>
        </div>
        ))}
    </div>
    </div>
  )
}

export default ArabicFeature
