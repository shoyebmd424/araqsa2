import React from 'react'

function Rating({rating,value}) {
   const Ratingstar=Array.from({length:5},(elem,index)=>{
        let number=index+0.5;
        return (
            <span key={index}>
                {rating>=index+1?(<i className="bi text-warning h5 bi-star-fill"></i>):rating>=number?( <i className="bi text-warning h5 bi-star-half"></i>):(  <i className="bi text-warning h5 bi-star"></i>)}

            </span>
        )
    })
  return (
    <>
    {Ratingstar}
    <small className='p-3'>({value})</small>
    </>
  )
}

export default Rating
