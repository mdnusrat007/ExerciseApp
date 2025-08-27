import React from 'react'
import { createContext, useState } from 'react'
import axios from 'axios';
import { useAuthcontext } from "../hooks/useauthcontext"


export const Data = createContext();

const Workoutcontext = ({ children }) => {
    const { user } = useAuthcontext();
    //GET REQUEST STATE
    const [workouts, setWorkouts] = useState([]);
    //POST REQUEST STATE
    const [form, setform] = useState({
        title: "",
        reps: "",
        load: ""
    });
    const getworkouts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/workouts/", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });
            const data = response.data;
            setWorkouts(data);
        } catch (error) {
            console.error("Error fetching workouts:", error);
        }
    }

    // //delete function
    const handleDelete = async (_id) => {
        await axios.delete(`http://localhost:4000/api/workouts/${_id}`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });
        getworkouts();
    };

    // //update function
    const [updateform, setupdateform] = useState({
        _id: null,
        title: "",
        reps: "",
        load: ""
    });

    const toggleupdate = (workout) => {
        setupdateform({
            _id: workout._id,
            title: workout.title,
            reps: workout.reps,
            load: workout.load
        });
    };


    return (
        <Data.Provider value={{ workouts, setWorkouts, getworkouts, form, setform, handleDelete, toggleupdate, updateform, setupdateform }}>
            {children}
        </Data.Provider>
    )
}

export default Workoutcontext;