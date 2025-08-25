const express=require("express")

const workout=require("../models/schema");

const router=express.Router()

const {getAllWorkouts,getWorkoutById,createWorkout,updateWorkout,deleteWorkout}=require("../controller/workoutcontroller")

//  get all workouts
router.get("/",getAllWorkouts);

//get workout by id
router.get("/:id",getWorkoutById);

// create a workout
router.post("/",createWorkout);

//updating post
router.patch("/:id",updateWorkout);

//deleting the workout
router.delete("/:id",deleteWorkout);

module.exports=router;