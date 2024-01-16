import React, { useEffect, useState } from 'react';
import demo from '../Components/demo.json'
import './Product.css'
import { useParams } from 'react-router-dom';

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
  return <section className='Product-container'>
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
                <p className='description-text'>Lorem ipsum</p>
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
                <div className='payBanner-container'></div>
                <div className='pay-steps-container'>
                    <div className='pay-steps first'>
                        <div className='steps-circle'>1</div>
                        <p className='description-text bold' >Aplica a tu crédito!</p>
                    </div>
                    <div className='pay-steps first'>
                        <div className='steps-circle'>2</div>
                        <p className='description-text bold'>Verifica tu compra</p>
                    </div>
                    <div className='pay-steps'>
                        <div className='steps-circle'>3</div>
                        <p className='description-text bold'>Disfruta tu celular</p>
                    </div>
                    <button className='pay-credit-button'>LO QUIERO A CRÉDITO <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>  
      </div>
    
  </section>   
}
export default Product;