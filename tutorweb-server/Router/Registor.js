const express=require("express");
const router=express.Router();
const connection=require("../DBCon");
const bcrypt=require("bcrypt");
router.post("/",(req,res)=>{
    const name= req.body.name;
    const username= req.body.username
    const phone= req.body.mobile;
    const password= req.body.password;
    const cnfpassword= req.body.cnfpassword;
    if(!connection){
    res.send("server eror");
    return;
    }
   connection.query(`select*from users where username="${username}"`,(err,rows,field)=>{
    if(err){
        console.log(err)
        res.send("selecting error");
    }else{
        if(rows.length>0){
            res.send({status:500,message:"user already exist"});
            return;
        }else{
        if(password!=cnfpassword){
            res.send({status:500,message:"password not matched"});
            return;
        }
        else{
            bcrypt.hash(password,10,(err,hash)=>{
                if(err){
                    res.send("something went wrong");
                }else{
        if(connection){
            connection.query("INSERT INTO users (name,username,password,phone) VALUES(?,?,?,?)",[name,username,hash,phone],(err,result)=>{
                if(!err){
                    res.send({status:200,message:"Successfully registered Now You can login"});
                }else{
                    console.log(err)
                    res.send({status:500,message:"Some thing  Went Wrong Try again"});
                }
            })
        }
    }
    })
    }
}
    }
    })
})
module.exports=router;