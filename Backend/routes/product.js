const express = require("express")
const router = express.Router()

const {getProductById,createProduct,getProduct,photo,deleteProduct,updateProduct,getAllProducts,getAllUniqueCategories} = require("../controllers/product.js")
const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth.js")
const {getUserbyId} = require("../controllers/user.js")

//params
router.param("userId",getUserbyId);
router.param("productId",getProductById);


//actual routes

//create route
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct)

//read routes
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo)

//delete routes
router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct)

//update routes
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct)

//listing routes
router.get("/products",getAllProducts)

router.get("/products/categories",getAllUniqueCategories)

module.exports = router;
