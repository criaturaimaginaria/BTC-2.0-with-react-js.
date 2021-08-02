import React, {useState, useEffect} from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';
import './Nav.css';
import AccordionToggle from './AccordionToggle';


const Nav = () => {
    const img =  <img src={logo} alt="btc nav" className="logo" />

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])

    return (  
      
        <nav>   
           
            <>{img}</>
                    
                {( screenWidth > 900) && (
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
                                <li>Other Currencies</li>
                            </Link> 
                            
                        </ul>
                )}


            
                <AccordionToggle  />
             
       
        </nav>
    )
}

export default Nav
