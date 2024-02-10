
import './App.css';
import BusinessList from './BusinessList.js'

function App() {
  return (
    <div className="app">
      <div className='banner'>
        ravenous
      </div>
      <div className='header'>
        <div >
          <button className='sorting-button'>Best Match</button>
          <button className='sorting-button'>Most Reviewed</button>
          <button className='sorting-button'>Highest Rated</button>
        </div>
        <div className='inputs'>
          <input className='search' placeholder='Search Business' />
          <input className='search' placeholder='Where?'/>
        </div>
        <div>
          <button className='search-button'>Let's Go</button>
        </div>
      </div>

      <div className='container'>
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
