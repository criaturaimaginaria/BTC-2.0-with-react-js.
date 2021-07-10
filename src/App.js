import './App.css';
import BTCmarket from './components/BTCmarket';
import Ethereum from './components/Ethereum';
// import FetchBtc from './components/FetchBtc';
import FetchBtc3 from './components/fetchBtc3';
import Main from './components/Main';
import Nav from './components/Nav';
import OtherCurrency from './components/OtherCurrency';


function App() {
  return (
    <div className="App">
       <Nav />
       <Main />
       <FetchBtc3 />
       {/* <FetchBtc /> */}
       <BTCmarket />
       <Ethereum />
       <OtherCurrency />
      
    </div>
  );
}

export default App;
