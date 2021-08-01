import React, {useState, useEffect} from 'react'
import './Main.css'

const Main = () => {
        const  [title, setTitle] = useState()
        const  [window, setWindow] = useState()
        

    useEffect(() => {

        setTimeout(()=>{setTitle(true)}, 750);
        setTimeout(()=>{setWindow(true)}, 900);
    }, [] )

    

    return (
        <div className="main">
            <h1 className={title ? "animated-title" : "title"}>Decentralized money</h1>

            <div className="presentation">
                <div className={window ? "animated-window-one" : "window-one"}></div>
                <div className={window ? "animated-window-two" : "window-two"}> </div>
            </div>
        
        </div>
    )
}

export default Main
