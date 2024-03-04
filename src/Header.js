import { useState } from 'react'
import './Header.css'
import { callYelpApi } from './api/client'

function Header(props) {
  const [value, setValue] = useState('best_match')
  const [searchText, setSearchText] = useState('')
  const [whereText, setWhereText] = useState('')

  function handleWhereChange(event) {
    const where = event.target.value
    setWhereText(where)
  }

  function handleSearchChange(event) {
    const newText = event.target.value
    setSearchText(newText)
  }

  function handleClick(event) {
    const buttonValue = event.target.value
    setValue(buttonValue)
    searchWith({
      search: searchText,
      location: whereText,
      sorting: buttonValue,
    })
  }

  function searchWith(query) {
    let businessesPromise = callYelpApi(query)

    businessesPromise.then((json) => {
      props.onSearch(json.businesses)
    })
  }

  function handleDoSearch() {
    const q = {
      search: searchText,
      location: whereText,
      sorting: value,
    }

    searchWith(q)
  }

  function buttonClass(buttonId) {
    return `${value === buttonId ? 'clicked' : ''} sorting-button`
  }

  return (
    <div className="header">
      <div>
        <button value="best_match" onClick={handleClick} className={buttonClass('best_match')}>
          Best Match
        </button>
        <button value="review_count" onClick={handleClick} className={buttonClass('review_count')}>
          Most Reviewed
        </button>
        <button value="rating" onClick={handleClick} className={buttonClass('rating')}>
          Highest Rated
        </button>
      </div>
      <div className="inputs">
        <input value={searchText} onChange={handleSearchChange} className="search" placeholder="Search Business" />
        <input value={whereText} onChange={handleWhereChange} className="search" placeholder="Where?" />
      </div>
      <div>
        <button onClick={handleDoSearch} className="search-button">
          Let's Go
        </button>
      </div>
    </div>
  )
}

export default Header
