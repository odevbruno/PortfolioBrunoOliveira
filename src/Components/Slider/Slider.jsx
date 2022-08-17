import './slider.scss';
import { useEffect, useState } from 'react';
import { sliderData } from '../Slider/slider-data';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
 
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 6000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    } 

    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(()=>{
        setCurrentSlide(0)
    },[]);

    useEffect(()=> {
        if(autoScroll){
            auto();
        }
        return ()=> clearInterval(slideInterval);
    },[currentSlide])


    return (
        <div className='slider'>
            {sliderData.map((slide, index) => {
                return (
                    <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.img} alt="slide" />
                                <div className='content'>
                                    <h2>{slide.title}</h2>
                                    <h2>{slide.subtitle}</h2>
                                    <p>{slide.desc}</p>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    );
}