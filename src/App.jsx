import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [convertedAmount, SetconvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo()
//   console.log("Amount Info", currencyInfo);
  
  const options =  Object.keys(currencyInfo);
//   console.log("Currency Option", options);

  const swap = () => {
    setFrom(to)
    setTo(from)
    SetconvertedAmount(amount)
    setAmount(convertedAmount)
  }

 const convertCurrency = async () => {

    if(!amount){
        console.log("Please enter amount");
        return;
    }

    try{
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
        const data = await res.json();
        SetconvertedAmount(data.rates[to]);
        console.log("TO data", data.rates);
    }catch (error){
     console.log("Error Fetching", error);
    }
 }

 return (
  <div
      className="w-[100%] h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
  >
    {/* <div className='w-full h-screen bg-[rgba(0,0,0,0.5)]'> </div> */}
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convertCurrency()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          selectCurrency={from}
                          onAmountChange={(amount) => setAmount(amount)}
                      />
                      
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white 
                          rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          currencyOptions={options}
                          amount={convertedAmount}
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectCurrency={to}
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
             
          </div>
      </div>
     
  </div>
);
}

export default App