import { useState } from 'react'

function D8() {
  const [d8, setD8] = useState('')

  const dEight = () => {
    let output = Math.floor(Math.random() * 9)
    if (output === 0) {
      dEight()
    } else {
      setD8(output)
    }
  }

  return (
    <div className="D4">
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
    </div>
  )
}

export default D8
