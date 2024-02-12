import './App.css';
import './Shared.css';
import Banner from './Banner';
import BusinessList from './BusinessList.js'
import Header from './Header';


import { useState } from 'react';

function App() {
  const [businesses, setBusinesses] = useState([])

  function handleSearch(newBusinesses) {
    setBusinesses(newBusinesses)
  }

  return (
    <div className="app">
      <Banner />
      <Header onSearch={handleSearch} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
