import './navigation.css'
import {useParams} from 'react-router-dom'
import { BsArrowDown, BsArrowRight } from 'react-icons/bs'

function Navigation(){


    const {alunoId} = useParams();

    function Notas(){
        window.location.href = "http://localhost:3000/Notas/"+alunoId
    }

    function Home(){
        window.location.href = "http://localhost:3000/Home/"+alunoId
    }

    function QuadroAvisos(){
        window.location.href = "http://localhost:3000/Quadro-de-Avisos/"+alunoId
    }

    function MinhasDisciplinas(){
        if(            document.getElementById("disciplinas").style.display == "block"){
            document.getElementById("disciplinas").style.display = "none";
        }else{
            document.getElementById("disciplinas").style.display = "block";
        }
    }
    return(
        <>
        <div className="container-navigation">
            <div className="row-navigation">
                <div className="buttons-navigation">
                    <button onClick={Home}>Página Inicial</button>
                    <button onClick={QuadroAvisos}>Quadro de Avisos</button>
                    <button onClick={Notas}>notas</button>
                    <button onClick={MinhasDisciplinas} className="MinhasDisciplinas">Minhas Disciplinas <BsArrowDown/></button>
                </div>
                <div id="disciplinas">
                    <button>Disciplina 1 <BsArrowRight/></button>
                    <button>Disciplina 2 <BsArrowRight/></button>
                </div>
            </div>
        </div>

        </>
    );
}

export default Navigation;