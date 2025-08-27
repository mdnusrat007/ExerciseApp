import { createContext,useReducer,useEffect } from "react";

//CREATE CONTEXT TO SHARE AUTHENTICATION STAT ACROSS THE APP
export const Authcontext = createContext();


//DEFINING REDUCER
export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {user: action.payload };
        case "LOGOUT":
            return { user: null };
        default:
            return state;
    }
};


//CONTEXT PROVIDER COMPONENT
const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("user"));
        if(user){
            dispatch({ type: "LOGIN", payload: user });
        }
    },[])

    // console.log("Authcontext state", state);

    return(
        <Authcontext.Provider value={{ ...state, dispatch }}>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthContextProvider;