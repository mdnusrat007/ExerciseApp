import React from 'react'
import { useState } from 'react';
import { useLogin } from '../../hooks/uselogin';

const Login = () => {      

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {Login,error}=useLogin();
  const handleloginSubmit = async (e) => {
    e.preventDefault();
    await Login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className='main-form'>
        <form onSubmit={handleloginSubmit}>
          <h1>Login</h1>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <label>password</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
          <button type="submit" >LOGIN</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </>
  )
}

export default Login