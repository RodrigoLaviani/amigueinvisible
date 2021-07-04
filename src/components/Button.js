const Button = ({ onClick, containerClass, buttonClass, title }) => {

    return (
        <div className={containerClass}>
            <button className={buttonClass} onClick={() => onClick}>{title}</button>
        </div>
    )
}

export default Button;