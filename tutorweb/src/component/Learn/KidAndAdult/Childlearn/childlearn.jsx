import React from 'react'
import { Childdata, Lowerchilddata } from '../../../../Data/kidAndAdultData/childlearn'
import Subchild from './subchild'

function Childlearn() {
  return (
    <div className='bg-white text-center mt-5'>
        <h1 className='text-capitalize'>What your child will learn</h1>
        <div className='d-flex flex-wrap justify-content-center' >
            {Childdata.map((data,a)=>(<>
           <Subchild data={data} key={a}/>
           </>
           ))}
           <li className='bg-info p-2 ms-5  text-capitalize' style={{border:"4px solid red",width:"170px",height:"fit-content"}}> <h5> qura'an Qirat</h5></li>
        </div>
        <h1 className='text-center text-primary m-5 '><span className='border border-success border-4  '> Bonus with this Complete Qura’an Course</span>
</h1>
        <div className='d-flex flex-wrap justify-content-center' >
            {Lowerchilddata.map((data,b)=>(<>
            <span key={b}></span>
           <Subchild data={data}/>
           </>
           ))}
           <li className='bg-info p-2 ms-5  text-capitalize' style={{border:"4px solid red",width:"170px",height:"fit-content"}}><h5>tasbih</h5></li>
        </div>
        <i  style={{justifyContent:"center",alignItems:"center",transform:"rotate(90deg)"}} className=" d-flex uil uil-caret-right "></i>
           <div className='d-flex flex-wrap justify-content-center ms-5'>
           <i  style={{justifyContent:"center",alignItems:"center"}} className=" d-flex uil uil-caret-right "></i>
           <li className='bg-info p-2 ms-5  text-capitalize' style={{border:"4px solid red",width:"170px",height:"fit-content"}}><h5>Islamic Creed</h5></li>
           <i  style={{justifyContent:"center",alignItems:"center"}} className=" d-flex uil uil-caret-right "></i>
           <li className='bg-info p-2 ms-5  text-capitalize' style={{border:"4px solid red",width:"170px",height:"fit-content"}}><h5>Minimum 15 Surah Hifz </h5></li>
           </div>
    </div>
  )
}

export default Childlearn
