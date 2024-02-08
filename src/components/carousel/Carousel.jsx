import React, { useState } from 'react'
import './style.css'
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Carousel1 from './images/Carousel1.jpg';
import Carousel2 from './images/Carousel2.jpg';
import Carousel3 from './images/Carousel3.jpg';

const Carousel = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    }

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === slides.length -1 ? 0 : prevIndex + 1));
    }

    const slides = [
        {
            content: <div className='text-center h-48 w-auto mx-auto bg-white rounded-lg bg-{} border border-blue-500' style={{backgroundImage: `url(${Carousel1})`, backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
                <button className='absolute bottom-4 left-[153px] transform translate-x-1/2 bg-blue-500 rounded-lg px-1 text-sm text-white cursor-pointer'>Buy Now</button>
            </div>
        },
        {
            content: <div className='text-center h-48 w-auto mx-auto bg-blue-400 rounded-lg'
            style={{backgroundImage: `url(${Carousel2})`, backgroundSize: 'cover',
            backgroundPosition: 'center',}}
            ><button className='absolute bottom-4 left-[153px] transform translate-x-1/2 bg-blue-500 rounded-lg px-1 text-sm text-white cursor-pointer'>Buy Now</button></div>
        },
        {
            content: <div className='relative h-48 w-auto mx-auto bg-blue-100 rounded-lg'
            style={{backgroundImage: `url(${Carousel3})`, backgroundSize: 'cover',
            backgroundPosition: 'center',}}
            ><button className='absolute bottom-1 left-[153px] transform translate-x-1/2 bg-blue-500 rounded-lg px-1 text-sm text-white cursor-pointer'>Buy Now</button></div>
        }
    ]

    const dotIndex = [];

    for(let i = 0; i < slides.length; i++) {
        dotIndex.push(i);
    }

    // console.log(dotIndex);

  return (
    <>
    <div className='relative'>
        <div className='overflow-hidden '>
            {slides.map((slide, index) => (
                <div key={index} className={index === slideIndex ? '' : 'hidden'}>
                    {slide.content}
                </div>
            ))}

            <div>
                <button className='absolute right-1 top-24 transform -translate-y-1/2' onClick={nextSlide}>
                <FaCircleChevronRight className='size-6 text-gray-400'/>
                </button>
                <button className=' absolute left-1 top-24 transform -translate-y-1/2' onClick={prevSlide}>
                <FaCircleChevronLeft  className='size-6 text-gray-400'/>
                </button>
            </div>
        </div>

        <div className='flex gap-2 justify-center mt-1 carousel-dot'>
            {dotIndex.map((dot) => (
                <div key={dot}
                className={`w-2 h-2 rounded-full bg-white ${dot === slideIndex ? 'bg-blue-500 scale-150' : ''}`}
                >
                </div>
            ))}
        </div>
        </div>
    </>
  )
}

export default Carousel