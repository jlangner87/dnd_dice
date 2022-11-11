import { useState } from 'react'

function D4() {
  const [d4, setD4] = useState('')
  const dFour = () => {
    let output = Math.floor(Math.random() * 5)
    if (output === 0) {
      dFour()
    } else {
      setD4(output)
    }
  }

  return (
    <div className="D4">
<div className="die">
          <h1 className="die_type">D4</h1>
          <button
            className="triangle"
            onClick={() => {
              dFour()
            }}
          >
            {d4}
          </button>
          </div>
    </div>
  )
}

export default D4
