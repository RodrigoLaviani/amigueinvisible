const Input = ({ placeholder, containerClass, inputClass, onChange, type }) => {
    return (
        <div className={containerClass}>
            <input placeholder={placeholder} className={inputClass} onChange={e => onChange(e)} type={type} required />
        </div>
    )
}

export default Input;