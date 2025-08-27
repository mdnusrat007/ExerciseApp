import  {useAuthcontext} from "./useauthcontext";

export const useLogout=()=>{
    const {dispatch}=useAuthcontext();

    const logout=()=>{
        //remove user from local storage
        localStorage.removeItem("user");

        //update context
        dispatch({type:"LOGOUT"});
    }

    return{logout}
}