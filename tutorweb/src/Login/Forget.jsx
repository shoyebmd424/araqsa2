import { useFormik } from 'formik';
import React, { useState } from 'react'
import { forget } from '../component/Schemas';
import Otp from './Otp';
import axios from '../Axios/Axios';
axios.defaults.withCredentials = true;
const initialvalues = {
  username: "",
};

function Forget(props) {
  const [error, seterror] = useState({ alert: "", message: "" });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialvalues,
    validationSchema: forget,
    onSubmit: (values, action) => {
      seterror({alert:"warning",message:"Please Wait....."})
      axios
          .post("/forget/send-otp", values)
          .then((res) => {
            if (res.data.status !== 200) {
              seterror({ alert: "danger", message: res.data.message });
            } else {
              seterror({ alert: "success", message: res.data.message });
            }
          })
          .catch((err) => {
            console.log(err);
            seterror({ alert: "danger", message: "Page Not Found" });
          });
      console.log(values);
      action.resetForm();
    },
  }
  );
 
  return (
    <div className=' login '>
    <div className="container ">
     
      <div className="row "style={{height:"85vh"}} >
          <div className="col-md-4 col-sm-6 m-auto">
              <div className="card bg-light p-3" >
                  <h1 className='m-3 text-primary'>{props.title} </h1>
                  <div className={`alert text-wrep dismisable alert-${error.alert}`}><b className="text-capitalize">{error.message}</b></div> 
                  <form onSubmit={handleSubmit}>
                <div className="form-group ">
                  <label htmlFor="">Your Username/Email </label>
                  <input type="text" name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   className="form-control" />
                   {errors.username && touched.username ? (
            <p className="text-danger">{errors.username}</p>
          ) : null}
                </div>
               
               
                <div className="text-center">
                  <button type='submit' className="btn btn-outline-primary px-5 my-2 py-2">
                    <h5 className="m-0">Send Otp</h5>
                  </button>
                </div>
              </form>

                  {/* otp form */}
                  <p ><b>Note :</b> This is a One time Password for reset password do not share anyone if you are share any otp it will  resposiblity to you.You should to forget passwprd with existed user only if you are already user or new user you click link given below.</p>
                  <Otp/>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Forget
