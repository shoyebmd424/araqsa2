const express=require("express");
const router=express.Router();
const book =require("../Controller/BookCon"); 
router.post("/send-otp",book.sendotp);
router.post("/otp-verify",book.verifyotp);
router.post("/send-data",book.senddata);
module.exports=router;  