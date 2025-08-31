import '../App.css'


export default function DiceGrid({className, children}) {
    
    return (
        <>
            <div className={className} role='group' aria-label='Dice'>{children}</div>
        </>
    )
}