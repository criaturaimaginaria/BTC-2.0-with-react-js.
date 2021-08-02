import React, {useState, useEffect} from 'react'
import './Main.css'


const Main = () => {
        const  [title, setTitle] = useState()
        const  [window, setWindow] = useState()
        const  [motionBack, setMotionBack] = useState()
        

    useEffect(() => {

        setTimeout(()=>{setTitle(true)}, 750);
        setTimeout(()=>{setWindow(true)}, 1400);
        setTimeout(()=>{setMotionBack(true)}, 600);
    }, [] )

    

    return (
        <div className="main">
            <h1 className={title ? "animated-title" : "title"}>Decentralized money Aa</h1>

            <div className={window ? "back_background-animated" : "back_background"}>
                <div className="presentation">
                    <div className={motionBack ? "animated-window-one" : "window-one"}></div>
                    <div className={motionBack ? "animated-window-two" : "window-two"}> </div>
                </div>
            </div>
  
        </div>
    )
}

export default Main
