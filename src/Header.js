import { useState } from 'react';
import './Header.css';

function Header() {
  const [value, setValue] = useState("1")

  function handleClick(event) {
    const buttonValue = event.target.value
    setValue(buttonValue)
  }

  function buttonClass(buttonId) {
    return `${value === buttonId ? 'clicked' : '' } sorting-button`
  }

  return (
    <div className='header'>
      <div>
        <button value="1" onClick={handleClick} className={buttonClass("1")}>Best Match</button>
        <button value="2" onClick={handleClick} className={buttonClass("2")}>Most Reviewed</button>
        <button value="3" onClick={handleClick} className={buttonClass("3")}>Highest Rated</button>
      </div>
      <div className='inputs'>
        <input className='search' placeholder='Search Business' />
        <input className='search' placeholder='Where?'/>
      </div>
      <div>
        <button className='search-button'>Let's Go</button>
      </div>
    </div>
  )
}

export default Header;
