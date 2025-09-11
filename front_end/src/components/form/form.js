import React from 'react'
import { useContext } from 'react';
import { Data } from '../../context/workoutcontext';
import { useAuthcontext } from '../../hooks/useauthcontext';
import axios from 'axios';
import '../../components/form/formstyle.css'

const API_BASE = process.env.REACT_APP_API_URL;

const Form = () => {

  const { user } = useAuthcontext();
  const { form, setform, getworkouts, workouts, setWorkouts, updateform, setupdateform } = useContext(Data);

  //post request
  const updateformfield = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${API_BASE}/api/workouts/`, form, {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    });
    setWorkouts([...workouts, response.data]);
    setform({ title: "", reps: "", load: "" });
  };
  getworkouts();

  //update function
  const updateworkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateform;
    await axios.patch(`${API_BASE}/api/workouts/${_id}`, { title, reps, load, }, {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    })
    setupdateform({ title: "", reps: "", load: "" });
    getworkouts();   
  }

  const handleupdateformfield = (e) => {
    const { name, value } = e.target;
    setupdateform({ ...updateform, [name]: value });
  };

  return (
    <div>
      {!updateform._id && (
        <form onSubmit={handleSubmit}>
          <h1>create new record</h1>
          <label>Title:</label>
          <input type="text" name="title" value={form.title} onChange={updateformfield} /><br />
          <label>Reps:</label>
          <input type="number" name="reps" value={form.reps} onChange={updateformfield} /> <br />
          <label>Load:</label>
          <input type="number" name="load" value={form.load} onChange={updateformfield} /> <br />
          <button type="submit">Add Workout</button>
        </form>
      )}

      {updateform._id && (
        <form onSubmit={updateworkout}>
          <h1>Update Workout</h1>
          <label>Title:</label>
          <input type="text" name="title" value={updateform.title} onChange={handleupdateformfield} /><br />
          <label>Reps:</label>
          <input type="number" name="reps" value={updateform.reps} onChange={handleupdateformfield} /> <br />
          <label>Load:</label>
          <input type="number" name="load" value={updateform.load} onChange={handleupdateformfield} /> <br />
          <button type="submit">update Workout</button>
        </form>
      )}
    </div>
  )
}

export default Form