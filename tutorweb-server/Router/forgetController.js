const nodemailer=require('nodemailer');
const connection=require("../DBCon");
const bcrypt=require("bcrypt");

 const sendotp=(req,res)=>{
    const username=req.body.username;
    if(connection){
        connection.query("select*from users WHERE username=?",[username],(err,rows,field)=>{
            if(err){
                console.log(err)
                res.send({status:500,message:"Server error"})
            }else if(rows.length==0){
                res.send({status:404,message:"User Not exist please enter correct email"});
            }else{
                
    let  rendom=Math.random().toString().substr(2, 6);
const transpoter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587|| 465,
    secure:false,
    requireTLS:true,
    auth:{
        user:'mmsa4613@gmail.com',
        pass:"dhdchvvrcwqrdmmx"
    }
})
    const mailOption={
        from:'mmsa4613@gmail.com',
        to:username,
        subject:"OTP",
        text:rendom
    }
        transpoter.sendMail(mailOption,(errr,info)=>{
            if(errr){
              res.json({status:500,message:"message sending fail"});
              console.log(errr);
            }else{
                console.log("seccessfully sent") ;
                req.session.forgetotp=rendom;    
                req.session.username=rows[0].username;
                req.session.save();
                res.send({status:200,message:"successfully otp send"});
            }
        })
    }
    })
    }else{
        res.send({status:500,message:"Internal server error"});
    }
}

 const verifyotp=(req,res)=>{
    // console.log(req.session.forgetotp);
    if(req.body.userotp==req.session.forgetotp){
        res.send({status:200,message:"successfully verify"});
    }else{
        res.send({status:500,message:"OTP incorrect please try again"});
    }
}
 const setpassword=(req,res)=>{
    if(req.body.password==req.body.cnfpassword){
    if(connection){
        bcrypt.hash(req.body.password,10,(err,hash)=>{
        connection.query('UPDATE users SET password=? WHERE username= ?',[hash,req.session.username],(err,result)=>{
            if(!err){
                res.send({status:200,message:"Your successfully updated oyu can login "})
            }else{
                res.send({status:500,message:"something went wrong please try again"});
            }
        } );
    })
    }else{
        res.send({status:500,message:"something went wrong please try again"})
    }
}else{
    res.send({status:500,message:"Passowrd is not matched"})
}

}
module.exports={sendotp,verifyotp,setpassword};