import React from 'react'
import solo from "../../../../All_image/home/1vs.png";
import Private from "../../../../All_image/home/private.png";
import time from "../../../../All_image/home/24-hours-support.png";
import tutor from "../../../../All_image/home/tutor.png";
import certificate from "../../../../All_image/home/certificate.png";
import anywhere from "../../../../All_image/home/anywhere.jpg";
import pdf from "../../../../All_image/home/pdf.png";
import student from "../../../../All_image/home/student.png";
function NooraniTop() {
  return (
    <>
        <div style={{border:"4px dashed rgb(46 39 41 / 92%)"}} className="row row-cols-2 row-cols-md-4 col-lg-9 col-sm-12 m-auto shadow bg-white rounded">
                    <div className="my-3"><img src={solo} alt="" style={{width:"5rem"}}/><h4 className='my-4 text-capitalize'>solo classes</h4></div>
                    <div className="my-3"><img src={Private} alt="" style={{width:"5rem"}}/><h4 className='my-4 text-capitalize'>private batch classes</h4></div>
                    <div className="my-3"><img src={time} alt="" style={{width:"5rem"}}/><h4 className='my-4 text-capitalize'>24/7 support</h4></div>
                    <div className="my-3"><img src={tutor} alt="" style={{width:"5rem"}}/><h4 className='my-4 text-capitalize'>multilingual</h4></div>
                    <div className="my-3"><img src={certificate} alt="" style={{width:"5rem"}}/><h4 className='my-4 text-capitalize'>badbe & certificate</h4></div>
                    <div className="my-3"><img src={anywhere} alt="" style={{width:"5rem"}}/><h4 className='my-4 text-capitalize'>start anytime & anywhere</h4></div>
                    <div className="my-3"><img src={pdf} alt="" style={{width:"5rem"}}/><h4 className='my-4 text-capitalize'>free Ebook and pdf</h4></div>
                    <div className="my-3"><img src={student} alt="" style={{width:"5rem"}}/><h4 className='my-4'>500+ student</h4></div>
                </div>
    </>
  )
}

export default NooraniTop
