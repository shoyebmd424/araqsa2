import axios from '../../Axios/Axios';
import React, { useEffect, useState } from 'react'

function Welcome() {
    const [mydata, setmydata] = useState([]);
    useEffect(() => {
    axios
    .get("/dashboard")
    .then((res) => {
      console.log(res.data);
      setmydata(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  return (
    <>
       {mydata.map((data, dashkey) => (
          <div key={dashkey}>
            <h4 className="m-4 my-2 text-warning">{data.username}</h4>
            <div className="text-center  mt-2 mt-md-5">
              <h1 className="dash-heading">Welcome To ArAqsa</h1>
              <h1 className="text-success" style={{ fontWeight: "bold" }}>
                {data.name}
              </h1>
              <h4>
                You are joined to the world of Islamic education classroom ! The
                only Islamic Edtech.
              </h4>
            </div>
          </div>
        ))}
    </>
  )
}

export default Welcome
