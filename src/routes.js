import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageLogin from './pages/Login';
import PageProfile from './pages/Profile';
import PageUltimasAtividades from './pages/UltimasAtividades'
import PageNotas from './pages/Notas';
import PageQuadroAvisos from './pages/Avisos'
function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin/>} />
                <Route path="/Home">
                    <Route path=":alunoId" element={<Home />} />
                </Route>
                <Route path="/Profile">
                    <Route path=":alunoId" element={<PageProfile/>}/>
                </Route>
                <Route path="/Ultimas-Atividades">
                    <Route path=":alunoId" element={<PageUltimasAtividades/>}/>
                </Route>
                <Route path="/Notas">
                    <Route path=":alunoId" element={<PageNotas/>}/>
                </Route>
                <Route path="/Quadro-de-Avisos">
                    <Route path=":alunoId" element={<PageQuadroAvisos/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;