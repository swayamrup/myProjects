import React from 'react'
// use useParams hook to catch parameter
import { useParams } from 'react-router-dom'

function About() {
    // name has to be same as name is provided in path
    const {user}=useParams();
  return (
    <div className='bg-slate-600 text-4xl text-center' >hello : {user}</div>
  )
}

export default About