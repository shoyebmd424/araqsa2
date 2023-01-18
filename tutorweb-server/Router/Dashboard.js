const express=require("express");
const router=express.Router();
const dashboard =require("../Controller/Dashboard"); 
router.get("/",dashboard);
module.exports=router;