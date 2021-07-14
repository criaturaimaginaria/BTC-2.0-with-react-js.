import React from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';

const Nav = () => {


    return (  
        
        <nav>
             <img src={logo} alt="btc nav" className="logo" />
            
            <ul className="nav-links">
                <Link to='/components/Main'>
                    <li>Main</li>
                </Link>    
                <Link to='/components/BTCmarket'>
                    <li>Bitcoin</li>
                </Link> 
                <Link to='/components/Ethereum'>
                    <li>Ethereum</li>
                </Link> 
                <Link to='/components/OtherCurrency'>
                    <li>Other Currency</li>
                </Link> 
                
            </ul>
            
        </nav>
    )
}

export default Nav
