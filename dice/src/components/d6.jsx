import { useState } from 'react'

function D6() {
  const [d6, setD6] = useState('')
  const dSix = () => {
    let output = Math.floor(Math.random() * 7)
    if (output === 0) {
      dSix()
    } else {
      setD6(output)
    }
  }
  return (
    <div className="D6">
      <div className="die">
          <h1 className="die_type">D6</h1>
          <button
            className="square"
            onClick={() => {
              dSix()
            }}
          >
            {d6}
          </button>
        </div>
    </div>
  )
}

export default D6
