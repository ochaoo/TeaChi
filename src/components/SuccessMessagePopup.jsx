import Button from './Button'

const SuccessMessagePopup = ({setIsSuccesPopupVisible}) => {
  
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 flex justify-center items-center bg-black bg-opacity-50">
      <div className="h-1/5 w-1/4 flex flex-col justify-center items-center rounded-xl
        bg-gradient-to-br from-amber-500 to-amber-900">
        <p className="font-montserrat-alternates font-bold text-2xl mb-3 text-white">Information successfully updated!</p>
        <Button onClick={() => setIsSuccesPopupVisible(false)} children={"OK"}/>
      </div>
    </div>
  )
}

export default SuccessMessagePopup