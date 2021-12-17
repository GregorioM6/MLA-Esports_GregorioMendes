import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/product' element={<ItemDetailContainer/>} />
                </Routes>
        </BrowserRouter>
            )
}