const Footer = () => {


    return (
      <div className="font-montserrat-alternates font-normal text-lg flex flex-row justify-center 
        items-center h-[268px] bg-[#CCC2B6] mt-[100px]">
  
        <div className="text-2xl font-medium leading-7 mr-44">TEA <br /> CHI</div>
  
        <div className="flex flex-col mr-24">
            <p className="text-xl font-medium mb-8">About us</p>

            <p className="text-lg mb-4">About company</p>
            <p className="text-lg mb-4">Blog</p>
            <p className="text-lg">Contact</p>

        </div>

        <div className="flex flex-col mr-11">
            <p className="text-xl font-medium mb-8">Contact</p>

            <p className="text-lg mb-0 leading-[1.340]">+38 (044) 545 44 44</p>
            <p className="text-lg mb-0 leading-[1.340]">+38 (050) 545 44 44</p>
            <p className="text-lg mb-4 leading-[1.340]">+38 (068) 545 44 44</p>
            <p className="text-lg">TEACHI@gmail.com</p>

        </div>

        <div className="flex flex-col -mt-[88px]">
            <p className="text-xl font-medium mb-8">Our store</p>

            <p className="text-lg">80 Romily St,London</p>

        </div>

      </div>
    );
  }
  export default Footer;
  