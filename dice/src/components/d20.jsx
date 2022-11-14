import { useState } from 'react'

function D20() {
  const [d20, setD20] = useState('')

  const dTwenty = () => {
    let output = Math.floor(Math.random() * 21)
    if (output === 0) {
      dTwenty()
    } else {
      setD20(output)
    }
  }

  return (
    <div className="D4">
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
    </div>
  )
}

export default D20
