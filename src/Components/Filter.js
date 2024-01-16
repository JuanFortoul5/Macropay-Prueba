import React, { useEffect, useState } from "react"
import Brands from '../Components/Brands.json'
import demo from '../Components/demo.json'
import ProductCard from '../Components/ProductCard';
import './Filter.css'
import { Checkbox } from "./Checkbox";

function Filter(){
    const [checkboxState, setCheckboxState] = useState([]);
    const [filteredItems, setFilteredItems] = useState(demo);
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [stars, setStars] = useState(0)

    const handleCheckboxChange = (id, checked) => {
        
        if (checkboxState.includes(id)) {
            let categories = checkboxState.filter((el) => el !== id);
            setCheckboxState(categories)
        }else{
            setCheckboxState([...checkboxState, id]);
        }
        
      };
      useEffect(() => {
        filterDemo();
      }, [checkboxState, minPrice, maxPrice, stars]);
    
      const filterDemo = () => {
        if (checkboxState.length > 0) {
          let tempItems = checkboxState.map((category) => {
            let temp = demo.filter((demo) => demo.fabricante === category);
            return temp;
          });
          setFilteredItems(tempItems.flat());
        } else {
          setFilteredItems([...demo]);
        }
        if (minPrice >= 1 && maxPrice >= 1 ) {
            let tempItems = demo.filter((demo) => demo.precio >= minPrice && maxPrice >= demo.precio).map((items) => {
                return items;
              });
              setFilteredItems(tempItems.flat());
        } else if (minPrice >= 1 ) {
            let tempItems = demo.filter((demo) => minPrice <= demo.precio ? demo : demo.precio >= minPrice).map((items) => {
                return items;
              });
              setFilteredItems(tempItems.flat());
        } else if (maxPrice >= 1 ) {
            let tempItems = demo.filter((demo) =>  maxPrice == '' ? demo : demo.precio <= maxPrice).map((items) => {
                return items;
              });
              setFilteredItems(tempItems.flat());
        }
        if (stars > 0) {
            let tempItems = demo.filter((demo) => demo.stars == stars).map((items)=>{
                return items
            })
            setFilteredItems(tempItems.flat());
          }
      };
      

    return <div className='filter-container'>
        <div className='filter-sidebar'>
            <div className='categories-container'>
                <div className="orderBy">
                    <p className="orderBy-Title">Ordenar Por</p>
                </div>
                <div className="categories">
                    <select className="categories-select">
                        <option key="1" value="">Mejores Reviews</option>
                    </select>
                </div>
            </div>
            <div className='filter'>
            <div className='filter-section brand'>
                <label className='section-name'>Marcas</label>
                <div className='brand-container'>
                {
                    Brands.map(brand => {
                        return <div key={brand.id} className='single-brand'>
                                <Checkbox id={`${brand.name}`} name={brand.name} onChange={handleCheckboxChange}></Checkbox>
                                <label htmlFor={brand.name}>{brand.name}</label>
                            </div>
                    })
                }
                
                </div>
            </div>
            <div className='filter-section'>
                <label className='section-name'>Precio</label>
                <div className='price-container'>
                <input className='input-price' type='number' placeholder='1' onChange={(e) => {setMinPrice(e.target.value)}} ></input>
                -
                <input className='input-price' type='number' placeholder='5,000' onChange={(e) => {setMaxPrice(e.target.value)}}></input>
                </div>
            </div>
            <div className='filter-section'>
                <label className='section-name'>Reviews</label>
                <div className='reviews-container'>
                <div onClick={() => setStars(0)} ><i className="fa-solid fa-0"></i></div>
                <div onClick={() => setStars(1)} ><i className="fa-solid fa-star"></i></div>
                <div onClick={() => setStars(2)} ><i className="fa-solid fa-star"></i></div>
                <div onClick={() => setStars(3)} ><i className="fa-solid fa-star"></i></div>
                <div onClick={() => setStars(4)} ><i className="fa-solid fa-star"></i></div>
                <div onClick={() => setStars(5)} ><i className="fa-regular fa-star"></i></div>
                </div>
            </div>
            <div className='filter-section'>
                <label className='section-name'>Memoria</label>
            </div>
            <div className='filter-section'>
                <label className='section-name'>Rango</label>
            </div>
            <div className='filter-section'>
                <label className='section-name'>Camara</label>
            </div>
            </div>
        </div>
        <div className='filter-search'>
        <div className='search-bar'>
          <select className='search-select'>
            <option key="1">Todas las Categorias</option>
          </select>
          <input type='text' placeholder='Encuentra el producto que necesitas' className='search-input' onChange={(e) => {setSearch(e.target.value)}}></input>
          <button type='submit' className='search-icon'><i className="fas fa-search"></i></button>
        </div>
        <div className='filter-results'>
          {filteredItems.filter((demo)=>{
            return search.toLowerCase() === '' ? demo : demo.nombre.toLowerCase().includes(search) 
          }).map((demo)=>{
            return <ProductCard Product={demo} key={demo.modelo}></ProductCard>
          })}
        </div>
      </div>
    </div>
}

export default Filter;