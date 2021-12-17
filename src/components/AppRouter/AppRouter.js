import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HomePage from '../../Pages/HomePage/HomePage';
import ComprasPage from '../../Pages/ComprasPage/ComprasPage';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import EquiposPage from '../../Pages/EquiposPage/EquiposPage';
import ContactoPage from '../../Pages/ContactoPage/ContactoPage';
import EmpresaPage from '../../Pages/EmpresaPage/EmpresaPage';
import NovedadesPage from '../../Pages/NovedadesPage/NovedadesPage';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                <Route path='/compras' element={<ComprasPage/>} />
                <Route path='/equipo' element={<EquiposPage/>} />
                <Route path='/contacto' element={<ContactoPage/>} />
                <Route path='/empresa' element={<EmpresaPage/>} />
                <Route path='/novedades' element={<NovedadesPage/>} />
                <Route path='/' element={<HomePage/>} />
                <Route path='*' element={<NotFoundPage/>} />
                </Routes>
        </BrowserRouter>
            )
}