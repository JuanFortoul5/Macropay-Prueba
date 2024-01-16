import React from 'react';
import demo from '../Components/demo.json'
import ProductCard from '../Components/ProductCard';
import './Home.css'
import Filter from '../Components/Filter';
import Slider from '../Components/Slider';

function Home(){
  
  return <section className='Home-container'>
      <Filter></Filter>
    <div className='slider-container'>
      <h2 className='subtitle'>Ofertas y Promociones</h2>
      <Slider></Slider>
    </div>
    <div className='best-sellers-container'>
      <h2 className='subtitle'>Nuestros Productos Más Vendidos</h2>
      <div className='item-container'>
      {demo.filter(demo => demo.popularidad === "top" ).map((demo)=>{
            return <ProductCard Product={demo} key={demo.modelo}></ProductCard>
          })}
      </div>
    </div>
    
  </section>   
}
export default Home;