import React from 'react'
import './Search.css'

export default function CurrencySelect({options,value,onChange}){
  return (
    <div className="selectwrap">
      <select value={value} onChange={e=>onChange(e.target.value)} className="select">
        {options.map(opt=> <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  )
}
