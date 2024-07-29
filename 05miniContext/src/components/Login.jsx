import React, {useState,useContext}from 'react'
import UserContext from '../contexts/UserContext';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
   const {setUser}= useContext(UserContext)
    const submit=(e)=>{
            e.preventDefault();
            setUser({username,password});

    }
  return (
    <>
    <h1>Login</h1>
    <input
    type='text'
    placeholder='username'
    onChange={(e)=>setUsername(e.target.value)}
    value={username} 
    />
    ---
    <input
    type='text'
    placeholder='password'
    value={password} 
    onChange={(e)=>setpassword(e.target.value)}
   
    />
    <button  style={{backgroundColor:"red",color:"white"}} onClick={submit}>submit</button>
    </>
  )
}

export default Login