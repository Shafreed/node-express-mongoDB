const express = require('express');
const router=express.Router()
const schema=require('../module/schema')


router.get('/',(req,res)=>{res.render('login')})

router.post('/',async(req,res)=>{
    console.log(req.body);
    const shafs=await schema.find({
        UserName: req.body.userName,
        Password: req.body.password
    })
    // console.log(shafs.length);
    if(shafs.length>0){
        res.render('user')
    }else{
        res.render('login',{show:'Invalid username or password'});
    }
})




module.exports=router