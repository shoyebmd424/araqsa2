import React from 'react'
import { Link } from 'react-router-dom'
import { PrivacySideBarData } from '../../Data/PrivacyData/Pravacydata'
import "./Privacy.css";
function PrivacySideBar() {
  return (
    <div className='col-12 bg-dark ' style={{height:"100vh"}}>
        <div className='px-4 pt-5 text-light privacyside-list ' >
       {PrivacySideBarData.map((data,s)=>(
        <li key={s} className='mt-0 py-3 h5' ><Link to={`${data.path}`} className='text-white'> {data.li} </Link></li>
       ))}
    </div>
    </div>
  )
}

export default PrivacySideBar
