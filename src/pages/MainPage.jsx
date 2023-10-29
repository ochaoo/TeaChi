import Dragon from '../assets/image/MainPageDragon.png'
import Carousel from '../components/Carousel'
import Gallery from '../assets/image/Gallery.png'

import { itemsAdvantages, itemsPopularTea, itemsNewTea } from '../utils/db'
import Button from '../components/Button'

import { PRODUCTS_ROUTE } from '../utils/routes'

import {useNavigate} from 'react-router-dom'

const MainPage = () => {

  const navigate = useNavigate()

    return (
      <div>
        <div className="bg-no-repeat bg-center bg-contain h-[771px] max-w-[1850px] mx-auto bg-[url('./assets/image/MainPageTop.jpg')] 
          pt-[150px] box-border mb-16" >
          <p className="font-montserrat-alternates font-normal text-8xl ml-[17vw] mb-[32px]">
            Tea shop
          </p>
          <p className="font-montserrat-alternates font-light text-6xl ml-[17vw] leading-[73px] mb-[40px]">
            The legendary chinese <br />
            tea premium quality
          </p>
          <button className="font-montserrat text-white rounded shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          h-[79px] w-[226px] font-semibold ml-[17vw] bg-[#99A84F]"
          onClick={() => navigate(PRODUCTS_ROUTE)}>
            EXPLORE
          </button>
        </div>
        <h2 className="text-center font-montserrat-alternates font-medium text-2xl mb-7">Who are we?</h2>

        <div className="flex justify-center h-[200px] min-w-min mb-16">
          <img src={Dragon} alt="Dragon" className="w-[300px] -mt-4"/>
          <div className="max-w-[30vw] text-center font-montserrat-alternates font-normal text-lg mx-4 leading-[22px]">
            We are a family owned business, located just outside London. We specialize in single origin estate, fully traceable, exquisite teas and teaware. Our deeply rooted connections with soil, tea and people allow us to inspire tea lovers everywhere. We believe everyone deserves transparently traded, exceptional tea.We bring tea directly from the plantations, we personally know farmers from all over the world. We go to Ukrainian farmers for fragrant herbs and fruits.
          </div>
          <img src={Dragon} alt="Dragon" className="w-[300px] -scale-x-100 -mt-4"/>
        </div>

        <h2 className="text-center font-montserrat-alternates font-medium text-2xl mb-4">Advantages of TEACHI</h2>
        <div className="bg-gradient-right h-1 mb-4"></div>
          <Carousel tea={false} items={itemsAdvantages}/>
        <div className="bg-gradient-left h-1 mt-4 mb-16"></div>

        <h2 className="text-center font-montserrat-alternates font-medium text-2xl mb-8">Most Popular Tea</h2>
        <div className="bg-no-repeat bg-cover h-[440px] box-border bg-[url('./assets/image/PopularTea.png')]">
          <Carousel tea={true} items={itemsPopularTea}/>
        </div>
        
        <div className='flex justify-center mt-6 mb-16'>
          <Button children={'EXPLORE'} icon 
          onClick={() => navigate(PRODUCTS_ROUTE, {state: 'most-popular-tea'})} />
        </div>

        <h2 className="text-center font-montserrat-alternates font-medium text-2xl mb-8">New</h2>
        <div className="h-[440px] box-border bg-[url('./assets/image/New.png')] ">
          <Carousel tea={true} items={itemsNewTea}/>
        </div>

        <div className='flex justify-center mt-6 mb-16'>
          <Button children={'EXPLORE'} icon 
          onClick={() => navigate(PRODUCTS_ROUTE, {state: 'new-tea'})} />
        </div>

        <h2 className="text-center font-montserrat-alternates font-medium text-2xl mb-7">Our gallery</h2>
        <div className="bg-gradient-left h-1 w-2/4 mb-3 ml-auto" ></div>
        <div className="flex justify-center">
          <img src={Gallery} alt="Gallery" />
        </div>
  
      </div>  
    )
  }
  
  export default MainPage