import React,{useState, useEffect} from 'react'


const BTCmarket = () => {
    const BtcUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' 
    
    const [api, setApi] = useState()


    const marketapi = async () =>{
        const response = await fetch(BtcUrl)
        const data = await response.json() 
        const number = (data[0].current_price) 
        console.log(data)
        setApi(number)
    }

  useEffect(()=>{
        // setInterval(fetchBtcApi, 1000 )   
        marketapi()

    }, )
    
        return (
            <div>

                   <h1> Bitcoin {api}</h1>
            </div>
        )
    }
    export default BTCmarket
