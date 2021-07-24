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
        // console.log(number.map((precio)=>precio.current_price))    
        setApi(number)   
    }

    useEffect(()=>{  
        marketapi()
    },[] )
// ------------------------------------------------------------------------

    return (

   
        <div className="currencies">
            <h1>other currencies</h1>

                <table className="table">
                    <thead>
                        <tr>
                        <th>nombres</th>
                        <th>precios</th>
                        </tr>
                     
                    </thead>

                <tbody>
                     <tr >
                    {api.map(element=>(   <td key={element.id} > {element.name}</td>  )) }
                    </tr>

                    <tr >
                    {api.map(element=>(   <td key={element.id} > {element.current_price}</td>  )) }
                    </tr>
                
                </tbody>
                    

                </table>   
                   
                
                   
               
   

            </div>

           
              
    )
}

export default OtherCurrency
