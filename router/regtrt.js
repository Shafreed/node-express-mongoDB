const express=require('express');
const rertr=express.Router();
const schema=require('../module/schema')

rertr.get('/',(req,res)=>{res.render('reg')});
rertr.post('/',(req,res)=>{
    console.log(req.body)
schema.insertMany([{UserName:req.body.UserName,EmailID:req.body.EmailID,MobileNumber:req.body.MobileNumber,Password:req.body.Password}])
})




module.exports=rertr