import React from "react";
import './Footer.css';
import Logo from '../Resources/logos/Grupo 5.svg'
import smileFace from '../Resources/material/Happy_face.svg'

function Footer(){
    return <footer className="footer-container">
        <div className="wave"></div>
        <div className="waveBack"></div>
        <div className="columns-container">
            <div className="footer-column-one">
                <div className="contact-info">
                    <p className="contact-text">OFERTAS Y PROMOCIONES</p>
                    <h3 className="footer-contact-title">No te pierdas <br/>nuestras ofertas!</h3>
                    <div className="footer-input-container">
                        <input type="email" placeholder="Tu direccion de correo electronico" />
                        <i className="fa-brands fa-telegram"></i>
                    </div>
                </div>
                <div className="footer-logo">
                    <div className="logo-privacy-policy">
                        <div className="footer-logo-bg">
                            <img src={Logo} alt="Macropay" />
                        </div>
                        <p className="privacy-policy">Todos los derechos reservados - © Macropay 2022</p>
                    </div>
                    <div className="FAQ-container">
                        <a className="FAQ">Envíos y devoluciones</a>
                        <a className="FAQ">Preguntas Frecuentes</a>
                    </div>
                    <div className="FAQ-container">
                        <a className="FAQ">Aviso de privacidad</a>
                        <a className="FAQ">Términos y condiciones</a>
                    </div>
                </div>
            </div>
            <div className="footer-column-two">
                <div className="smileFace"></div>
            </div>
            <div className="footer-column-three">
                <h3 className="footer-contact-title">Conversemos!</h3>
                <p className="footer-text">Loren ipsum dolor sit amet</p>
                <div className="socials">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-square-whatsapp"></i>
                </div>
            </div>
        </div>
    </footer>
}
export default Footer;