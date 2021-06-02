
const User = require("../models/user.js")
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');



exports.signup = (req,res) => {
 
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg,
            place: errors.array()[0].param  
        });
    }
    
    const user = new User(req.body)

    user.save((err,user) => {                       //so whenever a callback function is made to databse findOne or anything else
                                                    // it returns two things error and the object itself if it is found
        if(err){
            return res.status(400).json({
                err: "Not able to save user in DB"
            })
        }
        //res.json(user); instead of throwing out entire user info, we throw selective info only
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
        });
    })
    
};

exports.signin = (req,res) => {
    
    const {email,password} = req.body;  //destructring the code by using {}

    const errors = validationResult(req) 

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg,
            place: errors.array()[0].param  
        });
    }

    User.findOne({email}, (err,user) => {
        if(err || !user){
               return res.status(400).json({  //
                error: "USER email does not exist"
            }); 
        }
        
        if(!user.autheticate(password)){
             return res.status(401).json({
                 error:"Email and password do not match"
             })
        }
   
        //create token
        const token = jwt.sign({_id: user._id}, process.env.SECRET)

        //put token in cookie
        res.cookie("token",token,{expire: new Date() + 9999});

        //send response to front end
        const {_id,name,email,role} = user;
        return res.json({token, user:{_id,name,email,role} })

    });
};

exports.signout = (req,res) => {
   
   res.clearCookie("token");
      
    res.json({
        message: "User signout successfully"
    });
};

//protected routes
exports.isSignedIn = expressJwt({      //expressJwt here takes care of next which needs to be written in all middlewares
    secret: process.env.SECRET,
    userProperty: "auth",   //userProperty allows us to set some properties in client's browser
});


//custome middlewares
exports.isAuthenticated = (req,res,next) => {

    let checker = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!checker){
        return res.status(403).json({
            error: "ACCESS DENIED"
        });
    }
    next();
}

exports.isAdmin = (req,res,next) => {

    if(req.profile.role == 0){
        return res.status(403).json({
            error: "You are not ADMIN, Access denied"
        });
    }
    next();
};
