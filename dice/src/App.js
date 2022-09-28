import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [d4, setD4] = useState('')
  const [dmD4, setDmD4] = useState('')

  const [d6, setD6] = useState('')
  const [dmD6, setDmD6] = useState('')

  const [d8, setD8] = useState('')
  const [dmD8, setDmD8] = useState('')

  const [d10, setD10] = useState('')
  const [dmD10, setDmD10] = useState('')

  const [d12, setD12] = useState('')
  const [dmD12, setDmD12] = useState('')

  const [d20, setD20] = useState('')
  const [dmD20, setDmD20] = useState('')

  const dFour = () => {
    let output = Math.floor(Math.random() * 5)
    let dmOutput = Math.floor(Math.random() * 5)
    if (output === 0 || dmOutput === 0) {
      dFour()
    } else {
      setD4(`Player rolled ${output}`)
      setDmD4(`DM rolled ${dmOutput}`)
    }
  }

  const dSix = () => {
    let output = Math.floor(Math.random() * 7)
    let dmOutput = Math.floor(Math.random() * 7)
    if (output === 0 || dmOutput === 0) {
      dSix()
    } else {
      setD6(`Player rolled ${output}`)
      setDmD6(`DM rolled ${dmOutput}`)
    }
  }

  const dEight = () => {
    let output = Math.floor(Math.random() * 9)
    let dmOutput = Math.floor(Math.random() * 9)
    if (output === 0 || dmOutput === 0) {
      dEight()
    } else {
      setD8(`Player rolled ${output}`)
      setDmD8(`DM rolled ${dmOutput}`)
    }
  }

  const dTen = () => {
    let output = Math.floor(Math.random() * 11)
    let dmOutput = Math.floor(Math.random() * 11)
    if (output === 0 || dmOutput === 0) {
      dEight()
    } else {
      setD10(`Player rolled ${output}`)
      setDmD10(`DM rolled ${dmOutput}`)
    }
  }

  const dTwelve = () => {
    let output = Math.floor(Math.random() * 13)
    let dmOutput = Math.floor(Math.random() * 13)
    if (output === 0 || dmOutput === 0) {
      dEight()
    } else {
      setD12(`Player rolled ${output}`)
      setDmD12(`DM rolled ${dmOutput}`)
    }
  }

  const dTwenty = () => {
    let output = Math.floor(Math.random() * 21)
    let dmOutput = Math.floor(Math.random() * 21)
    if (output === 0 || dmOutput === 0) {
      dTwenty()
    } else {
      setD20(`Player rolled ${output}`)
      setDmD20(`DM rolled ${dmOutput}`)
    }
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>Role Playing Game Dice</h1>
      </div>
      <div className="table">
        <div className="die">
          <h1 className="die_type">D4</h1>
          <button onClick={() => dFour()}>Roll</button>
          <p>{d4}</p>
          <p>{dmD4}</p>
        </div>

        <div className="die">
          <h1 className="die_type">D6</h1>
          <button onClick={() => dSix()}>Roll</button>
          <p>{d6}</p>
          <p>{dmD6}</p>
        </div>

        <div className="die">
          <h1 className="die_type">D8</h1>
          <button onClick={() => dEight()}>Roll</button>
          <p>{d8}</p>
          <p>{dmD8}</p>
        </div>

        <div className="die">
          <h1 className="die_type">D10</h1>
          <button onClick={() => dTen()}>Roll</button>
          <p>{d10}</p>
          <p>{dmD10}</p>
        </div>

        <div className="die">
          <h1 className="die_type">D12</h1>
          <button onClick={() => dTwelve()}>Roll</button>
          <p>{d12}</p>
          <p>{dmD12}</p>
        </div>

        <div className="die">
          <h1 className="die_type">D20</h1>
          <button onClick={() => dTwenty()}>Roll</button>
          <p>{d20}</p>
          <p>{dmD20}</p>
        </div>
      </div>
    </div>
  )
}

export default App
