import './App.css';
import BTCmarket from './components/BTCmarket';
import Ethereum from './components/Ethereum';
// import FetchBtc from './components/FetchBtc';
// import FetchBtc3 from './components/fetchBtc3';
import Main from './components/Main';
import Nav from './components/Nav';
import OtherCurrency from './components/OtherCurrency'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


 
function App() {
  return (

    <Router>
        <div className="App">
          <Nav />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/components/Main"  component={Main} />
              <Route path="/components/BTCmarket"  component={BTCmarket} />
              <Route path="/components/Ethereum"  component={Ethereum} />
              <Route path="/components/OtherCurrency"  component={OtherCurrency} />
            </Switch>

          {/* <FetchBtc3 /> */}
          {/* <FetchBtc /> */}
         </div>

    </Router>
       
      
    
  );
}

export default App;
