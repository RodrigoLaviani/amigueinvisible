import { Header, Form, ParticipantsList, Footer } from './components/index';
import './shared/styles/app.css'

const App = () => {
    return (
        <div className='app'>
            <Header className='headerContainer' />
            <Form className='formContainer' />
            <ParticipantsList className='participansContainer' />
            <Footer className="footerContainer" />
        </div>
    )
}

export default App;