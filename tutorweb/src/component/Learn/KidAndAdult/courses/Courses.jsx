import React from "react";

function Courses(props) {
  return (
    <div className="mt-5 bg-white p-3">
      <h1 className="text-center text-capitalize text-primary">
        {props.course.name}
      </h1>
      <div className="row row-cols-md-2">
        <div>
          <div className="col-md-10 m-auto">
            <p  style={{textAlign:"justify"}} className="my-3 p-3 h6">{props.course.p1}</p>
            <p  style={{textAlign:"justify"}} className="my-3 p-3 h6">{props.course.p2}</p>
            <p  style={{textAlign:"justify"}} className="my-3 p-3 h6">{props.course.p3}</p>
          </div>
        </div>
        <div>
          <h3 className="mb-4  text-success">{props.course.listhead}</h3>
          <div className="col-md-10 m-auto">
            {props.course.list.map((data, c) => (
              <li className="h6 " key={c} style={{ listStyle: "disc",textAlign:"justify" }}>
                {data.li}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
