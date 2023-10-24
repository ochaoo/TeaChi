import { useState } from 'react'
import Dragon from '../assets/image/about/dragon.svg'
import { photoForAbout } from '../utils/db'

const AboutUsPage = () => {

    const [currentYear, setCurrentYear] = useState(1986)

    return (
      <>
        <div className="bg-gradient-right h-1 mb-[70px]"></div>
        <h2 className="text-center font-montserrat-alternates font-medium text-4xl mb-[14px]">About us</h2>

        <p className="text-center font-montserrat font-normal text-2xl mb-[72px]">
          Our tea house continue to grows in order to allow everyone to discover tea.
        </p>
        
        <div className="relative w-[76%] mx-auto mb-14 flex justify-center">
          <div className="flex space-x-20 justify-center">
            <div className="flex flex-col items-center">
              <img onClick={() => setCurrentYear(1986)} src={Dragon} width={50} height={50} alt="icon" className="mb-[18px] hover:cursor-pointer"/>
              <span className="font-montserrat font-medium text-2xl">1986</span>
            </div>
            <div className="flex flex-col items-center">
              <img onClick={() => setCurrentYear(1998)} src={Dragon} width={50} height={50} alt="icon" className="mb-[18px] hover:cursor-pointer"/>
              <span className="font-montserrat font-medium text-2xl">1998</span>
            </div>
            <div className="flex flex-col items-center">
              <img onClick={() => setCurrentYear(1999)} src={Dragon} width={50} height={50} alt="icon" className="mb-[18px] hover:cursor-pointer"/>
              <span className="font-montserrat font-medium text-2xl">1999</span>
            </div>
            <div className="flex flex-col items-center">
              <img onClick={() => setCurrentYear(2007)} src={Dragon} width={50} height={50} alt="icon" className="mb-[18px] hover:cursor-pointer"/>
              <span className="font-montserrat font-medium text-2xl">2007</span>
            </div>
            <div className="flex flex-col items-center">
              <img onClick={() => setCurrentYear(2010)} src={Dragon} width={50} height={50} alt="icon" className="mb-[18px] hover:cursor-pointer"/>
              <span className="font-montserrat font-medium text-2xl">2010</span>
            </div>
            <div className="flex flex-col items-center">
              <img onClick={() => setCurrentYear(2016)} src={Dragon} width={50} height={50} alt="icon" className="mb-[18px] hover:cursor-pointer"/>
              <span className="font-montserrat font-medium text-2xl">2016</span>
            </div>
            <div className="flex flex-col items-center">
              <img onClick={() => setCurrentYear(2020)} src={Dragon} width={50} height={50} alt="icon" className="mb-[18px] hover:cursor-pointer"/>
              <span className="font-montserrat font-medium text-2xl">2020</span>
            </div>
            <div className="flex flex-col items-center">
              <img onClick={() => setCurrentYear(2022)} src={Dragon} width={50} height={50} alt="icon" className="mb-[18px] hover:cursor-pointer"/>
              <span className="font-montserrat font-medium text-2xl">2022</span>
            </div>
          </div>

          <div className="absolute top-[21%] -z-10 w-full min-w-[1446px] h-1 bg-gradient-center"></div>
        </div>



        <div className="relative ">
          <div className="absolute w-full top-[13%] -z-10 bg-gradient-left h-1"></div>
          <div className="absolute w-full top-[26%] -z-10 bg-gradient-right h-1"></div>

          {photoForAbout.filter(item => item.year === currentYear).map((item, index) => 
            <div key={index} className="flex w-[58%] mx-auto justify-center">
              <img src={item.image} alt="photo" className="w-[396px] h-[441px] mr-[200px]"/>
              <div className="text-center">
                <p className="font-montserrat font-medium text-2xl mb-8 mt-[16%]">
                  {item.year}
                </p>
                <p className="w-[436px] font-montserrat font-normal text-lg">
                  {item.text}
                </p>
              </div>
            </div>
          )}
        </div>
          
      </>  
    )
  }
  
  export default AboutUsPage