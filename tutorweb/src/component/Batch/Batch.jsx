import React from 'react'
import "./Batch.css";
import BatchCard from './BatchCard';
function Batch() {
  return (
    <div className=' batch mt-5 bg-white'>
                    <h2 className='bg-primary p-2 py-3 text-center' > Private Batch Vs Solo Batch</h2>
                 <BatchCard/>
                 </div>
  )
}

export default Batch
