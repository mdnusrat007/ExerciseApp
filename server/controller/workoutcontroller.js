const workout = require("../models/schema");

//for all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await workout.find().sort({ createdAt: -1 });
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// for single workout
const getWorkoutById = async (req, res) => {
    try {
        const id = req.params.id;
        const workoutData = await workout.findById({ _id: id });
        res.json(workoutData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// creating a post
const createWorkout = async (req, res) => {
    try {
        const newworkout = new workout(req.body);
        const savedWorkout = await newworkout.save();
        res.status(201).send(savedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//updating a post
const updateWorkout = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedWorkout = await workout.findByIdAndUpdate({ _id:id }, req.body, { new: true });
        res.json(updatedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//deleting a workout
const deleteWorkout = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedworkout = await workout.findByIdAndDelete({ _id: id });
        res.status(200).json(deletedworkout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
}