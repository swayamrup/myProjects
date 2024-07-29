import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  // const [data, setdata] = useState("");
  // useEffect(() => {

  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then(res=>res.json())
  //     .then(data=>{
  //         console.log(data)
  //         setdata(data);
  //     })
  // }, [])

  return (
    <>
      <div className="bg-slate-600 w-10/12 m-auto text-center">
        github followers: {data.followers}
      </div>
      <img src={data.avatar_url} alt="img" className="size-40 rounded-full relative" />
      
    </>
  );
}

export const DataLoader = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
   
  return res.json()
};
