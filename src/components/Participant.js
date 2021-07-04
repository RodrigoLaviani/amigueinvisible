import Button from "./Button"
import '../assets/styles/participant.css'

const Participant = ({ name, mail }) => {
    return (
        <div className='participantContainer'>
            <h4>{name}</h4>
            <h4>{mail}</h4>
            <Button title='X' />
        </div>
    )
}

export default Participant;