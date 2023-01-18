import React from 'react'
import { Link } from 'react-scroll'
import { Faqdata, learnFAQ } from '../../Data/FaqsData'
import Questions from './Questions'
import img from "../../All_image/home/Download Girl sitting at the desk, learning with computer for free.jpg";
function adder(props) {
  return (
    <>
      <div className="container-fluid" id={props.id}>
        <div className="row">
          <div className="col-11 m-auto">
            <div className="text-capitalize text-center mt-4 bg-secondary text-white p-4 shadow rounded">
              <h1 className="text-light">Frequently Ask Questions</h1>
              <p className='text-center'>
                clear all your doubts relating to your course,proccess,fees and
                <a className="text-white" href="/">
                  many mores
                </a>
                .
              </p>
            </div>
            <div className="addmission mt-4">
              <div className="row row-cols-md-2">
                <div className="header  d-flex m-auto flex-column text-center">
                  <div className="w-40 py-3 px-5 bg-white border rounded shadow border-success m-auto">
                    <li>
                      <Link to="addmission"
                      spy={true}
              smooth={true}
              offset={0}
              duration={300} className="text-danger bold">
                        Addmission
                      </Link>
                    </li>
                    <li>
                      <Link to="learning"
                       spy={true}
              smooth={true}
              offset={-10}
              duration={300}
                      className="bold ">
                        Learning
                      </Link>
                    </li>
                  </div>
                </div>
                <div id="addmission" className="add-questions mt-4">
                  <h1>Addmission</h1>
                  <div className="accordion" id="accordionExample">
                    {Faqdata.map((data, accourdance) => (
                      <span key={accourdance}>
                      <Questions
                        ques={data.ques}
                        ans={data.ans}
                        numb={data.numb}
                        id={data.id}
                      />
                      </span>
                    ))}
                  </div>
                </div>
                </div>
                <div className="row row-cols-md-2">
                <div  id="learning" className="add-learn-questions   mt-auto">
                  <h1>Learning FAQ's</h1>
                  <div className="accordion" id="accordionExample">
                    {learnFAQ.map((data, adderkey) => (
                      <span key={adderkey}>
                      <Questions
                        ques={data.ques}
                        ans={data.ans}
                        numb={data.numb}
                        id={data.id}
                      />
                      </span>
                    ))}
                  </div>
              </div>
              <div className="d-flex  m-auto flex-column"><img src={img} alt="" />
              <div style={{height:"700px",gap:"1rem"}} className=" d-md-block d-none bg-white"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default adder
