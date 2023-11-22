import Dragon from '../assets/image/MainPageDragon.png'
import Carousel from '../components/Carousel'
import Gallery from '../assets/image/Gallery.png'
import Vision from '../assets/image/Vision.png'

import { itemsAdvantages, itemsPopularTea, itemsNewTea } from '../utils/db'
import Button from '../components/Button'

import { PRODUCTS_ROUTE } from '../utils/routes'

import {useNavigate} from 'react-router-dom'

const MainPage = () => {

  const navigate = useNavigate()

    return (
      <div className="font-montserrat-alternates">
        <div className="bg-no-repeat bg-center bg-contain h-[771px] max-w-[1850px] mx-auto bg-[url('./assets/image/MainPageTop.jpg')] 
          pt-[150px] box-border mb-[75px] relative" >
          <div className="absolute ml-[360px]">
            <p className="font-normal text-8xl mb-[32px]">
              Tea shop
            </p>
            <p className="font-light text-6xl leading-[73px] mb-[40px]">
              The legendary chinese <br />
              tea premium quality
            </p>
            <button className="font-montserrat text-white rounded shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            h-[79px] w-[226px] font-semibold bg-[#99A84F]"
            onClick={() => navigate(PRODUCTS_ROUTE)}>
              EXPLORE
            </button>
          </div>
        </div>
        <h2 className="text-center font-medium text-us mb-8">Who are we?</h2>

        <div className="flex justify-center h-[200px] min-w-min mb-[75px]">
          <img src={Dragon} alt="Dragon" className="w-[300px] -mt-4"/>
          <div className="max-w-[50vw] text-center font-normal text-2xl mx-10 leading-[29px]">
            We are a family owned business, located just outside London. We specialize in single origin estate, fully traceable, exquisite teas and teaware. Our deeply rooted connections with soil, tea and people allow us to inspire tea lovers everywhere. We believe everyone deserves transparently traded, exceptional tea.We bring tea directly from the plantations, we personally know farmers from all over the world. We go to Ukrainian farmers for fragrant herbs and fruits.
          </div>
          <img src={Dragon} alt="Dragon" className="w-[300px] -scale-x-100 -mt-4"/>
        </div>

        <h2 className="text-center font-medium text-us mb-[34px]">Advantages of TEACHI</h2>
        <div className="bg-gradient-right h-1 mb-4"></div>
          <Carousel tea={false} items={itemsAdvantages}/>
        <div className="bg-gradient-left h-1 mt-2 mb-16"></div>

        <div className="mt-[77px] w-[1200px] h-[405px] mx-auto flex justify-between">
          <img src={Vision} alt="Vision" width={565} height={405} className="-mt-4"/>
          <div className="mt-[-16px]">
            <h2 className="text-center font-medium text-us mb-8">Our vision</h2>
            <p className="w-[538px] font-montserrat-alternates font-normal text-2xl leading-[29px]">
              Sourcing teas directly from the growers,an approach unheard of in the tea world.To truly grasp the essence of tea, believes that you need to go straight to the source. 
              <br /> <br />
              This means venturing into tea-producing regions, visiting tea gardens and farms, and exploring uncharted territories. When it comes to discovering teas, it's all about creating a whole new industry and redefining the norms.
            </p>
          </div>
        </div>

        <h2 className="text-center font-medium text-us mb-8 mt-[63px]">Most Popular Tea</h2>
        <div className="bg-no-repeat bg-cover h-[440px] box-border bg-[url('./assets/image/New.png')]">
          <Carousel tea={true} items={itemsPopularTea}/>
        </div>
        
        <div className='flex justify-center mt-6 mb-16'>
          <Button children={'EXPLORE'} icon 
          onClick={() => navigate(PRODUCTS_ROUTE, {state: 'most-popular-tea'})} />
        </div>

        <h2 className="text-center font-medium text-us mb-8">New</h2>
        <div className="h-[440px] box-border bg-[url('./assets/image/New.png')] ">
          <Carousel tea={true} items={itemsNewTea}/>
        </div>

        <div className='flex justify-center mt-6 mb-16'>
          <Button children={'EXPLORE'} icon 
          onClick={() => navigate(PRODUCTS_ROUTE, {state: 'new-tea'})} />
        </div>

        <h2 className="text-center font-medium text-us mb-7">Our gallery</h2>
        <div className="bg-gradient-left h-1 w-2/4 mb-3 ml-auto" ></div>
        <div className="flex justify-center">
          <img src={Gallery} alt="Gallery" />
        </div>
  
      </div>  
    )
  }
  
  export default MainPage