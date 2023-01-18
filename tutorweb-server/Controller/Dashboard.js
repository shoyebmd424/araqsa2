const connection=require("../DBCon");
const dashboard=(req,res)=>{
    if(connection){
        connection.query("select*from users WHERE username=?",[req.session.username],(err,rows)=>{
            if(!err){
                res.send({status:200,message:rows})
            }else{
                res.send({status:500,message:"Internal Server"})
            }
        })
    }else{
        res.send({status:500,message:"Integer server Error"})
    }
}
module.exports =dashboard;