

const CarouselItemTea = ({image, miniature, caption, text}) => {


    return (
      <div className="font-montserrat flex flex-col items-center relative">
        <img src={image} alt="BackgroundImage" />
        <img src={miniature} alt="OverlayImage" className="z-10 absolute top-[180px] left-[60px]"/>

        <div className="font-medium text-lg max-w-[288px] text-center mt-6 mb-4">{caption}</div>

        <div className="font-normal text-sm max-w-[288px] text-center">{text}</div>
       
      </div>
    );
}

export default CarouselItemTea;
  