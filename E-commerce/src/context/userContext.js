import { createContext,useContext } from "react";
const userContext=createContext({
    username:"",
    password:"",
    cart:[],
    setUsername:function(text){this.username=text},
    

})

const useUserContext=()=>{
    return useContext(userContext)
}

export const UserProvider=userContext.Provider;
export {useUserContext}