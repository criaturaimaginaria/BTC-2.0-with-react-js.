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

// stack overflow algorithm ---------------------------------
    // function abbreviateNumber(value) {
    //     var newValue = value;
    //     if (value >= 1000) {
    //         let suffixes = ["", "k", "m", "b","t"];
    //         let suffixNum = Math.floor( (""+value).length/3 );
    //         let shortValue = '';
    //         for (let precision = 2; precision >= 1; precision--) {
    //             shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
    //             let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
    //             if (dotLessShortValue.length <= 3) { break; }
    //         }
    //         if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
    //         newValue = shortValue+suffixes[suffixNum];
    //     }
    //     return newValue;
    // }
//  ----------------------------------------------------------   

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

    const tableData = (api) =>{
        return(
            <tr key={api.id} >
                <td>{<img src={api?.image }  alt="logos" className="logos"/>   }</td>  
                <td>  { <div className="symbol"> {api.symbol} </div>}   { <div className="name"> {api.name } </div> }   </td>
                <td>{ formatNumber(api.market_cap)  }</td>
                <td>{api.current_price}</td>
                <td>{api.ath}</td>
                <td>  { api.price_change_percentage_24h > 0 ?   
                <p style={{color:"green"}} >  {api.price_change_percentage_24h.toFixed(2) } </p>
                : <p style={{color:"red"}} > {api.price_change_percentage_24h.toFixed(2) } </p>  }  </td>
            </tr>
        )
    }

    return (

   
        <div className="currencies">
           

            

                <div className="div-container">

             
                  <table>
                      <thead>
                          <tr>
                            <th> O</th> 
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
          

            </div>
        
              
    )
}

export default OtherCurrency
