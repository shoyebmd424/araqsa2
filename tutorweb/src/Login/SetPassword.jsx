import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import axios from '../Axios/Axios';
import { setpass } from '../component/Schemas';
axios.defaults.withCredentials = true;
const initialvalues = {
  password: "",
  cnfpassword: "",
};

function SetPassword() {
    const [error, seterror] = useState({ alert: "", message: "" });
    const navigate=useNavigate();
    const {state, dispatch}=useContext(UserContext);
    useEffect(() => {
      if(state!=="verified"){
        navigate("/login");
      }
      },[navigate, state]
   )

    
    const { values,errors,touched,  handleBlur, handleChange, handleSubmit } =
      useFormik({
        initialValues: initialvalues ,
        validationSchema: setpass,
        onSubmit: (values, action) => {
         
          axios
            .post("/forget/set-password", values)
            .then((res) => {
              if (res.data.status !== 200) {
                seterror({ alert: "danger", message: res.data.message });
              } else {
                seterror({ alert: "success", message: res.data.message });
                navigate("/login");
              }
            })
            .catch((err) => {
              console.log(err);
              seterror({ alert: "danger", message: "Page Not Found" });
            });
          action.resetForm();
        },
      });
  return (
    <div>
      <div dispatch={dispatch} className="col-md-4 col-sm-6 m-auto">
            <div className="card bg-light p-3">
              <h1 className="m-3">Set Password </h1>
              <div className={`alert text-wrep dismisable alert-${error.alert}`}><b className="text-capitalize">{error.message}</b></div>
              <form onSubmit={handleSubmit}>
                <div className="form-group ">
                  <label htmlFor="">New Password </label>
                  <input type="password" name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   className="form-control" />
                     {errors.password && touched.password ? (
            <p className="text-danger">{errors.password}</p>
          ) : null}
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="">Confirm Password </label>
                  <input type="password" name="cnfpassword"
                    value={values.cnfpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  className="form-control" />
                    {errors.cnfpassword && touched.cnfpassword ? (
            <p className="text-danger">{errors.cnfpassword}</p>
          ) : null}
                </div>
                <div className="d-flex ">
                  <Link to="/login"> Sign in</Link>
                  <Link className="ms-auto" to="/signup">
                  Sign up
                  </Link>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-outline-primary px-5 my-2 py-2">
                    <h5 className="m-0">Save</h5>
                  </button>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default SetPassword
