import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setpassword] = useState("");

  // useCallback is use for optimization purpose, it uses memoization concept which chache the value
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let char = "!@#$%^&*?~";
    if (numbers) str += num;
    if (characters) str += char;
    for (let i = 0; i < length; i++) {
      let ran = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ran);
    }
    setpassword(pass);
    btn.current.style.backgroundColor = "rgb(29 78 216)";
  }, [length, numbers, characters, setpassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numbers, characters, setpassword]);

  //useReff hook
  const passReff = useRef();
  let btn = useRef();
  const copytoClipboard = useCallback(() => {
    // passReff.current.focus();
    passReff.current?.select();
    // passReff.current?.setSelectionRange(0,3);//select only 3 charrector.
    window.navigator.clipboard.writeText(password);
    btn.current.style.backgroundColor = "red";
    // alert(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-xl rounded-lg mx-auto bg-cyan-950 px-4 py-4 shadow-md  my-8">
        <div className="text-center text-white m-3 shadow-sm">
          {" "}
          Password Generator
        </div>
        <div className="flex shadow rounded-lg mb-4 overflow-hidden">
          <input
            type="text"
            ref={passReff}
            value={password}
            placeholder="password"
            readOnly
            className="w-full py-1 px-3 "
          />
          <button
            ref={btn}
            className="bg-blue-700 text-white py-0.5 px-3"
            onClick={() => copytoClipboard()}
          >
            copy
          </button>
        </div>
        <div className=" flex  flex-wrap  items-center gap-2.5 text-white">
          <input
            type="range"
            max={50}
            min={4}
            className="cursor-pointer"
            id="length"
            value={length}
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label htmlFor="length"> length: {length}</label>
          <input
            type="checkbox"
            className="cursor-pointer"
            id="numbers"
            defaultChecked={numbers}
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <label htmlFor="numbers" className="cursor-pointer">
            includeNumbers
          </label>
          <input
            type="checkbox"
            className="cursor-pointer"
            id="characters"
            defaultChecked={characters}
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
          />
          <label htmlFor="characters" className="cursor-pointer">
            includeCharacters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
