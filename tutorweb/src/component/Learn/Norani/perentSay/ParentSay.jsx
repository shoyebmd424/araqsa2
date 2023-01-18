import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./ParentSay.css";
function ParentSay(props) {
  return (
    <>
    <div id='reviews' className='simg mt-5' style={{border:"5px dashed #000000",backgroundColor:"#62e2f1"}}>
        <h1 className='px-2 py-1 text-center '>Testmonial</h1>
        <div className=' my-5  m-auto'>
<div className="border shadow bg-dark d-flex text-white rounded  col-lg-6 col-11 m-auto"style={{justifyContent:"center",alignItems:"center",height:"300px"}} >
    <Carousel>
              {props.studentData.map((data,k)=>(
      <Carousel.Item interval={1000} >
        <div key={k} className="p-4 text-capitalize "  >
          <p  className='text-center' >{data.says}</p>
         <h5 className=' text-end mt-0'> -{data.name}</h5>
          </div>
      </Carousel.Item>
      ))}
      
    </Carousel>
    </div>
        </div>
    </div>
    </>
  )
}

export default ParentSay
