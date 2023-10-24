import React, { useState } from 'react'
import Left from '../assets/image/ArrowLeft.png'
import Right from '../assets/image/ArrowRight.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarouselSingle = ({image, miniature, photo}) => {

  const [leftDisabled, setLeftDisabled] = useState(true)
  const [rightDisabled, setRightDisabled] = useState(false)

  const items = [image, miniature, ...photo]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />,
  }


    return (
      <div className="w-[523px] box-border">
        <Slider {...settings}>
          {items.map((item) => 
            <img src={item} alt="Photo" className="w-[503px] h-[502px]"/>
          )}
        </Slider>
      </div>
    )
}

export default CarouselSingle


const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return(
    <button className="absolute top-[40%] left-3 z-10" onClick={onClick} >
      <img src={Left} alt="Left" />
    </button>
  )
}

const NextArrow = (props) => {
  const { className, style, onClick } = props

  return(
    <button className="absolute top-[40%] right-3 z-10" onClick={onClick} >
      <img src={Right} alt="Right" />
    </button>
  )
}