import { createContext,useContext } from "react";

const Mycontex=createContext(
    {
        todos:[
                {
                    id:1,
                    todo:"something...",
                    completed:false
                }
              ],
        add:(todo)=>{},
        edit:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{},
    }
);
const MycontexProvider=Mycontex.Provider;
const useMycontex=()=>{
    return useContext(Mycontex);
}
export {useMycontex,MycontexProvider}