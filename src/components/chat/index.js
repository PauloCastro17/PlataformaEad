import './chat.css'
import {BsChevronDown, BsChevronRight} from 'react-icons/bs'
import {useEffect, useState} from 'react'
import api from '../../services/api'

function Chat(){

    const [professor, setProfessor] = useState()

    useEffect(() =>{
        api.get("professores").then(({ data }) => {
            setProfessor(data)
        })
    },[])

    return(
        <>
        <div className="container-chat">
            <div className="row-chat">
                <button data-bs-target="#ChatIndividual">
                    { professor?.map((professor) => (
                    <div className="chat-mensage">
                        <h2>{professor.NomeCompleto}</h2>
                        <BsChevronRight size={25}/>
                    </div>
                    ))}
                </button>


            </div>
        </div>
            </>
    );
}

export default Chat;