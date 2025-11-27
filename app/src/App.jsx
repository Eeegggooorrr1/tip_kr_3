import React from 'react'
import './App.css'
import Converter from './components/Converter/Converter'
import Popular from './components/Popular/Popular'

const rates = {
  USD: 1,
  EUR: 1.1577,     
  RUB: 0.0127,      
  GBP: 1.27,       
  JPY: 0.0067,     
  AUD: 0.6513,      
  KZT: 0.00193,    
  BYN: 0.2936       
}

export default function App(){
  return (
    <div className="app">
      <div className="container">
        <Converter rates={rates} />
        <Popular rates={rates} />
      </div>
    </div>
  )
}
