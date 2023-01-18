const express=require("express")
const app=express();
const cors =require("cors")
const contact=require("./Router/Contact");
const session=require("express-session");
const cookieParser=require("cookie-parser");
const bodyparser=require("body-parser")
const login =require("./Router/Login");
const forget=require("./Router/Forget");
const bookdemo=require("./Router/BookDemo");
const register=require("./Router/Registor");
const dashboard =require("./Router/Dashboard");
const PORT=process.env.PORT ||3001;
app.use(session({
    secret:"tutorweb",
    resave:false,
    saveUninitialized:false,
    expires:60*2,
}))
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}));
 app.use(express.static("client/build"));
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
app.use("/contact",contact);
app.use("/signup",register);
app.use("/login",login);
app.use("/forget",forget);
app.use("/book",bookdemo);
app.use("/dashboard",dashboard);    


app.get("/logout",(req,res)=>{
    req.session.destroy();
    console.log("logout success")
    res.send({status:200,message:"Successfully logout"});
})


app.listen(3001,()=>{
    console.log("your server running on the port 3001");
})
