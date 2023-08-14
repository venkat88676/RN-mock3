const express=require("express");

const {BookingModel}=require('../model/bookingModel')


const dashboardRoute=express.Router();

dashboardRoute.get('/',async(req,res)=>{
    try{ 
        const booking=await BookingModel.find()
        res.status(200).send(booking)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
    
})

dashboardRoute.patch('/:id',async(req,res)=>{
    const postId=req.params.id
    const payload=req.body;
    try{
        await BookingModel.findByIdAndUpdate({_id:postId},payload)
         res.status(204).send({"msg":"Updated" })
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
    
})

dashboardRoute.delete('/:id',async(req,res)=>{
    const postId=req.params.id
    try{
        await BookingModel.findByIdAndDelete({_id:postId})
        res.status(202).send({"msg":`Note with id:${postId} has Deleted`})
    }
    catch(err){
        res.send(err)
    }
    
})

module.exports=dashboardRoute