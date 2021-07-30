import React, {useState, useEffect} from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    const img =  <img src={logo} alt="btc nav" className="logo" />

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])

    const imgDisplay = (img) =>{
        return(
            <>
                { (toggleMenu ) > false ?  !img  :  img } 
             </>
        )
    }
    


    return (  

        
        
        <nav>   
            
            <>{imgDisplay(img)}</>
         
      {(toggleMenu || screenWidth > 900) && (
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
      )}

      <button onClick={toggleNav} className="btn">
                Hola
      </button>
    
{/*             
             <img src={logo} alt="btc nav" className="logo" />
           
         
                <label for="menu-toggle"> 
                        <div className="menu">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </label>  

                <input type="checkbox" id="menu-toggle"/>  

            

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
                        
                    </ul> */}

            
               
            
        </nav>
    )
}

export default Nav
