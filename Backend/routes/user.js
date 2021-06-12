const express = require("express");
const router = express.Router()

const {getUserbyId, getUser,updateUser,userPurchaseList} = require("../controllers/user")
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth")

router.param("userId",getUserbyId); 

router.get("/user/:userId", isSignedIn,isAuthenticated,getUser);

router.put("/user/:userId", isSignedIn,isAuthenticated,updateUser) //this route helps a user in his profile to edit his changes
router.put("/user/:userId", isSignedIn,isAuthenticated,updateUser) 

router.get("/orders/user/:userId", isSignedIn,isAuthenticated,userPurchaseList); 


module.exports = router;

