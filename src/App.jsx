import './App.css'
import { nanoid } from 'nanoid'
import DiceGrid from './components/DiceGrid'
import Die from './components/Die'
import { useEffect, useState } from 'react'


 function getRandomDieValue() {
  return Math.floor(Math.random() * 6) + 1
}

function generateAllNewDice() {
  return Array.from({ length: 10 }, () => ({
    id: nanoid(),
    value: getRandomDieValue(),
    isHeld: false
  }))
}

export default function App() {
  
  const [dice, setDice] = useState(() => generateAllNewDice())


  function rollDice() {
    setDice(prev => 
      prev.map(d =>
        (d.isHeld ? d : { ...d, value: getRandomDieValue() })))
    console.log(dice)
  }

  function saveDie(id) {
    setDice(prev =>
      prev.map(d => 
        d.id === id ? {...d, isHeld: !d.isHeld} : d
      ))
      console.log(id)
  }
  

  return (
    <>
      <main className="tenzies-background">
        <article className="tenzies-background-canvas">
          <DiceGrid className='dice-grid'>
            {dice.map(die => (
              <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} saveDie={saveDie} />
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