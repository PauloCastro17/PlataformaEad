import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import PageLogin from './pages/login'
function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin/>} />
                <Route path="/Home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;