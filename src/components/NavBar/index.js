import './navbar.css'
import { useState, useEffect } from 'react';
import PersonCircle from '../../assets/icons/PersonCircle.svg';
import LogoBanner from '../../assets/images/BannerLogo.png'
import {BsChatFill, BsCaretDownFill} from 'react-icons/bs'
import Chat from '../chat';
import NavbarProfile from '../NavbarProfile';
import { useParams } from 'react-router-dom';
import api from '../../services/api'

function NavBar(){
    const {alunoId}  = useParams(); 
    const [chat, setChat] = useState(false);
    const [aluno, setAluno] = useState();
    const [navbarProfile, setNavbarProfile] = useState(false)

    useEffect(() =>{
        api.get("alunos?id="+alunoId).then(({ data }) => {
            setAluno(data)
        })
    },[])

    function openNavbarProfile(){
        if(navbarProfile == false){
            setNavbarProfile(true)
        }else{
            setNavbarProfile(false)
        }
    }

    function openChat(){
        if(chat == false){
            setChat(true)
        }else{
            setChat(false)
        }
    }

    return(
        <>
            <navbar>
                <div className="navbar">
                    <img className="LogoBanner" src={LogoBanner} alt="Banner Logo" />
                    { aluno?.map((aluno) => (
                        <div className="links" key={aluno.id}>
                            <button onClick={openChat}><BsChatFill className="chat" size="35"/></button>
                            <h3>{aluno.NomeCompleto}</h3>
                            <div className="button-perfil">
                                <img className="IconPersonCircle" src={PersonCircle} alt="IconPersonCircle"/>
                                <button onClick={openNavbarProfile}><BsCaretDownFill className="seta-para-baixo" size={25} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </navbar>

            { navbarProfile && (
                <NavbarProfile/>
            ) }

            { chat && (
                <Chat/>
            ) }
        </>
    );
}

export default NavBar;