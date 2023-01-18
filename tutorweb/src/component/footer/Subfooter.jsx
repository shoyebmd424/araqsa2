import React from 'react'
import { Link } from 'react-router-dom'
import { PrivacySideBarData } from '../../Data/PrivacyData/Pravacydata'

function Subfooter() {
  return (
    <div className='text-center'>
        <hr className='mb-0' />
    <small className='d-flex flex-wrap   justify-content-center m-auto'>
        {PrivacySideBarData.map((data,subfkey)=>(
   <li className='me-3' key={subfkey} style={{listStyle:"disc",fontSize:"15px"}}> <Link className='text-white' to={`${data.path}`}> {data.li}</Link></li>
   ))}
   <li  style={{listStyle:"disc",fontSize:"15px"}}> Country  </li>
    </small>
   <small className='text-center'>
   #240/09, Daba Garden, Visakhapatnam-530012, Andhra Pradesh, India. Dail: 1800 214 3695
                            ArAqsa. All Rights Reserved
   </small>
    </div>
  )
}

export default Subfooter
