import Button from "./Button"

const Modal = ({ question, onSuccess, onDefeat }) => {
    return (
        <div>
            <div>
                <h3>{question}</h3>
            </div>
            <div>
                <Button onClick={onSuccess} title={'Si'} />
                <Button onClick={onDefeat} title={'No'} />
            </div>
        </div>
    )
}

export default Modal;