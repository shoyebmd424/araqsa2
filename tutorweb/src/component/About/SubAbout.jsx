import React from 'react'
import "./About.css";
function SubAbout(props) {
  return (
    <div className={`${props.class} pt-md-5 p-2 p-md-3 m-auto`}>
      <h1 style={{fontSize:"60px"}} className='text-center text-primary'>{props.head}</h1>
      <div className="row row-cols-md-2">
        <div className='p-4'>{props.left}</div>
        <div className=''>{props.right}</div>
      </div>
    </div>
  )
}

export default SubAbout
