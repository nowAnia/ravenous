import './App.css';
import './Shared.css';
import Banner from './Banner';
import BusinessList from './BusinessList.js'
import Header from './Header';

import informations from './library.js'

function App() {
  return (
    <div className="app">
      <Banner />
      <Header />
      <BusinessList businesses={informations} />
    </div>
  );
}

export default App;
