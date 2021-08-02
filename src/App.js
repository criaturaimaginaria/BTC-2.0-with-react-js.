import './App.css';
import BTCmarket from './components/BTCmarket';
import Ethereum from './components/Ethereum';
import Main from './components/Main';
import Nav from './components/Nav';
import OtherCurrency from './components/OtherCurrency'; 
import Footer from './components/Footer';

// for common hosts
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';     
// for github pages
import { HashRouter } from "react-router-dom";     
 
function App() {
  return (

    <HashRouter>
        <div className="App">

          <Nav />    
              <Switch  className="swit">
                <Route exact path="/" exact component={Main} />
                <Route path="/components/Main" exact component={Main} />
                <Route path="/components/BTCmarket"  component={BTCmarket} />
                <Route path="/components/Ethereum"  component={Ethereum} />
                <Route path="/components/OtherCurrency"  component={OtherCurrency} />
              </Switch>     

          <Footer />

         </div>

    </HashRouter>
       
      
    
  );
}

export default App;
