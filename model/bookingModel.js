const mongoose=require("mongoose")

const bookingSchema=mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    flight : { type: mongoose.Schema.Types.ObjectId, ref: 'FlightModel' }
})

const BookingModel=mongoose.model("booking",bookingSchema)

module.exports=BookingModel