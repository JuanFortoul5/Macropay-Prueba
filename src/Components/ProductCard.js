import React, { useEffect, useState } from "react";
import './ProductCard.css';
import Modal from "./Modal";
import { Link } from "react-router-dom";

function ProductCard({Product}){
    const [isOpen, setIsOpen] = useState(false)
    const [favorite, setFavorite] = useState(false)
   function openModal(){
    setIsOpen(true)
   }
   function closeModal(){
    setIsOpen(false)
   }

    return <div className="productCard-container">
        <div className="productCard-img">
            <Link style={{width: "100%", height: "100%"}} to={`/product/${Product.url}`}>
                <img src={`${Product.imagen}`} alt={Product.nombre}></img>
            </Link>
            <div className={`favorite-icon ${favorite == true ? "active" : ""}`} onClick={() => setFavorite(true)}>
                <i className={`fa-${favorite == true ? 'solid' : 'regular'} fa-heart`}></i>
            </div>
        </div>
        <div className="productCard-description">
            <div className="column-one">
                <Link style={{textDecoration: "none"}} to={`/product/${Product.url}`}>
                    <h3 className="article-title">{Product.nombre}</h3>
                </Link>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <p className="payments">$120 p/semana <br/>o $520 p/mes</p>
            </div>
            <div className="column-two">
                <p className="price">${Product.precio}</p>
                <p className="price-old">${Product.oldPrice}</p>
                <button className="buy-button" onClick={openModal} >Lo Quiero!</button>
            </div>
        </div>
        {
            isOpen == true ? <div className="close-modal-container" onClick={closeModal}><Modal item={Product}></Modal></div> : ""
        }
    </div>
}
export default ProductCard;