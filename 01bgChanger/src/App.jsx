import { useState } from "react"

function App() {
  const[color,setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="flex justify-center text-5xl items-center h-3/4 "><q>react-BackgroundChanger</q></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-100 px-3
            py-2 rounded-3xl ">
              <button className="px-4 py-2 rounded-full  " 
              style={{backgroundColor:"red", color:"white"}} onClick={()=>{setColor("red")}}>
                red
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"yellow"}}onClick={()=>{setColor("yellow")}} >
                yellow
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"green", color:"white"}}onClick={()=>{setColor("green")}} >
                green
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"blueviolet", color:"white"}}onClick={()=>{setColor("blueviolet")}} >
                blueviolet
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"blue", color:"white"}}onClick={()=>{setColor("Blue")}} >
                blue
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"Fuchsia", color:"white"}} onClick={()=>{setColor("Fuchsia")}}>
                fuchsia
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"lightcoral", color:"white"}} onClick={()=>{setColor("lightcoral")}}>
                lightcoral
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"hotpink", color:"white"}} onClick={()=>{setColor("hotpink")}}>
                hotpink
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"orangered", color:"white"}} onClick={()=>{setColor("orangered")}}>
                orangered
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"LawnGreen", color:"white"}} onClick={()=>{setColor("LawnGreen")}}>
                lawnGreen
              </button>
              <button className="px-4 py-2 rounded-full shadow-lg " 
              style={{backgroundColor:"BurlyWood", color:"white"}} onClick={()=>{setColor("BurlyWood")}}>
                burlyWood
              </button>

            </div>
      </div>

    </div>
  )
}

export default App
