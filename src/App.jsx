import './App.css'
import DiceGrid from './components/DiceGrid'
import Die from './components/Die'


export default function App() {
  return (
    <>
      <main className="tenzies-background">
        <article className="tenzies-background-canvas">
          
          <DiceGrid className='dice-grid'>
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
          </DiceGrid>
        </article>
      </main>
    </>
  )
}