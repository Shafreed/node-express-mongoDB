const express=require("express");
const app=express();
const port=3003;
const first=require('./router/lortr')
const second=require('./router/regtrt')
const mongoose=require('mongoose');


app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use('/',first)
app.use('/re',second)







app.listen(port,()=>{console.log('server created')})
mongoose.connect('mongodb://127.0.0.1:27017/regForm').then(()=>{console.log('DB connected')}).catch(('DB not connected'));