import './App.css'
import DiceGrid from './components/DiceGrid'
import Die from './components/Die'


 function getRandomDieValue() {
    return Math.floor(Math.random() * 6) + 1
}

export default function App() {

  const dice = Array.from({ length: 10 }, () => getRandomDieValue())

  return (
    <>
      <main className="tenzies-background">
        <article className="tenzies-background-canvas">

          <DiceGrid className='dice-grid'>
            {dice.map((value, i) => (
              <Die key={i} value={value} />
            ))}
          </DiceGrid>
          
        </article>
      </main>
    </>
  )
}