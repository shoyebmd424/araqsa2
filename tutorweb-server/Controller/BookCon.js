const nodemailer=require('nodemailer');
const connection=require("../DBCon");
 const sendotp=(req,res)=>{
    let  rendom=Math.random().toString().substr(2, 6);
    const email=req.body.email;
const transpoter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587 || 465,
    secure:false,
    requireTLS:true,
    auth:{
        user:'mmsa4613@gmail.com',
        pass:"dhdchvvrcwqrdmmx"
    }
})
    const mailOption={
        from:'mmsa4613@gmail.com',
        to:email,
        subject:"OTP",
        text:rendom
    }
        transpoter.sendMail(mailOption,(errr,info)=>{
            if(errr){
                console.log(errr);
              res.json({status:500,message:"message sending fail"});
            }else{
                console.log("seccessfully sent") ;
                req.session.user=rendom;
                req.session.email=email;
                req.session.save();
                res.send({status:200,message:"successfully otp send"});
            }
        })
}
 const verifyotp=(req,res)=>{
    // console.log(req.session.user);
    if(req.body.otp==req.session.user){
        req.session.otp=true;
        req.session.save();
        res.send({status:200,message:"verification success You can Book for Demo class"});
    }else{
        res.send({status:500,message:"wrong OTP Please Enter Correct OTP"});
    }
   }
 const senddata=(req,res)=>{
    const name=req.body.name;
    const mobile=req.body.mobile;
    const email=req.session.email;
    const state=req.body.state;
    if(req.session.otp){
        if(connection){
            connection.query("INSERT INTO bookdemo (name,mobile,email,state,date) VALUES(?,?,?,?,now())",[name,mobile,email,state],(err,result)=>{ 
                if(!err){
                    res.send({status:200,message:"Your Details hs been sent"})
                }else{
                    res.send({status:500,message:"something went wrong please try again"})
                }
                 }) 
                }else{
            res.send({status:500,message:"somethig went wrong"})
        }
    }else{
        res.send({status:500,message:"Email not Verified please verify it"})
    }
}
   
   module.exports={sendotp,verifyotp,senddata};