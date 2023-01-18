const express=require("express");
const router=express.Router();
const connection=require("../DBCon");
router.post("/",(req,res)=>{
    console.log(req.body);
    const name=req.body.name
    const email=req.body.email
    const phone=req.body.phone
    const country=req.body.country
    const city=req.body.city 
    const about=req.body.about 
    connection.query("INSERT INTO Contact (name, email,phone,country,city,about) VALUES(?,?,?,?,?,?)",[name, email, phone,country,city,about],(err,result)=>{
        if(err){
            console.log(err)
            res.send({status:"500",message:"internal server error try again "})
            return;
        }else{
            console.log("Inserting Done")
           res.send({status:200,message:"Thank you for contacting, Successfully Your Message Has been Sent as soon as possible we will be reply"})
            return;
        }
    })
})
module.exports=router;