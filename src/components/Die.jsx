import './Die.css'

export default function Die(props) {


    return (
        <>
            <button
                onClick={() => props.saveDie(props.id)}
                type="button"
                className= {props.isHeld ? 'button matched' : 'button'}
            > 
                {props.value}
            </button>
        </>
    )
}