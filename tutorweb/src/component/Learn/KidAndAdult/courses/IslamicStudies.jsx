import React from 'react'
function IslamicStudies(props) {
  return (
    <>
      <div className='mt-5 bg-white p-3'>
      <h1 className='text-center text-capitalize text-primary'>{props.name}</h1>
      <div className="row row-cols-md-2">
        <div>
          <h3 className='ms-3 mt-4 text-success'>{props.com}</h3>
            <div className='col-md-10 m-auto'  >
              {props.list.map((data,d)=>( <>           <li key={d} style={{listStyle:"disc",textAlign:"justify"}} className={`${props.p} h6`}>{data.li} </li>
              </>
              ))}
            </div>
        </div>
        <div>
           <img src={props.img} alt="" className='w-50 m-auto' />
        </div>
      </div>
    </div>
    </>
  )
}

export default IslamicStudies
