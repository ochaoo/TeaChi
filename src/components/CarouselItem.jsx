

const CarouselItem = ({image, caption, text}) => {


    return (
      <div className="font-montserrat flex flex-col items-center">
        <img src={image} alt="Image" />

        <div className="font-medium text-lg max-w-[288px] text-center mt-[14px] mb-4">{caption}</div>

        <div className="font-normal text-sm max-w-[288px] text-center">{text}</div>
       
      </div>
    );
}
  
export default CarouselItem;
  