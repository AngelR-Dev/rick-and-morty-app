import React from 'react'
import './Filter.css'

const FilterList = ({suggestedList, setSearchInput}) => {

  const handleClick = id => setSearchInput(id)

  return (
    <ul className='filter'>
      {
        suggestedList?.map(location => (
          <li className='filter__li' onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
        ))
      }
    </ul>
  )
}

export default FilterList