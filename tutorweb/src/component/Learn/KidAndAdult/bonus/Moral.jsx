import React from 'react'

function Moral(props) {
  return (
    <div className='bg-white mt-5 p-3 '>
        <div className="row row-cols-2">
            <div  className='p-5'>
            <h3 className='text-success'>{props.course.name}</h3>
        <div>
            {props.course.list.map((data,moralkey)=>(<>
            <li key={moralkey}  style={{listStyle:props.l,fontSize:"18px",fontWeight:"400",textAlign:"justify"}}>{data.li}</li>
            </>
            ))}
        </div>
        </div>
        <div>
           <div className='p-5'> 
            <h3 className='text-primary'>{props.course.sname}</h3>
            {props.course.rlist.map((data,rlistkey)=>(<>
            <li key={rlistkey} className='' style={{listStyle:props.l,fontSize:"18px",fontWeight:"400"}}>{data.li}</li>
            </>
            ))}
            <h3 className='text-success pt-5'>{props.course.sname2}</h3>
            <div >
            {props.course.rlist2.map((data,i)=>(<>
            <p  style={{textAlign:"justify"}}>{data.li}</p><br key={i} />
            </>
            ))}
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Moral
