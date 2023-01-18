import React from 'react'
import { Link } from 'react-router-dom';
import img from "../../All_image/home/Download Girl sitting at the desk, learning with computer for free.jpg";
import computer from "../../All_image/home/start-computer.png";
function Start(props) {
  return (
    <div className='start p-3 bg-white mt-5'>
      <div className="container-fluids">
        <div className="row row-cols-md-2 p-3 row-cols-lg-4">
            <div ><img src={img} style ={{height:"80%"}} className="w-100" alt="" /> </div>
            <div className="para"  style={{textAlign:"justify"}}><h1 className='text-primary text-capitalize'>Start Free trail today!</h1> <p>join millions of people from around the world learning the Quran. Experience the rich reservoir of Islam and Quran learning through wide selection of courses with a free trial. </p> <Link to="/book" className="btn trial mt-4 btn-primary text-white text-uppercase">apply now</Link></div>
            <div><img src={computer} style ={{height:"80%"}} className="w-100" alt="" /></div>
            <div><h1 className='text-capitalize text-primary'>call now to register !</h1> <h6>USA &CA:09876543</h6>
            <h6>UK: 09876543</h6>
            <h6>AU: 0987654345</h6>
            <h6>Queries: abc@gmail.com </h6>
            <Link to="/login" className='btn btn-primary trial text-uppercase mt-3 text-white'>get started</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Start
