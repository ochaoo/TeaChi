const CarouselItemTea = ({image, miniature, caption, text}) => {

  return (
    <div className="font-montserrat flex flex-col items-center relative">
      <img src={image} alt="BackgroundImage" className="w-[273px] h-[273px] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.75)]"/>

      <img src={miniature} alt="OverlayImage" className="w-[113px] h-[113px] 
      z-10 absolute top-[180px] left-[60px] rounded-[5px] shadow-[0_4px_4px_rgba(0,0,0,0.75)]"/>

      <div className="font-medium text-lg max-w-[288px] text-center mt-6 mb-4">{caption}</div>

      <div className="font-normal text-sm max-w-[288px] text-center">{text}</div>
      
    </div>
  );
}

export default CarouselItemTea;
  