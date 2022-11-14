import { useState } from 'react'

function D12() {
  const [d12, setD12] = useState('')
  const dTwelve = () => {
    let output = Math.floor(Math.random() * 13)
    if (output === 0) {
      dTwelve()
    } else {
      setD12(output)
    }
  }

  return (
    <div className="D4">
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
    </div>
  )
}

export default D12
