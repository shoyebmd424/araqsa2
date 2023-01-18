import React from 'react'

function Blogcollapse(props) {
  return (
    <div>
      
            <h2 className="m-0">
              <button style={{textDecoration:"none"}}
                className="btn btn-link p-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target={`#collapse${props.id}`}
                aria-expanded="false"
                aria-controls={`collapse${props.id}`}
              >
                Read More
              </button>
            </h2>

          <div
            id={`collapse${props.id}`}
            className="collapse"
            aria-labelledby='headingOne'
            data-parent="#accordionExample"
          >
             <span className=" bg-white " style={{textAlign:"justify"}}> {props.detail}</span>
          </div>
  </div>

  )
}

export default Blogcollapse
