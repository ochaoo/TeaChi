import React, { useState } from 'react'
import Left from '../assets/image/ArrowLeft.png'
import Right from '../assets/image/ArrowRight.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarouselItem from './CarouselItem'
import CarouselItemTea from './CarouselItemTea'


const Carousel = ({tea, items}) => {

  const [leftDisabled, setLeftDisabled] = useState(true)
  const [rightDisabled, setRightDisabled] = useState(false)


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />,

    
  }


    return (
    (tea ? 
      <div className="h-[413px] ml-[15%] max-w-[70%] box-border pt-8">
       
        <Slider {...settings}>
          {items.map((item, index) => 
            <CarouselItemTea key={index} caption={item.caption} 
            text={item.text} image={item.image} miniature={item.miniature}/>
          )}
        </Slider>
      
      </div>
      
      :

      <div className="h-[263px] ml-[15%] max-w-[70%] box-border pt-2">

        <Slider {...settings}>
          {items.map((item, index) => 
            <CarouselItem key={index} caption={item.caption} text={item.text} image={item.image} />
          )}
        </Slider> 
       
      </div>

    ))
}
export default Carousel;


const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return(
    <button className="absolute top-[40%] -left-10 z-10" onClick={onClick} >
      <img src={Left} alt="Left" />
    </button>
  )
}

const NextArrow = (props) => {
  const { className, style, onClick } = props

  return(
    <button className="absolute top-[40%] -right-10 z-10" onClick={onClick} >
      <img src={Right} alt="Right" />
    </button>
  )
}