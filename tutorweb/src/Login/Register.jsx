import axios from "../Axios/Axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../component/Schemas";
axios.defaults.withCredentials=true;
const initialvalues = {
  name: "",
  username: "",
  mobile: "",
  password: "",
  cnfpassword: "",
};
function Register() {
  const [error,seterror]=useState({alert:"",message:""});
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: register,
      onSubmit: (values, action) => {
        axios.post("/signup",values).then(res=>{
          if(res.data.status!==200){
            seterror({alert:"danger",message:res.data.message})
          }else{
            seterror({alert:"success",message:res.data.message})
          }

        }).catch(err=>{
          console.log(err)
          seterror({alert:"danger",message:"Page Not Found"})
        })
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className=" login ">
      <div className="container ">
        <div className="row " style={{ height: "85vh" }}>
          <div className="col-md-4 col-sm-6 m-auto">
            <div className="card bg-light p-3">
              <h1 className="m-3 text-center">Sign Up </h1>
              <div className={`alert text-wrep dismisable alert-${error.alert}`}><b className="text-capitalize">{error.message}</b></div>
              <form onSubmit={handleSubmit}>
                <div className="form-group ">
                  <label htmlFor="">
                    Your Name<span className="text-danger">*</span>{" "}
                  </label>
                  <input
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                  />
                  {errors.name && touched.name ? (
                    <p className="text-danger">{errors.name}</p>
                  ) : null}
                </div>
                <div className="form-group ">
                  <label htmlFor="">
                    Your Username/Email<span className="text-danger">*</span>{" "}
                  </label>
                  <input
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    className="form-control"
                  />
                  {errors.username && touched.username ? (
                    <p className="text-danger">{errors.username}</p>
                  ) : null}
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="">Mobile Number</label>
                  <input
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="tel"
                    className="form-control"
                  />
                  {errors.mobile && touched.mobile ? (
                    <p className="text-danger">{errors.mobile}</p>
                  ) : null}
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="">
                    Your Password<span className="text-danger">*</span>{" "}
                  </label>
                  <input
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    className="form-control"
                    minLength={6}
                    maxLength={10}
                  />
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password}</p>
                  ) : null}
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="">
                    Your Confirm Password<span className="text-danger">*</span>
                  </label>
                  <input
                    name="cnfpassword"
                    value={values.cnfpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    className="form-control"
                  />
                  {errors.cnfpassword && touched.cnfpassword ? (
                    <p className="text-danger">{errors.cnfpassword}</p>
                  ) : null}
                </div>
                <h6 className=" py-1">
                  Already Account <Link to="/login"> Login </Link>
                </h6>
                <div className="text-center">
                  <button className="btn btn-outline-primary px-5 my-2 py-2">
                    <h5 className="m-0">Sing Up</h5>
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

export default Register;
