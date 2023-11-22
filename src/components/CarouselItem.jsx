const CarouselItem = ({image, caption, text}) => {


    return (
      <div className="font-montserrat flex flex-col items-center">
        <img src={image} alt="Image" />

        <div className="font-normal text-2xl max-w-[368px] text-center mt-[14px] mb-4">{caption}</div>  
      </div>
    );
}
  
export default CarouselItem;
  