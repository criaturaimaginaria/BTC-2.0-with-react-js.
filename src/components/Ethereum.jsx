import React, {useState, useEffect} from 'react'
import Box from './Box'
import eth from './eth.png'



const Ethereum = () => {
    const apuUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' 
    const sideImg = eth

    const [name, setName] = useState ()
    const [symbol, setSymbol] = useState ()
    const [api, setApi] = useState()
    const[api2, setApi2] = useState()
    const[Mcap, setMcap] = useState()
    const[high, setHigh] = useState() 
    const [low, setLow ] = useState()
    const[supply, setSupply] = useState()
    const [data, setData] = useState()
    
    // prop to currency conversos -----------------
    const [exchangeRate, setExchangeRate] = useState()

    // ------------------------------------------------------------------------


    const currencyApi = async () =>{
        const response = await fetch(apuUrl)
        const data = await response.json() 

        setName(data[1].name)
        setSymbol(data[1].symbol.toUpperCase())
        setApi2(data[1].image)
        setApi(data[1].current_price.toFixed(0))
        setMcap(data[1].market_cap)
        setHigh(data[1].high_24h)
        setLow(data[1].low_24h)
        setSupply(data[1].circulating_supply)
        // console.log(data)
        setData(data[1].price_change_percentage_24h.toFixed(2))

        setExchangeRate(data[1].current_price.toFixed(0))
        
    }
        
    useEffect(()=>{
        currencyApi()
    }, [])
     

    
    const exchangeRateEth = exchangeRate
    
    return (
        <div>
            <Box
                image={api2}
                name={name}
                symbol={symbol}
                price={api}
                Mcap={Mcap}
                high={high}
                low={low}
                supply={supply}
                valueChange={data}
                exchangeRate={exchangeRateEth}
                sideImg = {sideImg}
                To={"ETH to USD"}
             />
     
        </div>
        
    )
}

export default Ethereum
