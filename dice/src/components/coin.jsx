import { useState } from 'react'

function Coin() {
  const [coin, setCoin] = useState('')
  const [coinVal, setCoinVal] = useState('')

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

  return (
    <div className="D4">
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
    </div>
  )
}

export default Coin
