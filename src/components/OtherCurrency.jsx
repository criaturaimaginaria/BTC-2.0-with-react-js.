import React,  {useState, useEffect} from 'react'
import './OtherCurrency.css'



const OtherCurrency = () => {
    const cryptoUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

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


function formatNumber(num) {

        if (num < 1000000000) {
        return  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').slice(0 , 6) + "M" 
        } 
        else if (num < 1000000000000) {
            return  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').slice(0 , 6) + "B" 
        }
    return num
  }

    const tableData = (api) =>{
        return(
            <tr key={api.id} >
                <td>{<img src={api?.image }  alt="logos" className="logos"/>   }</td>  
                <td>  { <div className="symbol"> {api.symbol} </div>} { <div className="name"> {api.name } </div> } </td>
                <td>{ formatNumber(api.market_cap) }  </td>
                <td>{api.current_price}</td>
                <td>{api.ath}</td>

                <td>  { api.price_change_percentage_24h > 0 ?   
                <p className="green" >  {api.price_change_percentage_24h.toFixed(2) }% </p>
                : <p className="red" > {api.price_change_percentage_24h.toFixed(2) }% </p>  }  </td>
            </tr>
        )
    }

    return (

   
        <div className="currencies">
           
                  <table>
                      <thead>
                          <tr>
                            <th> </th> 
                            <th>NAME</th>
                            <th>MARKET CAP</th>
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
        
              
    )
}

export default OtherCurrency
