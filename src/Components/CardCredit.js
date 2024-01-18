import React, { useEffect, useState } from "react";
import './CardCredit.css'


function CardCredit(){

    return <div className='cardCredit-container'>
            <div className="smileFace cardCredit"></div>
            <p className="cardCredit-title">¿Te falta una lanita?</p>
            <div className="enganche">
                <p className="description-text cardCredit">ENGANCHE $520,00</p>
                <p className="description-text cardCredit">PAGO SEMANAL $125,00</p>
            </div>
            <div className="percentBar-container">
                <div className="percentBar-bg"></div>
                <div className="percentBar">
                    <i class="fa-solid fa-caret-left"></i>
                    <p>15%</p>
                    <i class="fa-solid fa-caret-right"></i>
                </div>
            </div>
            <p className="description-text cardCredit allWidth">Enganche</p>   
            <button className="applyNow">Aplicar Ahora</button>
            <p className="conditions-small">*Hasta $2,000 de manera fácil, rápida y confiable</p>
        </div>
}
export default CardCredit;