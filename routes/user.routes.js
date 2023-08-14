const express=require("express")
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")

const {UserModel}=require('../model/userModel')

const userRouter=express.Router();

userRouter.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    let token=jwt.sign({userId:user._id},'masai')
                    res.status(201).send({"msg":"Login Successfully","token":token})
                }
                else res.status(400).send({"msg":"Wrong credentials"})
            })
        } 
        else{
            res.send({"msg":"Register First"})
        }
    }catch(err){
        res.status(400).send({msg:err.message})
    }
})

userRouter.post('/register',async(req,res)=>{
    
    try{
        const {name,email,password} = req.body;        
        const isUserPresent = await UserModel.findOne({email});
         if(isUserPresent) return res.send("Login Please You have registered already");
         
         const hash = await bcrypt.hash(password,8);
         const newUser = new UserModel({name,email, password: hash});
         await newUser.save();

         res.send("Signup Successful")
    } catch(err) {          
        res.send(err.message);
    }
})

module.exports=userRouter
