import React, {useId} from 'react'
import "../App.css"

export default function InputBox({
  label,
  amount,
  onAmountchange,
  options = [],
  seletedOption = "usd",
  onOptionChange,
 disabled = false,
}) {
  const inputId = useId();
  return (
    <div className="input-box">
        <label htmlFor={inputId}>{label}</label>
      <input type="number" id={inputId} value={amount} onChange={(e) => onAmountchange(e.target.value)} disabled={disabled}/>
      <span>Currency type:</span>
      <select value={seletedOption} onChange={(e) => onOptionChange(e.target.value)}>
        {Object.keys(options).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
