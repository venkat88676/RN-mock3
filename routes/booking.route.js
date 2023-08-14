const express=require("express");

const BookingModel=require('../model/bookingModel')

const bookingRoute=express.Router();

bookingRoute.post('/',async(req,res)=>{
    try{
        const payload=req.body
        const post=new BookingModel(payload)
        await post.save()
         res.status(201).send({"msg":"Booking Added"}) 
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
    
})




module.exports=bookingRoute