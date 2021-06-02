const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    }
}, {timestamps: true}); //this records the time when new entry  is created in this schema


module.exports = mongoose.model("Category",categorySchema)
