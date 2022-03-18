import './modal-error.css'
import {VscError} from 'react-icons/vsc'

function ModalError({closeModal}){
    return(
        <div className="container-ModalError">
        <div className="row-ModalError">
            <VscError size={150} color="rgb(255,0,0)"/>
                <h2>Email ou senha incorretos</h2>
            <button onClick={closeModal}>Tentar Novamente</button>
        </div>
        </div>
    );
}

export default ModalError;