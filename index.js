const express=require("express")
const connection = require("./config/db")
const userRouter=require('./routes/user.routes')
const flightRoute = require("./routes/flight.routes")
const bookingRoute= require('./routes/booking.route')
const dashboardRoute=require('./routes/dashboard.route')

require("dotenv").config()
const app=express();

app.use(express.json());

app.use('/api',userRouter);

app.use('/api/flights',flightRoute)
app.use('/api/booking',bookingRoute)
app.use('/api/dashboard',dashboardRoute)

app.listen(process.env.port,async()=>{
    try{
        await connection()
        console.log(`server running at ${process.env.port}`)
    }catch(err){
        console.log(err)
    }
})
