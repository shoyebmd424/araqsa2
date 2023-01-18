import React from "react";
import { useState } from "react";
import { state } from "../../Data/HomeData/HomeData";
import "./Home.css";
import axios from "../../Axios/Axios";
import { homeform } from "../Schemas";
import { useFormik } from "formik";
function HForm() {
  const [otpfield, setotpfield] = useState(false);
  const [email, setemail] = useState("");
  const [otp, setotp] = useState("");
  const [error,seterror]=useState({alert:"",message:""});
  axios.defaults.withCredentials=true;
  const initialValues={
    name:"",
    mobile:"",
    state:"",
  }
  const handle=(e)=>{
    e.preventDefault();
    seterror({alert:"warning",message:"please Wait....."})
      axios.post("/book/send-otp",{email:email})
      .then(res=>{
        if(res.data.status!==200){
        setotpfield(false);
        seterror({alert:"danger",message:res.data.message})
        }else{
          setotpfield(true);
          seterror({alert:"success",message:res.data.message})
        }
      }
        ).catch((err)=>{
         setotpfield(false);
         seterror({alert:"danger",message:"Page loading Error please Refrash it."})
      })
        setemail("");
  }
  const handleverify=(e)=>{
    e.preventDefault();
      axios.post("/book/otp-verify",{otp:otp})
      .then(res=>{
        if(res.data.status!==200){
        setotpfield(true);
        seterror({alert:"danger",message:res.data.message})
        }else{
          setotpfield(false);
          seterror({alert:"success",message:res.data.message})
        }
      }
        ).catch((err)=>{
          console.log(err)
         setotpfield(true);
         seterror({alert:"danger",message:"Page loading Error please Refrash it."})
      })
        setotp("");
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialValues,
    validationSchema: homeform,
    onSubmit: (values, action) => {
      axios.post("/book/send-data",values).then(res=>{
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
    <div style={{backgroundColor:"#f9b986"}} className="hform  col-md-3 mt-3 p-4 offset-md-2 rounded ">
      <h2 className="text-center text-white bg-primary p-0 " >Book Your Demo Class</h2>
      <div className={`alert text-wrep dismisable alert-${error.alert}`}><b className="text-capitalize">{error.message}</b></div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-100 py-2 my-3"
          placeholder="Enter Name of Student"
          name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
        />
         {errors.name && touched.name ? (
                    <p className="text-danger">{errors.name}</p>
                  ) : null}
        <input
          type="tel"
          className="w-100 py-2   my-3"
          placeholder="Enter Mobile Number"
          name="mobile"
          value={values.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {errors.mobile && touched.mobile ? (
                    <p className="text-danger">{errors.mobile}</p>
                  ) : null}
        <div className="d-flex  my-3">
        <div className={otpfield ? "d-none" : "d-flex w-100 py-2 "}>
          <input
            type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}
            className={otpfield ? "d-none" : " form-control py-2 "}
            placeholder="Enter Email Address" minLength={10}
          /> <button type="submit" onClick={handle} className="btn text-nowrap rounded-0 btn-primary">
         Send OTP
        </button></div>
        <div className={!otpfield ? "d-none" : "d-flex w-100 py-2 "}>
          <input
            type="text"
            value={otp} onChange={(e)=>{setotp(e.target.value)}}
            className=" w-100 py-2 "
            placeholder="Enter OTP"
          />
          <button type="submit" onClick={handleverify} className="btn text-nowrap rounded-0 btn-primary">
            Varify
          </button></div>
        </div>
        <select className="form-select py-2 my-3"  name="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                     aria-label="Default select">
          <option defaultValue>State</option>
          {state.map((data, idx) => (
            <option key={idx} value={`${data.s}`}>
              {data.s}
            </option>
          ))}
        </select>
        {errors.state && touched.state ? (
                    <p className="text-danger">{errors.state}</p>
                  ) : null}
        <button  className="btn btn-primary w-100 py-2 my-3">
          <h5>Schedule Free Class </h5>
        </button>
      </form>
    </div>
  );
}

export default HForm;
