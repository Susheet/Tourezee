const mongoose=require('mongoose');

const staySchema=mongoose.Schema({
    name:{type:String},
    category:{type:String},
    location:{type:String},
    city:{type:String},
    country:{type:String},
    latitude:{type:Number,unique:true},
    longitude:{type:Number,unique:true},
    distFromAirPort:{type:Number},
    distFromCityCenter:{type:Number},
    distFromMetro:{type:Number},
    distFromHospital:{type:Number},
    costPppn:{type:Number},
    rating:{type:Number},
    stars:{type:Number},
    wheelchair:{type:Boolean},
    breakfast:{type:Boolean},
    cab:{type:Boolean},
    wifi:{type:Boolean},
    ac:{type:Boolean},
    pool:{type:Boolean},
    laundry:{type:Boolean},
    housekeeping:{type:Boolean},
    spa:{type:Boolean},
    helpdesk:{type:Boolean},
    roomService:{type:Boolean},
    spa:{type:Boolean},
    gym:{type:Boolean},
    restaurant:{type:Boolean},
    babyFriendly:{type:Boolean},
    petFriendly:{type:Boolean},
    parking:{type:Boolean}


});

module.exports=mongoose.model('Stay',StaySchema);