const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('this is an express application')
})
app.listen(2400,()=>console.log(`server running on port${2400}`))