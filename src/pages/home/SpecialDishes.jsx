import React, { useEffect, useInsertionEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../../components/Card';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const SimpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}

        >
            Next</div>
    )
}

const SimplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            BACK
        </div>
    );
};

const SpecialDishes = () => {
    const [recipes, setRecipes] = useState([]);
    const slider = React.useRef(null)

    useEffect(() => {
        fetch("/menu.json").then(res => res.json()).then(data => {
            const specials = data.filter((item => item.category === "popular"))
            // console.log(specials);
            setRecipes(specials)
        })
    }, [])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SimpleNextArrow></SimpleNextArrow>,
        prevArrow: <SimplePrevArrow></SimplePrevArrow>

    };
    return (
        <div className='section-container my-20 relative'>
            <div className='text-left xl:w-1/2'>
                <p className='subtitle'>
                    Special Dishes
                </p>
                <h2 className='title'>
                    Standout Dishes From Our Menu
                </h2>
            </div>


            {/* Arrow button */}
            <div className='md:absolute right-3 top-8 mb-10 md:mr-24'>
                <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>
                    <FaAngleLeft className='w-8 h-8 p-1' />
                </button>
                <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-green text-white '>
                    <FaAngleRight className='w-8 h-8 p-1' />
                </button>
            </div>

            <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5'>
                {
                    recipes.map((item, i) => (
                        <Card key={i} item={item}></Card>
                    ))
                }
            </Slider>  

        </div>
    )
}

export default SpecialDishes