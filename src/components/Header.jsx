import { useNavigate } from "react-router-dom";
import { PRODUCTS_ROUTE, ABOUT_US_ROUTE, MAIN_ROUTE, CONTACT_ROUTE } from "../utils/routes";

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className="font-montserrat-alternates font-normal text-xl 
    flex flex-row justify-center items-center space-x-36 mt-4 mb-[7px]">
      
      <button onClick={() => navigate(MAIN_ROUTE)}>Home</button>
      <button onClick={() => navigate(PRODUCTS_ROUTE)}>Products</button>

      <div className="text-2xl leading-7">TEA <br /> CHI</div>

      <button onClick={() => navigate(ABOUT_US_ROUTE)}>About us</button>
      <button onClick={() => navigate(CONTACT_ROUTE)}>Contact</button>
    </div>
  );
}
export default Header;
