require('dotenv').config()


const mongoose = require('mongoose');

const express = require('express');

const app = express();

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");
const categoryRoutes = require("./routes/category.js");
const productRoutes = require("./routes/product.js");
const orderRoutes = require("./routes/order.js");


mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log("DB CONNECTED");    
})



 app.use(express.json());

app.use(cookieParser());
app.use(cors());  



//MY ROUTES
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);



//PORT
const port = process.env.PORT || 8000;


//STARTING The SERVER
app.listen(port, () => {
    console.log(`app is running at ${port}`);
})
