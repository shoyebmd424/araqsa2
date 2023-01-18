import React from 'react'
import Blogcollapse from './Blogcollapse'
import { blogdata } from '../../../Data/Blogdata/Blogdata';
import Footer from '../../footer/Footer';
function Blog() {
  return (
    <div>
      <div className="container mt-5">
        <h1 className='text-success text-center ' >Usefull Blogs </h1>
        <div className="row">
          <div className="accordion" id="accordionExample">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {blogdata.map((data,blogkey)=>(

              <div key={blogkey} className='px-5 py-3'>
            <div className="card ">
              <div className="card-body">
                <div><img src={data.img} className="w-100" alt="img1" /></div>
              <div>
                <h4 style={{textAlign:"justify"}}>{data.head} </h4> <Blogcollapse id={data.id} detail={data.detail} />
              </div>
              </div>
            </div>
            </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog
