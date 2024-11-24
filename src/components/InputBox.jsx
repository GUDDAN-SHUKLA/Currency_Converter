import {useId} from "react";

function InputBox({
    label,
    amount,
    currencyOptions = [],
    onCurrencyChange,
    selectCurrency ,
    amountDisable = false,
    currencyDisable = false,
    onAmountChange,
}) {
    
    console.log("Currency Converted Amt: ", selectCurrency);
    
    const amountInputId = useId()
    // console.log("User ID", amountInputId);
    
    return(
        <div className="{` bg-white p-3 rounded-lg text-sm flex ${className}`}">
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label} </label>
                <input id={amountInputId} type="number" className="outline-none w-full bg-transparent py-1.5" 
                 placeholder="Amount" disabled={amountDisable} value={amount} 
                 onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            {/* <p>{conver}</p> */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency} 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
                disabled={currencyDisable}
                >
                   {currencyOptions.map((currency) => (
                        <option key={currency} value= {currency} >
                            {currency}
                        </option>
                   ))}
                </select>
            </div>    
        </div>
    )
}

export default InputBox