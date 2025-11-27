import React, {useState, useMemo} from 'react'
import './Converter.css'
import CurrencySelect from '../Search/Search'

export default function Converter({rates}){
  const currencies = Object.keys(rates)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('RUB')
  const [amount, setAmount] = useState(1)

  const result = useMemo(()=>{
    const a = parseFloat(amount) || 0
    return a * (rates[from] / rates[to])
  },[amount,from,to,rates])

  return (
    <div className="panel converter">
      <div className="head">Конвертер валют</div>
      <div className="row">
        <div className="left">
          <label className="label">Сумма</label>
          <input className="amount" type="number" value={amount} onChange={e=>setAmount(e.target.value)} />
          <div className="selectors">
            <CurrencySelect options={currencies} value={from} onChange={setFrom} />
            <button className="swap" onClick={()=>{const s=from;setFrom(to);setTo(s)}}>⇄</button>
            <CurrencySelect options={currencies} value={to} onChange={setTo} />
          </div>
        </div>
        <div className="right">
          <div className="result">
            <div className="big">{Number(result).toLocaleString(undefined,{maximumFractionDigits:6})}</div>
            <div className="muted">{amount} {from} → {to}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
