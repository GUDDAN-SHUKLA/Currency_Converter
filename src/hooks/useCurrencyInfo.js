import {useEffect, useState } from "react";

function useCurrencyInfo() {
    const[currencies, setCurrencies] = useState({})
        
            const fetchCurrencies = async () => {
                try{
                    const res = await fetch('https://api.frankfurter.app/currencies');
                    const data = await res.json();
                        setCurrencies(data);
                    // console.log(data);
                }catch (error){
                 console.log("Error Fetching", error);
                }
            }
        // console.log("HEllo", currencies);

            useEffect(() => {
                fetchCurrencies();
            },[])
        return currencies
}

export default useCurrencyInfo;
