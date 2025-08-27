import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Workoutcontext from './context/workoutcontext';
import  AuthContextProvider from './context/authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <AuthContextProvider>
      <Workoutcontext>
         <App />
      </Workoutcontext>
   </AuthContextProvider>
);