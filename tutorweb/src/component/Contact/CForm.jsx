import axios from "../../Axios/Axios";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { contact } from "../Schemas";
const initialvalues={
  name:"",
  email:"",
  phone:"",
  country:"",
  city:"",
  about:"",
}
function CForm() {
    const [error,seterror]=useState({alert:"",message:""});
    const [agree,setagree]=useState(false);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: contact,
      onSubmit: (values, action) => {
        if(agree){
        axios.post("/contact",values).then(res=>{
          if(res.data.status!==200){
            seterror({alert:"danger",message:res.data.message})
          }else{
            seterror({alert:"success",message:res.data.message})
          }

        }).catch(err=>{
          console.log(err)
          seterror({alert:"danger",message:"Page Not Found"})
        })
      }else{
        seterror({alert:"danger",message:"please select term and Condition"})
      }
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div>
        <div className={`alert text-wrep dismisable alert-${error.alert}`}><b className="text-capitalize">{error.message}</b></div>
      <form className="text-capitalize " onSubmit={handleSubmit}>
        <div className="flex-column d-flex mt-3">
          <label htmlFor="name">
            Your Name <span className="text-danger">*</span>
          </label>
          <input name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
            className="text-capitalize bg-light"
            type="text"
            placeholder="e.g Your full name "
          />
          {errors.name && touched.name ? (
                    <p className="text-danger">{errors.name}</p>
                  ) : null}
        </div>
        <div className="flex-column d-flex mt-3">
          <label htmlFor="email">
            Your Email id<span className="text-danger">*</span>{" "}
          </label>
          <input id="email"  name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
            className="text-capitalize bg-light"
            type="email"
            placeholder="e.g Your email id "
          />
           {errors.email && touched.email ? (
                    <p className="text-danger">{errors.email}</p>
                  ) : null}
        </div>
        <div className="flex-column d-flex mt-3">
          <label htmlFor="">
            Your phone<span className="text-danger">*</span>{" "}
          </label>
          <input name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
            className="text-capitalize bg-light"
            type="text"
            placeholder="e.g Your Contact +00000000000 "
          />
           {errors.phone && touched.phone ? (
                    <p className="text-danger">{errors.phone}</p>
                  ) : null}
        </div>
        <div className="flex-column d-flex mt-3">
          <label htmlFor="">
            Country Name<span className="text-danger">*</span>{" "}
          </label>
          <input name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
            className="text-capitalize bg-light"
            type="text"
            placeholder="e.g Your Country Name"
          />
           {errors.country && touched.country ? (
                    <p className="text-danger">{errors.country}</p>
                  ) : null}
        </div>
        <div className="flex-column d-flex mt-3">
          <label htmlFor="">
             Address <span className="text-danger">*</span>
          </label>
          <input name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
            className="text-capitalize bg-light"
            type="text"
            placeholder=" Address"
          />
           {errors.city && touched.city ? (
                    <p className="text-danger">{errors.city}</p>
                  ) : null}
        </div>
        <div className="flex-column d-flex mt-3">
          <label htmlFor="">
            Your Message <span className="text-danger">*</span>
          </label>
          <textarea name="about"
                    value={values.about}
                    onChange={handleChange}
                    onBlur={handleBlur}
            className="bg-light rounded"
            id=""
            cols="30"
            rows="4"
            placeholder="e.g You are intrested to get the services for yourself . for your kids . or anyone else . Kindly write name age and Gender of the student(s) .intrested for classes."
          ></textarea>
           {errors.about && touched.about ? (
                    <p className="text-danger">{errors.about}</p>
                  ) : null}
        </div>
        <div className="form-check mt-4">
  <input
                   value={agree} onChange={(e)=>{setagree(!agree)}}
   className="form-check-input" type="checkbox" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Agree<span className="text-danger">*</span>
  </label>
</div>

        <div className="declaration  row">
                  <p>
                    <i className="uil uil-angle-right mb-0"></i>By submiting your
                    conatact are agreed to the
                    <Link to="/contact/privacy"> terms of services and privacy policy </Link> .
                    Rest assured that we keep your personal data safe do not
                    sell or redistribute to anyone
                  </p>
                  <button type="submit"  className="btn col-3 m-auto trial btn-primary">
                    Submit
                  </button>
                </div>
      </form>
    </div>
  );
}

export default CForm;
