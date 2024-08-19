import { useState, useEffect } from "react";

useState;
function useCurrencyInfo(from, to) {
  
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.frankfurter.app/latest?amount=1&from=${from.toLocaleUpperCase()}&to=${to.toLocaleUpperCase()}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [from, to]);

  
  return data;
  return {
    INR: 83.72,
  };
}

export default useCurrencyInfo;

// amount: 1;
// base: "USD";
// date: "2024-07-30";
// rates: {
//   INR: 83.72;
// }
