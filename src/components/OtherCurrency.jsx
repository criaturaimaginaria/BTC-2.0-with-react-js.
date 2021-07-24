import React,  {useState, useEffect} from 'react'
import './OtherCurrency.css'



const OtherCurrency = () => {
    const cryptoUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

//   -------------------------LIST------------------------------  
    const [api, setApi] = useState([])

    const marketapi = async () =>{
        const response = await fetch(cryptoUrl)
        const data = await response.json() 

        const number = (data) 
        // console.log(number)    
        setApi(number)   
    }

    useEffect(()=>{  
        marketapi()
    },[] )
// ------------------------------------------------------------------------

    return (

   
        <div className="currencies">
            <h1>other currencies</h1>
            

                <div className="div-container">

                   
                 
  
                  
                    <div className="information">
                           {api.map(element=>(   <pre> <div key={element.id} className="information-columns" >   
                           <img src={element?.image }  alt="logos" className="logos"/>    {element.name } {element.symbol}         {element.current_price}
                               </div>    </pre> 
                           
                           
                           )) }
                    </div>
                   

                     {/* <div  className="information">
                          {api.map(element=>(   <p key={element.id} > {element.symbol} </p>  )) }
                    </div> */}

                    {/* <div className="information">
                         {api.map(element=>(   <p key={element.id} > {element.current_price}</p>  )) }
                    </div> */}

                   
                </div>
          
                   
               
   

            </div>

           
              
    )
}

export default OtherCurrency
