import React, { useEffect, useState } from "react";
function demo() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
   
    console.log("l");

    localStorage.setItem("theme", theme);
  }, [theme]);

  document.getElementById("root").classList.remove("light", "dark");
  document.getElementById("root").classList.add(theme);

  console.log("theme", theme);
  return (
    <>
      <div className=" bg-white text-black dark:bg-black dark:text-white">
        this is demo comp
      </div>
      <div
        className="btn active:bg-red-300"
        onClick={() => {
          let demo = theme;
          setTheme((pre) => (pre === "light" ? "dark" : "light"));
        }}
      >
        {theme === "light" ? "dark" : "light"}
      </div>
    </>
  );
}

export default demo;
