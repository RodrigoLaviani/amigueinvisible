import Button from "./Button"
import Input from "./Input"
import '../assets/styles/form.css'

const Form = ({ className }) => {

    return (
        <div className={className}>
            <Input placeholder={'Nombre'} type='text' containerClass='inputContainer' inputClass='inputClass'></Input>
            <Input placeholder={'Mail'} type='mail' containerClass='inputContainer' inputClass='inputClass'></Input>
            <Button title={'Agregar'} containerClass='buttonContainer' buttonClass='buttonClass'></Button>
        </div>
    )
}

export default Form;