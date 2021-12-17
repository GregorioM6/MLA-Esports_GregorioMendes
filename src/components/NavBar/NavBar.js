import React from "react";
import './NavBar.css';
import logo from '../../assets/MLA_LOGO.png';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return(
        <AppBar position="static">
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="Logo ecommerce"/>
                </div>
                <ul>
                    <li>
                            <Link to="/">
                                <Button variant="outlined">Home</Button>
                            </Link>
                    </li>
                    <li>
                            <Link to="/equipos">
                                <Button variant="outlined">Equipos</Button>
                            </Link>
                    </li>
                    <li>
                            <Link to="/compras">
                                <Button variant="outlined">Compras</Button>
                            </Link>
                    </li>
                    <li>
                            <Link to="/contacto">
                                <Button variant="outlined">Contacto</Button>
                            </Link>
                    </li>
                    <li>
                            <Link to="/mpresa">
                                <Button variant="outlined">Empresa</Button>
                            </Link>
                    </li>
                    <li>
                            <Link to="/novedades">
                                <Button variant="outlined">Novedades</Button>
                            </Link>
                    </li>
                </ul>
                <CartWidget/> 
            </nav>
        </AppBar>
        
    )
}