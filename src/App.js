
import './App.css';
import BusinessList from './BusinessList.js'

function App() {
  return (
    <div className="app">
      <div>
        <button>Best Match</button>
        <button>Most Reviewed</button>
        <button>Highest Rated</button>
      </div>
      <div>
        <input placeholder='Search Business' />
        <input placeholder='Where?'/>
      </div>
      <div>
        <button>Let's Go</button>
      </div>

      <div className='container'>
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
