import React,{useState, useEffect} from 'react'
import Box from './Box'


const BTCmarket = () => {
    const apuUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' 
   
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

        setName(data[0].name)
        setSymbol(data[0].symbol.toUpperCase())
        setApi2(data[0].image)
        setApi(data[0].current_price)
        setMcap(data[0].market_cap)
        setHigh(data[0].high_24h)
        setLow(data[0].low_24h)
        setSupply(data[0].circulating_supply)
        // console.log(data)
        setData(data[0].price_change_percentage_24h.toFixed(2))

        setExchangeRate(data[0].current_price)
    }
        
    useEffect(()=>{
        currencyApi()
    }, [])

    const percentageChange = (data) =>{
        return(
            <p >
                { (data ) > 0 ? <p className="green"> {data }% </p> : <p className="red" > {data}% </p>  } 
             </p>
        )
    }
    
    
    const exchangeRateBtc = exchangeRate
  return (

        <div>
            BTC to USD
            <Box 
                image={api2}
                name={name}
                symbol={symbol}
                price={api}
                Mcap={Mcap}
                high={high}
                low={low}
                supply={supply}
                valueChange={percentageChange(data)}
                exchangeRate={exchangeRateBtc}
            />
        </div>
        
    )
}
export default BTCmarket
