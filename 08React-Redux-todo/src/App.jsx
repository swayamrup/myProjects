import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add } from './features/TodoSlice'
import Demo from './Demo'
function App() {
  const todos=useSelector(state=>state.todos.todos)
  const dispach=useDispatch()

  return (
    <>
    
    <button onClick={()=>dispach(add("first todo"))}>add</button>
    <Demo/>
    
    </>
  )
}

export default App