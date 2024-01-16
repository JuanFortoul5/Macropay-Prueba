import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoHeader from '../Resources/logos/Grupo 5.svg'
import Cart from '../Resources/material/Icon feather-user.svg'
import './Header.css'


function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    function openMenu(){
        setIsOpen(true)
    }
    
    function closeMenu(){
        setIsOpen(false)
    }

    return <div className="Header-container">
                <div className="upper-container">
                    <div className="Header-upper">
                        <div className="Header-logo">
                            <img src={LogoHeader} alt="Macropay"></img>
                        </div>
                        <div className="Header-buttons">
                            <button className="Header-button Active">Crea Tu Cuenta</button>
                            <button className="Header-button">Iniciar Sesion</button>
                            <a className="Header-cart"><img src={Cart} alt="cart"></img></a>
                        </div>
                        <div className="Header-promo">
                            <div className="Header-promo-circle"><h3 className="promo-text">Compra a <p className="promo-credit">Credito</p></h3></div>
                        </div>
                    </div>
                </div>
                <div className="lower-container">
                    <div className="burger-menu" onClick={openMenu}>
                        <i className="fa-solid fa-burger"></i>
                    </div>
                    <div className={`Header-lower ${isOpen == true ? "openMenu" : ""}`}>
                        <div className={`close-menu-container ${isOpen == true ? "openMenu" : ""}`}>
                            <button className="close-menu" onClick={closeMenu}><i className="fa-solid fa-x"></i></button>
                        </div>
                        <Link to="/" className={splitLocation[1] === "Home" ? "active" : ""}>Home</Link>
                        <Link to="/" className={splitLocation[1] === "" ? "active" : ""}>Celulares</Link>
                        <Link to="/" className={splitLocation[1] === "Motocicletas" ? "active" : ""}>Motocicletas</Link>
                        <Link to="/" className={splitLocation[1] === "Prestamos" ? "active" : ""}>Tus Prestamos</Link>
                        <Link to="/" className={splitLocation[1] === "Tiendas" ? "active" : ""}>Tiendas</Link>
                        <Link to="/" className={splitLocation[1] === "Tracking" ? "active" : ""}>Tracking</Link>
                        <Link to="/" className={splitLocation[1] === "Club" ? "active" : ""}>Club Macropay</Link>
                    </div>
                </div>
            </div>
}

export default Header;