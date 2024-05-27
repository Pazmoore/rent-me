import React from 'react'
import Search from '../search/Search'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded'
import './search-filter.scss'

const SearchFilter = ({product} : {product?: string}) => {
  return (
    <div className='search-filter'>
      <Search product={product}/>
      <button className="filter">
        <FilterListRoundedIcon/>
        <span>Filter</span>
      </button>
    </div>
  )
}

export default SearchFilter