import { use, useState } from 'react'
import './App.css'
import {InputBox} from "./components";
import useCurrency from "./hooks/currency";
function App() {
      const [from , setForm] = useState("usd")
      const [to , setTo] = useState("inr")
      const [amount , setAmount] = useState(0)
      const [conertedAmount , setConvertedAmount] = useState(0)

     
const data = useCurrency(from);
const options = data[from];

  const convertCurrency = () => {
    if (from === to) {
      setConvertedAmount(amount);
      return;
    }
    const rate = options[to];
    
    const converted = amount * rate;
   
    setConvertedAmount(Number(converted.toFixed(2)));
  
  }

  const swapValue = () => {
    setAmount(conertedAmount);
    setConvertedAmount(amount); 
    setForm(to);
    setTo(from);
  }
  return (
    <>
    <div className="container">
      <h1>Currency converter</h1> 
      <InputBox 
      label={"From"}
      amount={amount}
      onAmountchange={setAmount}
      options={options}
      seletedOption={from}
      onOptionChange={setForm}
      />
      <button className="swapBtn" onClick={swapValue}>Swap</button>
      <InputBox 
      label={"To"}
      amount={conertedAmount}
      onAmountchange={setConvertedAmount}
      options={options}
      seletedOption={to}
      onOptionChange={setTo}
      disabled={true}
      />
      <button className="convertBtn" onClick={convertCurrency}>Convert usd to inr </button>
    </div>
    </>
  )
}

export default App
