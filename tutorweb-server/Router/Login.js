const express=require("express");
const router=express.Router();
const connection=require("../DBCon");
const bcrypt=require("bcrypt");
router.post("/",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let login=false;
if(connection){
connection.query("select*from users WHERE username=?",[username],(err,rows,field)=>{
    if(!err){
        if(rows.length==0){
            res.send({status:500,message:"Username not exist please register"})
        }else{
            bcrypt.compare(password,rows[0].password,(err,result)=>{
                if(result){
            req.session.username=rows[0].username;
            login=true;
            req.session.save();
            res.send({status:200,message:"Successfully login",login:login});
        }else{
            res.send({status:500,message:"Password is Wrong Please Try Again"})
        }
        })
        }
    }else{
        
        res.send({status:500,message:"internal server please try again",res:err})
    }
})
}else{
    res.send({status:500,message:"server error"});
}
})
module.exports=router;