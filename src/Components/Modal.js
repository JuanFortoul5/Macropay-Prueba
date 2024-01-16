import React, { useState } from "react";
import phoneImg from '../Resources/Demo/samsung/galaxy-s21.png'
import './Modal.css';

function Modal(item){

        return <article className='modal is-open'>
            <div className="modal-container">
                <div className="modal-image"></div>
                <div className="modal-description">
                    <img src={`${item.item.imagen}`} className="description-img"/>
                    <div className="modal-description-container">
                        <h3 className="article-title normal">{item.item.nombre + " " + item.item.camara + " " + item.item.almacenamiento + " " + item.item.memoria}</h3>
                        <p className="payments light">Color Seleccionado: <strong className="strong">{item.item.color}</strong></p>
                    </div>
                    <p className="modal-price absolute">{item.item.precio} x 1</p>
                </div>
                <div className="subtotal-container">
                    <div className="cart-item-container">
                        <p className="payments light">1 item en su carrito</p>
                    </div>
                    <div className="modal-description subtotal">
                        <p className="payments light">Subtotal</p>
                        <p className="modal-price margin">{item.item.precio}</p>
                    </div>
                </div>
                <div className="payment-container">
                    <div className="check-button">
                        <div className="check-circle">
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                    <div className="modal-tex-container">
                        <p className="modal-text"> Te vas a llevar este celular por solo </p>
                        <p className="modal-text strong">$120 p/semana!</p>
                    </div>
                    <button className="creditBuy-button">COMPRAR A CREDITO</button>
                    <div className="modal-hr-container">
                        <hr className="modal-hr"/>
                        <p className="modal-text-small">o puedes</p>
                        <hr className="modal-hr"/>
                    </div>
                    <p className="cashBuy">Comprar a contado</p>
                </div>
                
            </div>
        </article>
}

export default Modal;