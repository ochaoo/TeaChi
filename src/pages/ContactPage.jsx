import { useState } from "react"
import Button from "../components/Button"
import SuccessMessagePopup from "../components/SuccessMessagePopup"
import Contact from '../assets/image/Contact.png'
import Geo from '../assets/image/contact/geo.svg'
import Time from '../assets/image/contact/time.svg'
import Telephon from '../assets/image/contact/telephon.svg'

const ContactPage = () => {

  const [isSuccesPopupVisible, setIsSuccesPopupVisible] = useState(false)

    return (
      <div className="font-montserrat">
        <div className="bg-gradient-right h-1 mb-[70px]"></div>
        <h2 className="text-center font-montserrat-alternates font-medium text-4xl mb-4">Contact us</h2>

        <div className="max-w-[808px] mx-auto flex flex-col items-center mb-16 font-medium text-2xl">
          <p className="w-full mb-4">Name</p>
          <input type="text" className="w-full mb-8 h-[50px] rounded border-solid border-[1px] border-[#B50000]" />

          <p className="w-full mb-4">Surname</p>
          <input type="text" className="w-full mb-8 h-[50px] rounded border-solid border-[1px] border-[#B50000]" />

          <p className="w-full mb-4">Email</p>
          <input type="text" className="w-full mb-8 h-[50px] rounded border-solid border-[1px] border-[#B50000]" />

          <p className="w-full mb-4">Phone number</p>
          <input type="text" className="w-full mb-8 h-[50px] rounded border-solid border-[1px] border-[#B50000]" />

          <p className="w-full mb-4">Message</p>
          <textarea className="w-full mb-10 h-[142px] rounded border-solid border-[1px] border-[#B50000]" />

          <Button children={'Send'} onClick={() => setIsSuccesPopupVisible(true)} />
        </div> 
        
        <p className="font-medium text-2xl mb-9 text-center">
          Our tea house continue to grows in order to allow everyone to discover tea.
        </p>

        <div className="flex justify-between w-[1015px] mx-auto font-montserrat-alternates">
          <div className="flex flex-col box-border">
            <div className="flex mb-6">
              <img src={Geo} alt="icon" className="w-[47px] h-[48px] mr-[30px] mt-4"/>
              <div>
                <p className="font-medium text-2xl mb-3">
                  Where to find us?
                </p>
                <p className="font-normal text-xl">
                  80 Romily St,London
                </p>
              </div>
            </div>

            <div className="flex mb-6">
              <img src={Time} alt="icon" className="w-[47px] h-[48px] mr-[30px] mt-[38px]"/>
              <div>
                <p className="font-medium text-2xl mb-3">
                  Hours of operation
                </p>
                <p className="font-normal text-xl">
                  Mon-Fri: from 08:00 to 20:00 <br />
                  Sat-Sun: from 10:00 to 17:00
                </p>
              </div>
            </div>
              
            <div className="flex">
              <img src={Telephon} alt="icon" className="w-[47px] h-[48px] mr-[30px] mt-12"/>
              <div>
                <p className="font-medium text-2xl mb-3">
                  Call us
                </p>
                <p className="font-normal text-xl">
                  +38 (044) 545 44 44 <br />
                  +38 (050) 545 44 44 <br />
                  +38 (068) 545 44 44
                </p>
              </div>
            </div>
          </div>

          <img src={Contact} alt="Contact" />
        </div>

        {isSuccesPopupVisible && 
          <SuccessMessagePopup setIsSuccesPopupVisible={setIsSuccesPopupVisible} />
        }
      </div>  
    )
  }
  
  export default ContactPage
