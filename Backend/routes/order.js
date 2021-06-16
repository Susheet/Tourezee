const express = require("express")
const router = express.Router()

const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth.js")
const {getUserbyId,pushOrderInPurchaseList, getUser} = require("../controllers/user.js")
const {updateStock} = require("../controllers/product.js")
const {getOrderbyId ,createOrder,getAllOrders,getOrderStatus,updateStatus} = require("../controllers/order.js")

//params
router.param("userId",getUserbyId)
router.param("orderId",getOrderbyId)  

//Actual routes

//create
router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)

//read
router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)

//status of order
router.get("/order/status/:userId",isSignedIn,isAuthenticated,isAdmin,getOrderStatus)
router.put("/order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus)


module.exports = router;
