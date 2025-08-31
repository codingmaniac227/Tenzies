import './App.css'
import { nanoid } from 'nanoid'
import DiceGrid from './components/DiceGrid'
import Die from './components/Die'
import Instructions from './components/Instructions'
import { useEffect, useState, useRef } from 'react'


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
  const buttonRef = useRef(null)
  
  const hasWon = 
    dice.length > 0 &&
    dice.every(d => d.isHeld) &&
    dice.every(d => d.value === dice[0].value)


  useEffect(() => {
    if (hasWon) {
      buttonRef.current.focus()
    }
  }, [hasWon])

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
  
  function newGame() {
    setDice(generateAllNewDice())
  }


  return (
    <>
      { hasWon ? (
        <main className="tenzies-background-win">
        <article className="tenzies-background-canvas-win">
          <section className='tenzies-instructions-win'>
              <h1>YOU WON!</h1>
          </section>
          <button ref={buttonRef} type='button' onClick={newGame} className='new-game'>
              New Game
          </button>
        </article>
      </main>
      ) : (
      <main className="tenzies-background">
        <article className="tenzies-background-canvas">
          <Instructions className='tenzies-instructions' hasWon={hasWon} />
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
      )}
    </>
  )
}