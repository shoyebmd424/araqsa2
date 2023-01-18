import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashSideBar from "./DashSideBar";
import "./Dashside.css";
import { UserContext } from "../../App";
function Dashboard() {
  const navigate = useNavigate();
  const {state,dispatch}=useContext(UserContext);

  const [side, setside] = useState(false);
  useEffect(() => {
    if (!state) {
      navigate("/login");
    }
  }, [navigate, state]);

  return (
    <div className="d-flex dashboard" key={dispatch}>
      <div className={side ? " openside" : "col-2 closeside"}>
        <DashSideBar />
      </div>
      <div className="w-100">
        <i
          onClick={() => {
            setside(!side);
          }}
          className={side?"uil toggler uil-multiply text-white":"d-non"}
          style={{ zIndex: "5", position: "absolute", left: "11rem" }}
        ></i>
        <i
          onClick={() => {
            setside(!side);
          }}
          className="uil toggler uil-bars p-1"
          style={{ fontSize: "45px" }}
        ></i>
       <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
