const express=require("express");
const router=express.Router();
const forget =require("./forgetController"); 
router.post("/send-otp",forget.sendotp);
router.post("/otp-verify",forget.verifyotp);
router.post("/set-password",forget.setpassword);
module.exports=router;