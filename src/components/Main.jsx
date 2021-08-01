import React, {useState, useEffect} from 'react'
import './Main.css'

const Main = () => {
        const  [title, setTitle] = useState()

    useEffect(() => {

        setTimeout(()=>{setTitle(true)}, 750);
     
        // setTitle(true)
    }, [] )

    

    return (
        <div className="main">
            <h1 className={title ? "title animated" : "title"}>Main</h1>
        
        </div>
    )
}

export default Main
