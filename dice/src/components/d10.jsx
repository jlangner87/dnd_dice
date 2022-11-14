import { useState } from 'react'

function D10() {
  const [d10, setD10] = useState('')
  const dTen = () => {
    let output = Math.floor(Math.random() * 10)
    setD10(output)
  }



  return (
    <div className="D4">
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
    </div>
  )
}

export default D10
