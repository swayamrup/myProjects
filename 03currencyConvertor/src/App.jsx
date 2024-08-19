import React, { useState } from "react";
import { InputBox, currencyCode, useCurrencyInfo } from "./components/";
import bgimage from "./images/bg.jpg";
import sideimage from "./images/sideimg.jpg";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const Data = useCurrencyInfo(from, to, amount); // hook returns an object
  const Options = Object.keys(currencyCode); //return array of keys in object

  // fuction to handle swap btn
  const swap = () => {
    setFrom(to);
    setTo(from);
    // input field swap
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    amount === 0
      ? alert("Enter Amount")
      : setConvertedAmount(Data.rates[to] * amount); //Date is object & rates is obj inside Date
      // console.log(Data.date);
      
  };

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="main h-[100vh] bg-no-repeat bg-cover  "
        style={{ backgroundImage: `URL(${bgimage})` }}
      >
        <div className="title  text-yellow-200 text-5xl text-center underline font-mono p-2 ">
          <h1>Currency Convertor</h1>
        </div>
        <div className="section2 w-full flex  h-5/6 gap-4 ">
          <div className="left w-1/2  flex justify-center align-middle items-center">
            <img
              src={sideimage}
              alt="side image.png"
              className="  rounded-xl backdrop-blur-sm h-3/4 -skew-x-2"
            />
          </div>
          <div className="right  w-1/2  flex justify-center align-middle items-center">
            <form
              onSubmit={handelSubmit}
              className="flex flex-col  bg-red-400 p-14 rounded-lg -skew-x-2"
            >
              {/* call the component and pass props */}
              <InputBox
                label={"From"}
                // pass this funtion as props to InputBox components
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                CurrencyOptions={Options}
                selectCurency={from}
              />
              <div className="btn self-center">
                <button onClick={swap} className="bg-orange-500 p-1 rounded-md">
                  SWAP
                </button>
              </div>

              <InputBox
                label={"To"}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                CurrencyOptions={Options}
                selectCurency={to}
                // isAmountDisable
              />
              <div className="covertbtn">
                <button
                  onClick={convert}
                  className="bg-green-500 w-full p-1 rounded-md "
                >
                  Convert{` ${from} to ${to} `}
                </button>
              </div>
              <div className="date">
                {/* display date */}
                {Data.date}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
