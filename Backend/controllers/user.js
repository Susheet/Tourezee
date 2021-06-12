const User = require("../models/user");
const Order = require("../models/order.js")

exports.getUserbyId = (req,res,next,id) =>{
    User.findById(id).exec((err,user) => {         //so whenever a callback function is made to databse findOne or anything else
                                                    // it returns two things error and the object itself if it is found
        if(err || !user){
            return res.status(400).json({
                error: "No user was found in DB"
            })
        }
        req.profile = user
        next(); 
    })
};

exports.getUser = (req,res) => {

   req.profile.salt = undefined;  
   req.profile.encry_password = undefined;  
    return res.json(req.profile);
}


exports.updateUser = (req,res) => {
    User.findByIdAndUpdate(
        {_id : req.profile._id},  //finding user
        {$set: req.body},         //what info to update
        {new: true, useFindAndModify: false}, //necessary parameters from documentation
        (err,user) => {
            if(err){
                return res.status(400).json({
                    error:"You are not authorized to update this user or not successful"
                })
            }
            user.salt = undefined;  
            user.encry_password = undefined;  
            res.json(user);
        }

    )
}


exports.userPurchaseList = (req,res) => {

    Order.find({user: req.profile._id})
    .populate("user","_id name")
    .exec((err,order) => {
        if(err){
            return res.status(400).json({
                error:"No order in this account"
            })
        }
        return res.json(order)
    })
     
}


exports.pushOrderInPurchaseList = (req,res,next) => {
    
    let purchases = []
    req.body.order.products.forEach(product => {
        purchases.push({
            _id: product._id,
            name: product.name,
            description: product.description,
            category: product.category,
            quantity: product.quantity,
            amount: req.body.order.amount,
            transaction_id: req.body.order.transaction_id
        })
        })

   //this purchases array is local, we need to push this in database
   User.findOneAndUpdate(
       {_id: req.profile._id},
       {$push: {purchases: purchases} },   //using $push and not $set because an array is in action here
       {new: true},                      //new:true ensures to send the update object and not the old one
     (err,purchases) => {
         if(err){
             return res.status(400).json({
                 error: "unable to save purchase list"
             })
         }   
         next();
     } 
  )
};


