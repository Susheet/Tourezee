const express = require("express")
const router = express.Router()

const {getCategoryById,createCategory,getCategory,getAllCategory,updateCategory,removeCategory} = require("../controllers/category.js")
const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth.js")
const {getUserbyId} = require("../controllers/user.js")

//params
router.param("userId",getUserbyId);
router.param("categoryId",getCategoryById);


//actual routes 

//create routes
router.post("/category/create/:userId",isSignedIn,isAuthenticated,isAdmin,createCategory);

//read routes
router.get("category/:categoryId",getCategory);
router.get("categories",getAllCategory);

//update routes
router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,updateCategory)

//delete routes
router.delete("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,removeCategory);


module.exports = router;
