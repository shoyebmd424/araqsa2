import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { otpvalid } from "../component/Schemas";
import axios from "../Axios/Axios";
import { useContext } from "react";
import { UserContext } from "../App";
axios.defaults.withCredentials = true;
const initialvalues = {
  userotp: "",
};
function Otp() {
    const [error, seterror] = useState({ alert: "", message: "" });
    const {state, dispatch}=useContext(UserContext);
    const navigate=useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: otpvalid,
      onSubmit: (values, action) => {
        axios
          .post("/forget/otp-verify", values)
          .then((res) => {
            if (res.data.status !== 200) {
              seterror({ alert: "danger", message: res.data.message });
            } else {
              dispatch({type:'user',payload:"verified"});
              seterror({ alert: "success", message: res.data.message });
              navigate("/change-password");
            }
          })
          .catch((err) => {
            console.log(err);
            seterror({ alert: "danger", message: "Page Not Found" });
          });
        console.log(values);
        action.resetForm();
      },
    });
    console.log(state)
  return (
    <div>
         <div className={`alert text-wrep dismisable alert-${error.alert}`}><b className="text-capitalize">{error.message}</b></div> 
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="">Enter OTP </label>
          <input
            type="text"
            name="userotp"
            value={values.userotp}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter 6 digit OTP"
            className="form-control"
          />
          {errors.userotp && touched.userotp ? (
            <p className="text-danger">{errors.userotp}</p>
          ) : null}
        </div>
        <div className="d-flex ">
          <Link to="/login">Login</Link>{" "}
          <Link className="ms-auto" to="/signup">
            Sign Up
          </Link>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-outline-primary px-5 my-2 py-2"
          >
            <h5 className="m-0">Verify OTP</h5>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Otp;
