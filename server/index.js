const express=require("express")
//cors (cross origin resoure sharing)
const cors=require("cors")

const app=express()

//cors (cross origin resoure sharing)



///port
const port=process.env.PORT || 4000

//db connection
require("./db/connection");

const workoutrouter=require("./router/workoutrouter")


//middleware
app.use(express.json());
app.use(cors());

//router connection
app.use("/api/workouts", workoutrouter);

 

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})