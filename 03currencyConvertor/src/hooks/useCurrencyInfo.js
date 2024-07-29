import { useEffect ,useState} from "react"


const useCurrencyInfo=(currency)=>{
    const [countries, setContries] = useState({})
    const [data, setData] = useState({})
    useEffect(() => {
    fetch(`https://api.frankfurter.app/currencies`)
    .then((res)=>res.json())
    .then((res)=>setContries(res));
     console.log(countries);

    //  fetch(`https://api.frankfurter.app/latest?amount=10&from=INR&to=USD`)
    //  .then((res1)=>res1.json())
    // .then((res1)=>setData(res1));
     
    }, [currency])
    // console.log(countries);
    // console.log(data);
    const newData=[countries,data]
    return countries;
    
}
export default useCurrencyInfo;