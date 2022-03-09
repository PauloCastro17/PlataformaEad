import './login.css'
import LogoEscola from '../../assets/images/LogoEscola.png'
import { useState } from 'react';

function PageLogin(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    console.log(email);
    console.log(password);


    function Entrar(){
        if(email == "teste" && password == 123){
            window.location.href = "http://localhost:3000/Home"
        }
    }

    return(
        <div className="container">
            <div className="row">
                <img src={LogoEscola} alt="Logo Escola"/>
                <div className="input">
                    <input placeholder="Email..." 
                    onChange={ (e) => setEmail(e.target.value) } 
                    value={email}/>
                </div>
                <div className="input">
                    <input placeholder="Senha..." 
                    onChange={ (e) => setPassword(e.target.value) }
                    value={password}/>
                </div>
                <button onClick={Entrar} className="button-entrar">Entrar</button>
            </div>
        </div>
    );
}

export default PageLogin;