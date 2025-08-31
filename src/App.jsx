import './App.css'
import DiceGrid from './components/DiceGrid'
import Die from './components/Die'
import { useEffect, useState } from 'react'


 function getRandomDieValue() {
  return Math.floor(Math.random() * 6) + 1
}

function generateAllNewDice() {
  return Array.from({ length: 10 }, () => getRandomDieValue())
}

export default function App() {
  
  const [die, setDie] = useState(() => generateAllNewDice())

  function rollDice() {
    setDie(generateAllNewDice)
    console.log(die)
  }
  

  return (
    <>
      <main className="tenzies-background">
        <article className="tenzies-background-canvas">
          <DiceGrid className='dice-grid'>
            {die.map((value, i) => (
              <Die key={i} value={value} />
            ))}
          </DiceGrid>
          <button type='button' onClick={rollDice} className='roll-btn'>
            Roll
          </button>
        </article>
      </main>
    </>
  )
}