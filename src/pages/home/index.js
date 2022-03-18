import NavBar from '../../components/NavBar'
import './home.css'
import PersonOne from '../../assets/images/PersonOne.png'
import PersonTwo from '../../assets/images/PersonTwo.png'
import PersonThree from '../../assets/images/PersonThree.png'
import Linha from '../../assets/icons/Linha.png';
import Book from '../../assets/images/Book.png';
import Quadro from '../../assets/images/Quadro.png';
import { useParams } from 'react-router-dom';
function Home(){

    const {alunoId}  = useParams();

    function Profile(){
        window.location.href = "http://localhost:3000/Profile/"+alunoId
    }

    function Notas(){
        window.location.href = "http://localhost:3000/Notas/"+alunoId
    }

    function UltimasAtividades(){
        window.location.href = "http://localhost:3000/Ultimas-Atividades/"+alunoId
    }

    function QuadroAvisos(){
        window.location.href = "http://localhost:3000/Quadro-de-Avisos/"+alunoId
    }

    return(
        <>
            <NavBar />
                <div className="container-home">
                    <div className="row-home">
                        <button onClick={Profile}>
                            <div className="button-home ButtonOne">
                                <h3>Perfil</h3>
                                    <div className="images">
                                        <img src={PersonOne}/>
                                        <img src={PersonTwo}/>
                                        <img src={PersonThree}/>
                                    </div>
                            </div>
                        </button>
                        <button onClick={Notas}>
                            <div className="button-home">
                                <h3>Notas</h3>
                                <div className="linhas">
                                    <img src={Linha} className="LinhaOne"/>
                                    <img src={Linha} className="LinhaTwo"/>
                                    <img src={Linha} className="LinhaTwo"/>
                                </div>
                            </div>
                        </button>
                        <button onClick={UltimasAtividades}>
                            <div className="button-home">
                                <h3>Últimas Atividades</h3>
                                <div className="images2">
                                    <img src={Book}/>
                                </div>
                            </div>
                        </button>
                        <button onClick={QuadroAvisos}>
                            <div className="button-home">
                                <h3>Quadro de Avisos</h3>
                                <div className="images2">
                                    <img src={Quadro}/>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
        </>
    );
}

export default Home;