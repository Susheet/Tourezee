var express = require('express')
var router = express.Router()
const { check } = require('express-validator');
const {signout,signup ,signin, isSignedIn} = require("../controllers/auth.js")



//adding validator to check if proper info is entering databse is passed in after route and before controller function as an array
router.post("/signup",[
    check("name").isLength( { min: 3} ).withMessage("Name should be atleast 3 characters"),
    check("email").isEmail().withMessage("proper Email is required"),
    check("password").isLength({ min: 3}).withMessage("Password should be atleast 3 chars"),
] ,signup);

router.post(
    "/signin", [
        check("email").isEmail().withMessage("proper Email is required"),
        check("password").isLength({ min: 3}).withMessage("Password field is required correctly"),  
    ],
    signin );

router.get("/signout", signout);



module.exports = router;
