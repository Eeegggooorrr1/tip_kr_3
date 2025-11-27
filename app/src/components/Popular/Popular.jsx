import React from 'react'
import './Popular.css'

export default function Popular({rates}){
  const pairs = [['USD','RUB'],['EUR','RUB'],['RUB','KZT'],['BYN','RUB']]
  return (
    <div className="panel popular">
      <div className="head">Популярное</div>
      <div className="cards">
        {pairs.map(([a,b])=>{
          const value = 1 * (rates[a] / rates[b])
          return (
            <div key={a+b} className="card">
              <div className="pair">{a} → {b}</div>
              <div className="val">{Number(value).toLocaleString(undefined,{maximumFractionDigits:4})}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
