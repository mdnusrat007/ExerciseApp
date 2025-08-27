import { Authcontext } from "../context/authcontext";
import { useContext} from "react";


//CUSTOM HOOK DEFINITION
export const useAuthcontext = () => {
    const context = useContext(Authcontext)  
    if(!context){
        throw Error("useAuthcontext cannot be used");
    }
    return context;
}