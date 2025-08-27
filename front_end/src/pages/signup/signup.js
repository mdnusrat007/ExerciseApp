import React from 'react'
import { useState } from 'react';
import { useSignup } from '../../hooks/usesignup';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Signup, error } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Signup(email,password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className='main-form'>
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <label>Email</label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/><br />
          <label>password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/> <br />
          <button type="submit">SIGNUP</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </>
  )
}

export default Signup