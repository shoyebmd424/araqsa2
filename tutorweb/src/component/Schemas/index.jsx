import* as Yup from "yup";

export const register=Yup.object({
    name:Yup.string().min(4).max(25).required("please Enter Your Name   "),
  username:Yup.string().email().required("Please Enter Your Email Id"),
  password:Yup.string().min(6).required("Please enter password minimum 6 characters"),
  cnfpassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password Not Matched"),
})
export const forget=Yup.object({
    username:Yup.string().email().required("Please enter your email "),
})
export const otpvalid=Yup.object({
  userotp:Yup.string().min(6).required("It must be 6 digit"),
})
export const setpass=Yup.object({
  password:Yup.string().min(6).required("Password must be minimum 6 character "),
   cnfpassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password Not Matched"),
})

export const homeform=Yup.object({
  name:Yup.string().min(4).required("Name must minimum 4 character")
  ,mobile:Yup.string().min(10).required("Mobile number must be minimum 10 digit"),
  state:Yup.string().required("Select State if not applicable select others")
})

export const contact=Yup.object({
  name:Yup.string().required("Name Field is required"),
  email:Yup.string().email().required("Email Field is Required"),
  phone:Yup.string().min(10).required("Mobile number minimum 10 digits"),
  country:Yup.string().required("Field is required"),
  about:Yup.string().required("Message feild is required"),
})