import { useState } from "react"
import Select from "react-select"
import './mySelect.css'

const options = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'black-tea',
    label: 'Black tea'
  },
  {
    value: 'green-tea',
    label: 'Green tea'
  },
  {
    value: 'fruit-tea',
    label: 'Fruit tea'
  },
  {
    value: 'new-tea',
    label: 'New tea'
  },
  {
    value: 'most-popular-tea',
    label: 'Most popular tea'
  },
]

const MySelect = ({currentFilter, setCurrentFilter}) => {
  
    const getValue = () => {
        return currentFilter ? options.find(b => b.value === currentFilter) : ''
    }
  
    const onChange = (newValue) => {
      newValue ? setCurrentFilter(newValue.value) : setCurrentFilter('')
    }
  
      return (
        <Select onChange={onChange} value={getValue()} isSearchable={false} options={options} placeholder='Sort by'
        classNamePrefix='custom-select' className="custom-select"/>
      )
}
    
export default MySelect;