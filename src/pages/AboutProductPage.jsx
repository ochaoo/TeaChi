import { useParams } from "react-router-dom"
import { BlackTea, FruitTea, GreenTea } from "../utils/db"

import Balls from '../assets/image/aboutProduct/balls.svg'
import Time from '../assets/image/aboutProduct/time.svg'
import Quantity from '../assets/image/aboutProduct/quanity.svg'
import Temperature from '../assets/image/aboutProduct/temperature.svg'
import CarouselSingle from "../components/CarouselSingle"

const allTeas = [...BlackTea, ...FruitTea, ...GreenTea]

const AboutProductPage = () => {

  const { id } = useParams()
  const tea = [...BlackTea,...FruitTea,...GreenTea].find((tea) => tea.id === +id)
    return (
      <div className="font-montserrat">
        <div className="bg-gradient-right h-1 mb-8"></div>

        <h2 className="text-center font-medium text-4xl mb-4">{tea.caption}</h2>
        <p className="text-center font-normal text-2xl mb-4">{tea.text}</p>
        <p className="mx-auto text-center font-normal text-lg mb-8 w-[522px]">{tea.descriptionList}</p>

        <div className="w-[75%] ml-auto bg-gradient-left h-1" />

        <div className="flex w-[60vw] mx-auto mt-[26px] relative mb-[66px]">
          <CarouselSingle image={tea.image} miniature={tea.miniature} photo={tea.photo || []}/>
          <div className="font-normal text-lg ml-[58px]">
            <p className="text-center font-medium text-2xl mb-4">Description</p>
            <span className="">{tea.description}</span>

            <p className="text-center font-medium text-2xl mb-4 mt-8">Tea ingredients</p>
            <span>{tea.ingredients}</span>

            <p className="text-center font-medium text-2xl mb-4 mt-8">Suggestion of preparation</p>
            <span>{tea.prepare}</span> <br />
            <span>{tea.suggestion}</span>
          </div>
          <img src={Balls} alt="Balls" className="absolute -right-[8vw] -top-7" />
        </div>




        <div className="w-full bg-gradient-left h-1 mb-8"></div>
        <div className="flex justify-center items-center space-x-80 font-medium text-lg">
          <div className="flex flex-col items-center">
            <img src={Time} alt="Time" />
            <p className="mt-4 mb-4 font-medium text-lg">Infusion time</p>
            <p className="font-normal text-base">{tea.infusionTime}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Quantity} alt="Quantity" />
            <p className="mt-4 mb-4 font-medium text-lg">Quantity</p>
            <p className="font-normal text-base">{tea.quantity}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Temperature} alt="Temperature" />
            <p className="mt-4 mb-4 font-medium text-lg">Temperature</p>
            <p className="font-normal text-base">{tea.temperature}</p>
          </div>
        </div>
        <div className="w-full bg-gradient-left h-1 mb-[7px] mt-8"></div>
         
      </div>  
    )
  }
  
  export default AboutProductPage