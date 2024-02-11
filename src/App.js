import './App.css';
import './Shared.css';
import Banner from './Banner';
import BusinessList from './BusinessList.js'
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Banner />
      <Header />
      <BusinessList />
    </div>
  );
}

export default App;
