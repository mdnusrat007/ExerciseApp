import { useAuthcontext } from "./useauthcontext";
import { useState } from "react";

export const useSignup=()=>{
    const [error, setError] = useState(null);
    const {dispatch}=useAuthcontext();

    const Signup=async(email,password)=>{
        setError(null)

        const response=await fetch("http://localhost:4000/api/users/sign_in",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        });

        const data=await response.json();

        if(!response.ok){
            setError(data.error);
        }

        if(response.ok){
            //save the user to local storage
            localStorage.setItem("user", JSON.stringify(data));

            //update context
            dispatch({type:"LOGIN", payload:data})
        }
    }
return{Signup,error}
}