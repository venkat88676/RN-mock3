const express=require("express")
const {FlightModel}=require('../model/flightModel')
const flightRoute=express.Router()


flightRoute.get('/',async(req,res)=>{
    try{
          
        const movies=await FlightModel.find()
        res.status(200).send(movies)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})
flightRoute.get('/:id',async(req,res)=>{
    try{
        let id=req.params.id
        const movies=await FlightModel.find({_id:id})
        res.status(200).send(movies)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})


flightRoute.post('/',async(req,res)=>{
    try{
        const payload=req.body
        const post=new FlightModel(payload)
        await post.save()
         res.status(201).send({"msg":"New Post Added"}) 
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
    
})

flightRoute.patch('/:id',async(req,res)=>{
    const postId=req.params.id
    const payload=req.body;
    try{
        await FlightModel.findByIdAndUpdate({_id:postId},payload)
         res.status(204).send({"msg":"Updated" })
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
    
})

flightRoute.delete('/:id',async(req,res)=>{
    const postId=req.params.id
    try{
        await FlightModel.findByIdAndDelete({_id:postId})
        res.status(202).send({"msg":`Note with id:${postId} has Deleted`})
    }
    catch(err){
        res.send(err)
    }
    
})

module.exports=flightRoute