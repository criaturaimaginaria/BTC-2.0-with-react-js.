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
        console.log(number)    
        setApi(number)   
    }

    useEffect(()=>{  
        marketapi()
    },[] )

    const hello = "gello"

    const tableData = (api) =>{
        return(
            <tr key={api.id} >
                <td>{<img src={api?.image }  alt="logos" className="logos"/>   }</td>  
                <td>  { <div className="symbol"> {api.symbol} </div>}   { <div className="name"> {api.name } </div> }   </td>
                <td></td> 
                <td>{api.current_price}</td>
                <td>{api.ath}</td>
                <td>  { api.price_change_percentage_24h > 0 ?   
                <p style={{color:"green"}} >  {api.price_change_percentage_24h } </p>
                : <p style={{color:"red"}} > {api.price_change_percentage_24h } </p>  }  </td>
            </tr>
        )
    }

    return (

   
        <div className="currencies">
            <h1>other currencies</h1>
            

                <div className="div-container">

             
                  <table>
                      <thead>
                          <tr>
                            <th>NAME</th> 
                            <th></th>
                            <th></th>
                            <th>PRICE</th>
                            <th>ATH</th>
                            <th>24H CHANGE</th>
                          </tr>  
                      </thead>
                      
                      <tbody>
                            { api.map(tableData)}    
                      </tbody>


                  </table>


                </div>
          
                   
               
   

            </div>

           
              
    )
}

export default OtherCurrency
