import React, {useState, useEffect, useRef} from 'react'
import "./AccordionToggle.css"
import {Link} from 'react-router-dom';

export default function AccordionToggle() {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    // console.log(toggle);

    
    return (
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible">
                        <div className={toggle ? "line animated-line" : "line"}></div>
                        <div className={toggle ? "line animated-line" : "line"}></div>
                        <div className={toggle ? "line animated-line" : "line"}></div>
            </button>
            
                <div 
                    className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
                    style={{height: toggle ? `${heightEl}` : "0px"}}
                    ref={refHeight}
                    >
                 <div  >
              
                    <Link to='/components/Main' className="link"> 
                        <p>Main</p>
                    </Link>    
                    <Link to='/components/BTCmarket' className="link">
                        <p>Bitcoin</p>
                    </Link> 
                    <Link to='/components/Ethereum' className="link">
                        <p>Ethereum</p>
                    </Link> 
                    <Link to='/components/OtherCurrency' className="link">
                        <p>Other Currency</p>
                    </Link> 
                    
            
                </div>
            </div>
            
        </div>
    )
}