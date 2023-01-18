import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import PrivacySideBar from './PrivacySideBar'
import "../Dashboard/Dashside.css";
function Privacyhome() {
  const [side,setside]=useState(false);
  return (
    <div>
        <div className="d-flex">
        <div className={side?'col-2 openside':'col-2 closeside'}>  <PrivacySideBar/></div>
        <div className='w-100 ps-5'>
      <i onClick={()=>{ setside(!side)}}  className="uil toggler uil-multiply text-white" style={{zIndex:"5",position:"absolute",left:"11rem"}}></i>
      <i onClick={()=>{ setside(!side)}} class="uil toggler uil-bars p-1" style={{fontSize:"45px"}}></i>
    <Outlet/></div>
      </div>
     </div>
  )
}

export default Privacyhome
