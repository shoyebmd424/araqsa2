import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { studentData } from "../../Data/StudentData";
import "./Student.css";
function Students(props) {
  return (
    <div id={props.id} className={`student pt-5  `} style={{backgroundColor:"rgb(40 40 40 / 10%)"}}>
      <div className="container-fluids mt-5">
        <div className="row">
              <h1
        className="text-center text-uppercase   mb-5"
      >
       <span className="Text-uppercase "> What our Students & thier perent say</span>
      </h1>
          <div  className="col-12 m-auto mt-5   py-3 mb-5 ">
            <Carousel>
              {studentData.map((data,skey)=>(
      <Carousel.Item key={skey} interval={1000} >
        <Row xs={1} lg={2}  >
          <Col className="mb-5">
      <div className="col-sm-10  ms-md-auto">
          <img
          className="d-block bg-light rounded col-11"
          src={data.imgae} style={{height:"450px"}}
          alt="First slide"
        /></div>
        </Col>
        <Col>
        <div className="p-4 text-capitalize" >
          <h3 className="text-primary mt-lg-5" > <span className=" p-1 text-success">{data.name}</span>,<span>{data.age}</span></h3>
          <h3 className="text-white">{data.from}</h3>
          <h3 className="text-primary">{data.course}</h3>
          <p  style={{textAlign:"justify"}} className="p-1 text-dark col-md-10">{data.says}</p>
          </div>
        </Col>
        </Row>
      </Carousel.Item>
      ))}
      
    </Carousel>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
