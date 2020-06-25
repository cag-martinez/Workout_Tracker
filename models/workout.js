const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema =new Schema({
    day: {
        type: Date,
        default: Date.now()
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


}, { toJSON: { virtuals: true } });

WorkoutSchema.virtual("totalDuration").get(function(){
    return this.excersises.reduce((total, time) => {
        return total + time.duration
    }, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;