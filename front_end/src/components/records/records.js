import React from 'react'
import { useEffect, useContext } from 'react';
import { useAuthcontext } from '../../hooks/useauthcontext';
import { Data } from '../../context/workoutcontext';
import '../../components/records/recordstyle.css'

const Records = () => {
    const { user } = useAuthcontext();
    const { workouts, getworkouts, handleDelete, toggleupdate } = useContext(Data);

    useEffect(() => {
        if (user) {
        getworkouts();
        }
    }, [user, getworkouts]);
    return (

        <div className='records-container'>
            {workouts && workouts.map((workout) => { //renders only when data is available
                return (
                    <div className='record' key={workout._id}>
                        <h1>{workout.title}</h1>
                        <p>{workout.reps}</p>
                        <p>{workout.load}</p>
                        <button onClick={() => toggleupdate(workout)}>Edit</button>
                        <button onClick={() => handleDelete(workout._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Records