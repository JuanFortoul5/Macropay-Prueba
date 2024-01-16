import react, { useEffect, useRef, useState } from "react";
import './Slider.css';

function Slider(){
    const [images, setImages] = useState([
        {
            id: 1, imgUrl: "https://img.freepik.com/vector-gratis/plantilla-promocion-redes-sociales-rebajas-viernes-negro_23-2150894939.jpg?w=1060&t=st=1705110750~exp=1705111350~hmac=8175652a861bf5dfc689440474a72c8376b3e6d7e486699584695c173b9080a8",
        },
        {
            id: 2, imgUrl: "https://img.freepik.com/vector-gratis/plantilla-promocion-redes-sociales-rebajas-viernes-negro_23-2150894939.jpg?w=1060&t=st=1705110750~exp=1705111350~hmac=8175652a861bf5dfc689440474a72c8376b3e6d7e486699584695c173b9080a8",
        },
        {
            id: 3, imgUrl: "https://img.freepik.com/vector-gratis/plantilla-promocion-redes-sociales-rebajas-viernes-negro_23-2150894939.jpg?w=1060&t=st=1705110750~exp=1705111350~hmac=8175652a861bf5dfc689440474a72c8376b3e6d7e486699584695c173b9080a8",
        },
    ]);
    const divRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToImage = (direction) => {
        if(direction === 'prev'){
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? images.length -1 : curr - 1
            })
        } else {
            const isLastSlide = currentIndex === images.length - 1;
            if(!isLastSlide){
                setCurrentIndex(curr => curr + 1);
            }else{
                setCurrentIndex(0)
            }
        }
    }
    
    useEffect(() => {
        const divNode = divRef.current;
        const divImage = divNode.querySelectorAll('#slide')[currentIndex];

        /*if(divImage){
            divImage.scrollIntoView({
                behavior: 'smooth'
            });
        }*/
        
    },[currentIndex])

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return <div className="container">
        <div className="contain-slides-arrows">
            <div className="leftarrow" onClick={() => scrollToImage('prev')}><i className="fa-solid fa-arrow-left"></i></div>
            <div className="rightarrow" onClick={() => scrollToImage('next')}><i className="fa-solid fa-arrow-right"></i></div>
            <div className="slides-container" ref={divRef}> 
                {
                    images.map((image)=>{
                        return <div className="slide" id="slide" key={`${image.id}`} style={{ backgroundImage: `url(${image.imgUrl})` }}></div>
                    })
                }
            </div>
        </div>
        <div className="dots-container">
            {
                images.map((_, index)=>{
                    return <i key={index} className={`${index === currentIndex ? "fas" : "far"} fa-dot-circle`} onClick={() => goToSlide(index)}></i>
                })
            }
        </div>
        
    </div>
};


export default Slider;