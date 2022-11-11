import { useState } from 'react'
import logo from './assets/d20.png'
import D4 from './components/d4'
import D6 from './components/d6'
import './App.css'

function App() {
  const [coin, setCoin] = useState('')
  const [coinVal, setCoinVal] = useState('')

  const [d8, setD8] = useState('')
  const [d10, setD10] = useState('')
  const [d12, setD12] = useState('')
  const [d20, setD20] = useState('')
  const [d100a, setd100a] = useState('')
  const [allTotal, setAllTotal] = useState('')

  const coinFLip = () => {
    let output = Math.floor(Math.random() * 3)
    if (output === 0) {
      coinFLip()
    } else if (output === 1) {
      setCoin('H')
      setCoinVal(output)
    } else if (output === 2) {
      setCoin('T')
      setCoinVal(output)
    }
  }

  const dEight = () => {
    let output = Math.floor(Math.random() * 9)
    if (output === 0) {
      dEight()
    } else {
      setD8(output)
    }
  }

  const dTen = () => {
    let output = Math.floor(Math.random() * 10)
    setD10(output)
  }

  const dTwelve = () => {
    let output = Math.floor(Math.random() * 13)
    if (output === 0) {
      dTwelve()
    } else {
      setD12(output)
    }
  }

  const dTwenty = () => {
    let output = Math.floor(Math.random() * 21)
    if (output === 0) {
      dTwenty()
    } else {
      setD20(output)
    }
  }

  const dOneHundred = () => {
    let output = Math.floor(Math.random() * 101)
    if (output === 0) {
      dOneHundred()
    } else {
      setd100a(output)
    }
  }

  const fireAll = () => {
    coinFLip()
    dEight()
    dTen()
    dTwelve()
    dTwenty()
    dOneHundred()
  }

  const zeroOut = () => {
    setCoin('')
    setCoinVal('')
    setD8('')
    setD10('')
    setD12('')
    setD20('')
    setd100a('')
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>DICE ROLLER</h1>
        <img className="logo" src={logo} />
      </div>
      <div className="table">
        <div className="die">
          <h1 className="die_type">Coin</h1>
          <button
            className="coin"
            onClick={() => {
              coinFLip()
            }}
          >
            {coin}
          </button>
        </div>
        <D4 />
        <D6 />

        <div className="die">
          <h1 className="die_type">D8</h1>
          <button
            className="triangle"
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
            className="kite"
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
            className="pentagon"
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
            className="triangle"
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
            className="hex"
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
          <button className="control_button">Tally</button>
          <button
            className="control_button"
            onClick={() => {
              zeroOut()
            }}
          >
            Reset
          </button>
        </div>
        <p className="die_type">Tally: {allTotal}</p>
      </div>
    </div>
  )
}

export default App
