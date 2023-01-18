import { useFormik } from "formik";
import axios from "../Axios/Axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../App";
import { useContext } from "react";
axios.defaults.withCredentials = true;
const initialvalues = {
  username: "",
  password: "",
};
function Login(props) {
  const [error, seterror] = useState({ alert: "", message: "" });
  const navigate=useNavigate();
  const {state , dispatch}=useContext(UserContext);
  const { values,  handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues ,
      onSubmit: (values, action) => {
        axios
          .post("/login", values)
          .then((res) => {
            if (res.data.status !== 200) {
              seterror({ alert: "danger", message: res.data.message });
            } else {
              seterror({ alert: "success", message: res.data.message });
              dispatch({type:'user',payload:true})
              navigate("/dashboard");
            }
          })
          .catch((err) => {
            console.log(err);
            seterror({ alert: "danger", message: "Server Error" });
          });
        action.resetForm();
      },
    });
  return (
    <div className=" login " state={state}>
      <div className="container ">
        <div className="row " style={{ height: "85vh" }}>
          <div className="col-md-4 col-sm-6 m-auto">
            <div className="card bg-light p-3">
              <h1 className="m-3">Login In </h1>
              <div className={`alert text-wrep dismisable alert-${error.alert}`}><b className="text-capitalize">{error.message}</b></div>
              <form onSubmit={handleSubmit}>
                <div className="form-group ">
                  <label htmlFor="">Your Username/Email </label>
                  <input type="text" name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   className="form-control" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="">Your Password </label>
                  <input type="password" name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="form-control" />
                </div>
                <div className="d-flex ">
                  <Link to="/forget"> Forget Password</Link>{" "}
                  <Link className="ms-auto" to="/signup">
                    Sign Up
                  </Link>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-outline-primary px-5 my-2 py-2">
                    <h5 className="m-0">Sing In</h5>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
