const express = require('express');
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");

const User=require('./models/user')
const app = express();

mongoose.connect("mongodb+srv://admin-soumya:test123@cluster0.wp8ur.mongodb.net/tourezee",{useNewUrlParser:true}).then(()=>{
    console.log("Connected to database");
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post('/register',(req,res,next)=>{
   console.log(req.body);
   const user=new User({
       name:req.body.name,
       email:req.body.email,
       password:req.body.password
   });
   user.save();
   res.send("User added successfully");
});
app.get('/register',(req,res,next)=>{
    const userName=req.body.name;
    User.findOne({name:userName},function(err,foundUser){
        if(!err){
          
          }else{
            
          }
        }
    )
})

module.exports=app;