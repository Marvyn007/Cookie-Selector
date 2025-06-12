import './App.css'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const doubleStuffed = ()=>{
    if(count >= 10){
      setMultiplier(multiplier*2);
      setCount(count-10);
    }
  }

  const partyPack = () =>{
    if(count >= 100){
      setMultiplier(multiplier*5);
      setCount(count-100);
    }
  }

  const fullFeast = () =>{
    if(count>=1000){
      setMultiplier(multiplier*10);
      setCount(count-1000);
    }
  }

  return (
    <div className='app'>
      <h1>Cookie Selector</h1>
      <h4>Count: {count}</h4>
    
      <img className="samosa-image" src="https://static.vecteezy.com/system/resources/thumbnails/027/291/607/small_2x/cookie-isolated-on-transparent-background-free-png.png" onClick={updateCount}></img>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed</h3>
          <p>2x per click</p>
          <button onClick={doubleStuffed}>10 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Party Pack</h3>
          <p>5x per click</p>
          <button onClick={partyPack}>100 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Full Feast</h3>
          <p>10x per click</p>
          <button onClick={fullFeast}>1000 samosas</button>
        </div>

        <button className="upgrade" style={{fontSize: '20px',background: 'none',  fontWeight: 'bold'}} onClick={ ()=>
          {
            setMultiplier(1),
            setCount(0)
          }
        }>Reset</button>


      </div>

    </div>
  )
}
export default App
