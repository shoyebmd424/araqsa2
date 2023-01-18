const mysql = require("mysql2")
const db= mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"shoyeb",
    database:"tutorweb"
})
db.connect(err=>{
    if(err){
        console.log("failed");
        return false;
    }else{
        console.log("established")
        return true;
    }
})
module.exports=db;