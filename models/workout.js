const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                required: "Exercise Type is Required"
            },
            name: {
                type: String,
                required: "Name is Required"
            },
            duration: {
                type: Number,
                required: "Duration is Required"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }

        }
    ]



});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
