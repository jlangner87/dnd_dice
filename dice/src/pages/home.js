import logo from '../assets/d20.png'
import D4 from '../components/d4'
import D6 from '../components/d6'
import D8 from '../components/d8'
import D10 from '../components/d10'
import D12 from '../components/d12'
import D20 from '../components/d20'
import D100 from '../components/d100'
import Coin from '../components/coin'

function Home() {
  return (
    <div className="App">
      <div className="heading">
        <h1>DICE ROLLER</h1>
        <img className="logo" src={logo} />
      </div>
      <div className="table">
        <Coin />
        <D4 />
        <D6 />
        <D8 />
        <D10 />
        <D12 />
        <D20 />
        <D100 />
      </div>
    </div>
  )
}

export default Home
