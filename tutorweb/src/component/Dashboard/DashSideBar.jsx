import React from 'react'
import { Link } from 'react-router-dom'
import { dashsidebardata } from '../../Data/PrivacyData/Pravacydata'

function DashSideBar() {
  return (
    <div >
       <div className='col-12 bg-dark ' style={{height:"100vh"}}>
        <div className='px-4 pt-5 text-light privacyside-list ' >
       {dashsidebardata.map((data,dashsidebar)=>(
        <li key={dashsidebar} className='mt-0 py-3 h5' ><Link to={`${data.path}`} className='text-white'> {data.li} </Link></li>
       ))}
    </div>
    </div>
    </div>
  )
}

export default DashSideBar
