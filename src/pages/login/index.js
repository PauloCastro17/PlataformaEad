import './login.css'
import LogoEscola from '../../assets/images/LogoEscola.png'
import { useState } from 'react';
import api from '../../services/api'
import ModalError from '../../components/ModalError'

function PageLogin(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showModal, setShowModal] = useState(false);
    const [dadosAluno, setDadosAluno] = useState();



    function Entrar(){
        api.get("alunos").then(({ data }) => {
           setDadosAluno(data)
            
        });

       dadosAluno.map((aluno) => {
        if(email === aluno.email && password === aluno.senha) {
            window.location.href = "http://localhost:3000/Home/"+aluno.id;
        }
        else{
            setShowModal(true);
        }
       })
    }

    return(
    <>
        <div className="container">
            <div className="row">
                <img src={LogoEscola} alt="Logo Escola"/>
                <div className="input">
                    <input placeholder="Email..." 
                    type="email"
                    onChange={ (e) => setEmail(e.target.value) } 
                    value={email}/>
                </div>
                <div className="input">
                    <input placeholder="Senha..." 
                    type="password"
                    onChange={ (e) => setPassword(e.target.value) }
                    value={password}/>
                </div>
                <button onClick={Entrar} className="button-entrar">Entrar</button>
            </div>
        </div>
        { showModal && (
            <ModalError
            closeModal={ () => setShowModal(false) }
            />
            ) }
        </>
        
    );
}

export default PageLogin;