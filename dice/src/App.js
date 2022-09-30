import { useState, useEffect } from 'react'
import logo from './assets/d20.png'

import './App.css'

function App() {
  const [d4, setD4] = useState('✶')
  const [allTotal, setAllTotal] = useState(0)
  const [d6, setD6] = useState('✶')
  const [d8, setD8] = useState('✶')
  const [d10, setD10] = useState('✶')
  const [d12, setD12] = useState('✶')
  const [d20, setD20] = useState('✶')
  const [d100a, setd100a] = useState('✶')

  ///ADD THE TOTAL ALL FUNCTION TO EACH DICE FUNCTION!!!
  const dFour = () => {
    let output = Math.floor(Math.random() * 5)
    if (output === 0) {
      dFour()
    } else {
      setD4(output)
      let sum = d4 + d6 + d8 + d10 + d12 + d20 + d100a
      setAllTotal(sum)
    }
  }

  const dSix = () => {
    let output = Math.floor(Math.random() * 7)
    if (output === 0) {
      dSix()
    } else {
      setD6(output)
      let sum = d4 + d6 + d8 + d10 + d12 + d20 + d100a
      setAllTotal(sum)
    }
  }

  const dEight = () => {
    let output = Math.floor(Math.random() * 9)
    if (output === 0) {
      dEight()
    } else {
      setD8(output)
      let sum = d4 + d6 + d8 + d10 + d12 + d20 + d100a
      setAllTotal(sum)
    }
  }

  const dTen = () => {
    let output = Math.floor(Math.random() * 10)
    setD10(output)
    let sum = d4 + d6 + d8 + d10 + d12 + d20 + d100a
    setAllTotal(sum)
  }

  const dTwelve = () => {
    let output = Math.floor(Math.random() * 13)
    if (output === 0) {
      dTwelve()
    } else {
      setD12(output)
      let sum = d4 + d6 + d8 + d10 + d12 + d20 + d100a
      setAllTotal(sum)
    }
  }

  const dTwenty = () => {
    let output = Math.floor(Math.random() * 21)
    if (output === 0) {
      dTwenty()
    } else {
      setD20(output)
      let sum = d4 + d6 + d8 + d10 + d12 + d20 + d100a
      setAllTotal(sum)
    }
  }

  const dOneHundred = () => {
    let output = Math.floor(Math.random() * 101)
    if (output === 0) {
      dOneHundred()
    } else {
      setd100a(output)
      let sum = d4 + d6 + d8 + d10 + d12 + d20 + d100a
      setAllTotal(sum)
    }
  }

  const fireAll = () => {
    dFour()
    dSix()
    dEight()
    dTen()
    dTwelve()
    dTwenty()
    dOneHundred()
  }

  const zeroOut = () => {
    setD4('✶')
    setD6('✶')
    setD8('✶')
    setD10('✶')
    setD12('✶')
    setD20('✶')
    setd100a('✶')
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>DICE ROLLER</h1>
        <img className="logo" src={logo} />
      </div>
      <p className="die_type">For now put the dice total here {allTotal}</p>
      <div className="table">
        <div className="die">
          <h1 className="die_type">D4</h1>
          <button
            className="dice_button"
            onClick={() => {
              dFour()
            }}
          >
            {d4}
          </button>
        </div>
        <div className="die">
          <h1 className="die_type">D6</h1>
          <button
            className="dice_button"
            onClick={() => {
              dSix()
            }}
          >
            {d6}
          </button>
        </div>
        <div className="die">
          <h1 className="die_type">D8</h1>
          <button
            className="dice_button"
            onClick={() => {
              dEight()
            }}
          >
            {d8}
          </button>
        </div>
        <div className="die">
          <h1 className="die_type">D10</h1>
          <button
            className="dice_button"
            onClick={() => {
              dTen()
            }}
          >
            {d10}
          </button>
        </div>
        <div className="die">
          <h1 className="die_type">D12</h1>
          <button
            className="dice_button"
            onClick={() => {
              dTwelve()
            }}
          >
            {d12}
          </button>
        </div>
        <div className="die">
          <h1 className="die_type">D20</h1>
          <button
            className="dice_button"
            onClick={() => {
              dTwenty()
            }}
          >
            {d20}
          </button>
        </div>
        <div className="die">
          <h1 className="die_type">D100</h1>
          <button
            className="dice_button"
            onClick={() => {
              dOneHundred()
            }}
          >
            {d100a}
          </button>
        </div>
        <div className="controls">
          <button
            className="control_button"
            onClick={() => {
              fireAll()
            }}
          >
            All
          </button>
          <button
            className="control_button"
            onClick={() => {
              zeroOut()
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
