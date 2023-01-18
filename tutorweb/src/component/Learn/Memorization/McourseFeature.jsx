import React from 'react'
import img from "../../../All_image/Course images/circle.jpg";
function McourseFeature() {
  return (
    <div className='bg-white mt-5 p-3'>
        <h1 className="text-center text-primary mb-3">COURSE FEATURES</h1>
       <div className=" row row-cols-md-3 m-auto px-md-5"> 
        <div className="d-flex flex-column justify-content-between">
          <div className="mt-3 mt-md-0 col-md-8 m-md-auto  ">
            <p>
            Read the Textbook and Quran directly in your account.
            </p>
          </div>
          <div className="mt-3 mt-md-0 col-md-8 m-md-auto  ">
            <p>
            A complete course structure, so you know where your child is and where they are going.

            </p>
          </div>
          <div className="mt-3 mt-md-0 col-md-8 m-md-auto  ">
            <p>
            “Reference-Practice-Test” methodology, making it suitable both for learning by yourself and accompanied by a teacher.
            </p>
          </div>
        </div>
        <div className="order-1 order-md-0">
          <img src={img} alt="load"  className="col-12"/>
        </div>
        <div className="d-flex flex-column justify-content-evenly">
        <div className="mt-3 mt-md-0 col-md-8 m-md-auto">
            <p>
            Account access to grades, reports, and managing your classes.
            </p>
          </div>
          <div className="mt-3 mt-md-0 col-md-8 m-md-auto  ">
            <p>
            Words in the practices and the tests are taken from the Quran in order to familiarize learners with Quranic words
            </p>
          </div>
          <div className="mt-3 mt-md-0 col-md-8 m-md-auto  ">
            <p>
            These are tailor-made courses for each user after proper evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default McourseFeature
