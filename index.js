const express=require("express")
const connection = require("./config/db")
const userRouter=require('./routes/user.routes')
const flightRoute = require("./routes/flight.routes")
// const {authenticate}=require('./middleware/authentication')
// const {postRouter}=require('./routers/postRouter')
require("dotenv").config()
const app=express();

app.use(express.json());

app.use('/api',userRouter);
// app.use(authenticate)
app.use('/api/flights',flightRoute)

app.listen(process.env.port,async()=>{
    try{
        await connection()
        console.log(`server running at ${process.env.port}`)
    }catch(err){
        console.log(err)
    }
})
