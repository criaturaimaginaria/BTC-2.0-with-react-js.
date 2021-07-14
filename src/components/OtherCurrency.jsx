import React,  {useState, useEffect} from 'react'



const OtherCurrency = () => {
    const BtcUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    const [api, setApi] = useState([])


    const marketapi = async () =>{
        const response = await fetch(BtcUrl)
        const data = await response.json() 

      
        const number = (data) 
        // setApi(marketCapital)
        setApi(number)
    }

    useEffect(()=>{
      
        marketapi()

    },[] )
    
    return (
        <div className="currencies">
            <h1>other currencies</h1>

            <select name="currencies" >
                {api.map(element=>(
                    <option key={element.id} value={element.id}> {element.name}</option>
                ))
                }
            </select>



        </div>
    )
}

export default OtherCurrency
