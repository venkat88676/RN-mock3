const mongoose = require("mongoose");
// const { UserModel } = require("../model/userModel");
// const { FlightModel } = require("../model/flightModel");

const bookingSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    flight: { type: mongoose.Schema.Types.ObjectId, ref: 'flight' }
});

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = BookingModel;
