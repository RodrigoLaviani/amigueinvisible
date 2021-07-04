import Button from "./Button"
import '../shared/styles/participant.css'

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