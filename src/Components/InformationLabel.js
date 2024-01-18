import React from "react";
import Demo from '../Components/demo.json';
import './InformationLabel.css';
import CardCredit from "./CardCredit";
import ProductCard from "./ProductCard";

function InformationLabel({Product, gallery}){

    return <div className='product-information'>
        
            <div className="product-images-container left">
                {gallery.map((image) => {
                    return <img src={image.image} alt={Product.nombre} className='productInformation-image'></img>
                })}
            </div>
            <div className="informationColumn right">
                <div className="informationRow upper">
                    <div className='product-top-menu'>
                        <p className='activeButton'>Otras Especificaciones</p>
                        <p>Reviews(3)</p>
                    </div>
                    <div className="informationDetail-container">
                        <div className="informationDetail left">                                 
                            <p className='description-text'>Fabricante</p>
                            <p className='description-text'>Peso del producto</p>
                            <p className='description-text'>Dimensiones</p>
                            <p className='description-text'>País de Origen</p>
                            <p className='description-text'>Número de modelo</p>
                            <p className='description-text'>Color</p>
                            <p className='description-text'>Material</p>
                            <p className='description-text'>Cantidad de piezas</p>
                            <p className='description-text'>Características especiales</p>
                            <p className='description-text'>Componentes incluidos</p>
                        </div>
                        <div className="informationDetail right">
                            <p className='description-text strong'>{Product.fabricante}</p>
                            <p className='description-text strong'>{Product.peso}</p>
                            <p className='description-text strong'>{Product.dimensiones}</p>
                            <p className='description-text strong'>{Product.pais}</p>
                            <p className='description-text strong'>{Product.modelo}</p>
                            <p className='description-text strong'>{Product.color}</p>
                            <p className='description-text strong'>{Product.material}</p>
                            <p className='description-text strong'>{Product.piezas}</p>
                            <p className='description-text strong'>{Product.caracteristicas}</p>
                            <p className='description-text strong'>{Product.incluye}</p>

                        </div>
                    </div>
                </div>
                <div className="informationRow lower">
                    <div className="column left">
                        <p className="title-italic">Lleva este celular a credito!</p>
                        <p className="subtitle-detail">Que necesitas?</p>
                        <div className="detail-list-requires">
                            <div className="list-requires"><i class="fa-solid fa-check"></i><p>Tu Cuenta de Facebook</p></div>
                            <div className="list-requires"><i class="fa-solid fa-check"></i><p>Tu INE Vigente</p></div>
                            <div className="list-requires"><i class="fa-solid fa-check"></i><p>Correo Electronico</p></div>
                        </div>
                    </div>
                    <div className="column right">
                            <CardCredit></CardCredit>
                    </div>
                </div>
            </div>
            



        </div>
}
export default InformationLabel;