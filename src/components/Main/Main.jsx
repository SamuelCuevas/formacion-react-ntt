import Button from '../Button/Button';
import './Main.css';

const Main = ({ title }) => {
    return (
        <div className='main'>
            <h1>{title}</h1>
            <Button variante='cancelar' text='Cancelar' />
            <Button variante='confirmar' text='Confirmar' />
            <Button variante='confirmar' text='Aceptar' />
        </div>
    )
}

export default Main