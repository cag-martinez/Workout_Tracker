const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema =new Schema({
    day: {
        type: Date,
        default: date.now()
    },
    excersises: [
        {
            type: {
                type: String,
                trim: true,
                require: true
            },
            name: {
                type: String,
                trim: true, 
                require: true
            },
            duration: {
                type: Number,
                trim: true,
                require: true
            },
            wight: {
                type: Number,
                trim: false,
                require: true
            },
            reps: {
                type: Number,
                trim: false,
                require: true
            },
            sets: {
                type: Number,
                trim: false,
                require: true
            },
            distance: {
                type: Number,
                trim: false,
                require: true
            },
        }
    ]


});


const User = mongoose.model("User", WorkoutSchema);

module.exports = User;