import './NavbarProfile.css'
import { useParams } from 'react-router-dom';
import { BsPersonCircle, BsChatFill, BsDoorClosed } from 'react-icons/bs'

function NavbarProfile(){
    const {alunoId} = useParams();

    function profile(){
        window.location.href = "http://localhost:3000/Profile/"+alunoId
    }

    function exit(){
        window.location.href = "http://localhost:3000/"
    }

    function mensage(){
        window.location.href = "http://localhost:3000/chat/"+alunoId
    }
    return(
        <div className="container-NavbarProfile">
            <div className="row-NavbarProfile">
                <div className="NavbarProfile">
                    <button onClick={profile}>
                        <BsPersonCircle size={25}/>
                        <h2>Perfil</h2>
                    </button>
                </div>
                <hr></hr>
                <div className="NavbarProfile">
                    <button>
                        <BsChatFill size={25}/>
                        <h2>Mensagens</h2>
                    </button>
                </div>
                <hr></hr>
                <div className="NavbarProfile">
                    <button onClick={exit}>
                        <BsDoorClosed size={25}/>
                        <h2>Sair</h2>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavbarProfile;