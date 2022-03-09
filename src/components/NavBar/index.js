import './navbar.css'
import PersonCircle from '../../assets/icons/PersonCircle.svg';
import LogoBanner from '../../assets/images/BannerLogo.png'
import {BsChatFill, BsCaretDown} from 'react-icons/bs'
function NavBar(){
    return(
        <>
            <navbar>
                <div className="navbar">
                    <img className="LogoBanner" src={LogoBanner} alt="Banner Logo" />
                    <div className="links">
                        <button><BsChatFill className="chat" color="#E5E5E5" size="35"/></button>
                        <h4>Nome Completo</h4>
                        <img className="IconPersonCircle" src={PersonCircle} alt="IconPersonCircle"/>
                        <button><BsCaretDown size="35"/></button>
                    </div>
                </div>
            </navbar>
        </>
    );
}

export default NavBar;