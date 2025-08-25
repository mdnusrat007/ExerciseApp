import React from 'react'
import { useContext } from 'react';
import { Data } from '../../context/workoutcontext';
import axios from 'axios';

const Form = () => {
  const { form, setform, getworkouts, workouts, setWorkouts, updateform, setupdateform } = useContext(Data);

  //post request
  const updateformfield = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/api/workouts/", form);
    setWorkouts([...workouts, response.data]);
    setform({ title: "", reps: "", load: "" });
  };
  getworkouts();

  //update function
  const updateworkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateform;
    await axios.patch(`http://localhost:4000/api/workouts/${_id}`, { title, reps, load, })
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