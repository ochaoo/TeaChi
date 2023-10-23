import Right from '../assets/image/IconRight.svg'

const Button = ({children, shadow, icon, ...props}) => {

  return (
    <button {...props} className={`font-montserrat font-semibold text-[15px] leading-[26px] tracking-[.46px] bg-[#99A84F] rounded w-[169px] h-[49px] 
    flex items-center text-white
    ${shadow ? 'shadow-[0px_4px_4px_rgba(0,0,0,0.25)]' : ''}
    ${icon ? 'px-[33.5px]' : 'justify-center'}`}>
      {children} 
      {icon && <img src={Right} alt="icon" className='ml-2 w-7 h-7'/>}
    </button>
  );
}
export default Button;
