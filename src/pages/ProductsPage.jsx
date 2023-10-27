import { useEffect, useState } from "react"
import MySelect from "../components/MySelect/MySelect"
import CardTea from "../components/CardTea";
import { BlackTea, FruitTea, GreenTea, itemsNewTea, itemsPopularTea} from "../utils/db"

const teaData = {
  'black-tea': BlackTea, 
  'green-tea': GreenTea, 
  'fruit-tea': FruitTea, 
  'new-tea': itemsNewTea, 
  'most-popular-tea': itemsPopularTea, 
};

const ProductsPage = () => {

  const [currentFilter, setCurrentFilter] = useState('all')
  const [countItems, setCountItems] = useState(0)
  const filteredTeaList = teaData[currentFilter];

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentFilter(history.state?.usr || 'all')
  },[])

  useEffect(() => {
    setCountItems(currentFilter === 'all' ? [...BlackTea, ...FruitTea, ...GreenTea].length 
    : teaData[currentFilter].length)
  },[currentFilter])

  return (
    <>
      <div className="bg-gradient-right h-1 mb-[70px]"></div>
      <h2 className="text-center font-montserrat-alternates font-medium text-4xl mb-7">Tea <span 
      className="font-semibold text-sm text-[#787878] align-middle">/ {countItems} items</span></h2> 

      <div className="max-w-[184px] mx-auto">
        <MySelect setCurrentFilter={setCurrentFilter} currentFilter={currentFilter}/>
      </div>

      <div className="w-4/5 mx-auto flex flex-wrap justify-between mt-[54px]">
        {currentFilter === 'all' ? 
          [...BlackTea, ...FruitTea, ...GreenTea].map(tea => 
            <CardTea caption={tea.caption} id={tea.id} image={tea.image}
              text={tea.text} key={tea.id} description={tea.descriptionList}/>
          )
          :
          filteredTeaList.map(tea => 
            <CardTea caption={tea.caption} id={tea.id} image={tea.image}
              text={tea.text} key={tea.id}/>
          )  
        }
      </div>
    </>  
  )
  }
  
  export default ProductsPage