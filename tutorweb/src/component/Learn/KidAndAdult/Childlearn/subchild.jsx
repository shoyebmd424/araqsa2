import React from 'react'

function Subchild(props) {
  return (
    <>
       <li className='bg-info p-2 mx-2 text-capitalize m-auto' style={{border:"4px solid red",width:"170px",height:"fit-content"}}> <h5  style={{textAlign:"justify"}}> {props.data.list}</h5></li>
            <i  style={{justifyContent:"center",alignItems:"center"}} className=" d-flex uil uil-caret-right "></i>
          
    </>
  )
}

export default Subchild
