import { useState } from 'react'

function D100() {
  const [d100a, setd100a] = useState('')
  const dOneHundred = () => {
    let output = Math.floor(Math.random() * 101)
    if (output === 0) {
      dOneHundred()
    } else {
      setd100a(output)
    }
  }

  return (
    <div className="D4">
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
    </div>
  )
}

export default D100
