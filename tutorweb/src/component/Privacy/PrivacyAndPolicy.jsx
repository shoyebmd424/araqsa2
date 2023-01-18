import React from 'react'

function PrivacyAndPolicy(props) {
  return (
    <div className='mt-3'>
      <h1 className='text-center text-primary '>{props.header}</h1>
      {props.content.map((data,r)=>(<div className='py-3'>
        <h4 key={r} className='text-info'>{data.head}</h4>
        <div>
           {data.list.map((item,i)=>(
            <p>{item.p}</p>
           ))}
        </div>
        </div> ))}
    </div>
  )
}

export default PrivacyAndPolicy
