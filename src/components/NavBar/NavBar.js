import React from "react";
import './NavBar.css';
import logo from '../../assets/MLA_LOGO.png';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
    return(
        <AppBar position="static">
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="Logo ecommerce"/>
                </div>
                <ul>
                    <li><Button variant="outlined">Home</Button></li>
                    <li><Button variant="outlined">Equipos</Button></li>
                    <li><Button variant="outlined">Compras</Button></li>
                    <li><Button variant="outlined">Contacto</Button></li>
                    <li><Button variant="outlined">Empresa</Button></li>
                    <li><Button variant="outlined">Novedades</Button></li>
                </ul>
                <CartWidget/> 
            </nav>
        </AppBar>
        
    )
}