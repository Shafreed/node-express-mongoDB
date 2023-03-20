const mongoose=require('mongoose');
const structure=mongoose.Schema({
    UserName:String,
    EmailID:String,
    MobileNumber:String,
    Password:String
})


module.exports=mongoose.model('clint',structure);