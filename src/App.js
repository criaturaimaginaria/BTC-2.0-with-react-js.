import './App.css';
import BTCmarket from './components/BTCmarket';
import FetchBtc from './components/FetchBtc';
import FetchBtc3 from './components/fetchBtc3';


function App() {
  return (
    <div className="App">
       <FetchBtc3 />
       <FetchBtc />
      <BTCmarket />
     
    </div>
  );
}

export default App;
