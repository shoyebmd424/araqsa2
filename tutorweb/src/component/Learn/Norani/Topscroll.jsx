import React from 'react'
import { Link } from 'react-scroll'

function Topscroll() {
  return (
    <div>
       <Link
       to="top"
       spy={true}
       smooth={true}
       offset={0}
       duration={300} > <div className='top-scroll text-center d-flex flex-column'><i class="uil uil-arrow-circle-up"></i> </div></Link>
    </div>
  )
}

export default Topscroll
