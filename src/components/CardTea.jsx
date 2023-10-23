import { useNavigate } from 'react-router-dom';
import { ABOUT_PRODUCT_ROUTE } from '../utils/routes';
import Button from './Button'

const CardTea = ({image, description, caption, text, id}) => {

  const navigate = useNavigate()

  return (
    <div className="font-montserrat flex flex-col items-center w-[330px] shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]
      h-[505px] pb-8 rounded-[10px] border-solid border-[.3px] border-[#000000] box-border pt-2 mb-4">
      <img src={image} alt="Image" className='w-[228px] h-[228px]'/>

      <div className="font-medium text-lg max-w-[288px] text-center mt-6 mb-4">{caption}</div>

      <div className="font-normal text-sm max-w-[288px] text-center">{text}</div>

      <div className="font-normal text-sm max-w-[319px] text-center">{description}</div>

      <div className='mt-auto'>
        <Button shadow children={'Review'} onClick={() => navigate(ABOUT_PRODUCT_ROUTE+`/${id}`)} />
      </div>
      
    </div>
  )
}

export default CardTea;