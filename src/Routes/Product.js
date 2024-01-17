import React, { useEffect, useState } from 'react';
import demo from '../Components/demo.json'
import './Product.css'
import { useParams } from 'react-router-dom';
import InformationLabel from '../Components/InformationLabel';

function Product(){
    const params = useParams();
    const [product, setProduct] = useState('')
    
    const gallery = [
        {
            image: product.imagen, id:1
        },
        {
            image: product.image2, id:2
        },
        {
            image: product.image3, id:3
        },
        {
            image: product.image4, id:4
        }
    ]
    const [focus, setFocus] = useState('')

    function catchProduct(params){
        const resultado = demo.find((product) => product.url == params.productName);
        
        setProduct(resultado)

        console.log(product)
        
    }

    useEffect(()=>{
       catchProduct(params) 
    },[params])



    console.log(product.fabricante)
  return <section className='Home-container'>
      <div className='topBar-container'>
        <button className='topBar-button'>Volver a resultados</button>
        <p className='topBar-url'>Celulares / {product.fabricante} / <strong>{product.nombre}</strong></p>
      </div>
        <div className='productDescription-container'>
            <div className='productDescription-gallery'>
                <div className='gallery-images-container'>
                    {
                        gallery.map((image)=>{
                            return <img className={`image-gallery ${focus == image.image ? 'active' : ''}`} src={image.image} key={`${image.id}_${image.id}`} onClick={() => {setFocus(image.image)}}/>
                        })
                    }
                </div>
                <div className='imageFocus-container'>
                    <img className='imageFocus-gallery' src={focus == '' ? product.imagen : focus}></img>
                </div>
            </div>
        <div className='productDescription'>
            <div className='product-description-container'>
                <div className='productDescription-column-one'>
                    <p className='productDescription-title'>{product.nombre + " " + product.camara + " " + product.almacenamiento + " " + product.memoria}</p>
                    <div className='stars-container'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>    
                </div>
                <div className='productDescription-column-two'>
                    <p className='productDescription-price'>${product.precio}</p>
                    <p className='productDescription-oldPrice'>${product.oldPrice}</p>
                    <div className='cards-container'>
                        <i className="fa-brands fa-cc-visa"></i>
                        <i className="fa-brands fa-cc-mastercard"></i>
                        <i className="fa-brands fa-cc-visa"></i>
                        <i className="fa-brands fa-cc-mastercard"></i>
                    </div>    
                </div>
            </div>
            <div className='section-text-description'>
                <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco....</p>
                <a className='more'>- Ver mas -</a>
            </div>
            <div className='securePay-container'>
                <div className='securePay-button'>
                    <div className='securePay-icon'>
                        <i className="fa-solid fa-shield"></i>
                    </div>
                    <div className='securePay-description'>
                        <p className='description-text bold'>Compra segura con Macropay Protect</p>
                        <p className='description-text small'>Devolucion gratis (30 Dias)/12 meses de garantia de fabrica</p>
                    </div>
                </div>
            </div>
            <div className='due-date'><p>La promoción vence en 24d 12h:43m</p></div>
            <div className='pay-container'>
                <div className='payBanner-container'>
                    <div className='payBaner-bg'>
                        <p>.....</p>
                    </div>
                    <div className='payBanner'>
                        <div className='payBanner-left'>
                            <p className='payBanner-circle'>HOY</p>
                        </div>
                        <div className='payBanner-right'>
                            <p className='payBanner-text-small'>DESDE</p>
                            <p className='payBanner-price'>$<strong className='price-long'>196</strong></p>
                            <p className='payBanner-text'>SEMANAL</p>
                        </div>
                    </div>
                </div>
                <div className='pay-steps-container'>
                    <div className='pay-steps first'>
                        <div className='steps-circle'>1</div>
                        <p className='description-text bold' >Aplica a tu crédito!</p>
                    </div>
                    <div className='pay-steps first'>
                        <div className='steps-rightArrow'>&#8250;</div>
                        
                        <div className='steps-downArrow'><i className="fa-solid fa-chevron-down"></i></div>

                        <div className='steps-circle'>2</div>
                        <p className='description-text bold'>Verifica tu compra</p>
                    </div>
                    <div className='pay-steps'>
                        <div className='steps-rightArrow'>&#8250;</div>
                        
                        <div className='steps-downArrow'><i className="fa-solid fa-chevron-down"></i></div>

                        <div className='steps-circle'>3</div>
                        <p className='description-text bold'>Disfruta tu celular</p>
                    </div>
                    <button className='pay-credit-button'>LO QUIERO A CRÉDITO <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>  
      </div>
      <div className='subtitle-container'>
        <h2 className='subtitle'>Información Detallada del Producto</h2>
      </div>
      <div className='product-detail-container'>
        <div className='product-images-container'>
            {gallery.map((image) => {
                return <img src={image.image} alt={product.nombre} className='product-detail-image'></img>
            })}
        </div>
        <div className='product-information-container'>
            <div className='product-top-menu'>
                <p className='activeButton'>Otras Especificaciones</p>
                <p>Reviews(3)</p>
            </div>
            <InformationLabel title='Fabricante' Product={product.fabricante} ></InformationLabel>
            <InformationLabel title='Peso del Producto' Product={product.peso} ></InformationLabel>
            <InformationLabel title='Dimensiones' Product={product.dimensiones} ></InformationLabel>
            <InformationLabel title='Pais de Origen' Product={product.pais} ></InformationLabel>
            <InformationLabel title='Numero de Modelo' Product={product.modelo} ></InformationLabel>
            <InformationLabel title='Color' Product={product.color} ></InformationLabel>
            <InformationLabel title='Material' Product={product.material} ></InformationLabel>
            <InformationLabel title='Cantidad de Piezas' Product={product.piezas} ></InformationLabel>
            <InformationLabel title='Caracteristicas Especiales' Product={product.caracteristicas} ></InformationLabel>
            <InformationLabel title='Componentes Incluidos' Product={product.incluye} ></InformationLabel>
        </div>
      </div>
    
  </section>   
}
export default Product;