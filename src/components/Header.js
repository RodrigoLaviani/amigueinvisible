import '../shared/styles/header.css'

const Header = ({ className }) => {
    return (
        <div className={className}>
            <h1 className='headerTitle'>Amigue Invisible</h1>
            <h2 className='headerSubtitle'>Agregar nombre y mail de les participantes, incluyendote.</h2>
        </div>
    )
}

export default Header;