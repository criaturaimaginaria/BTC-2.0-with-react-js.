import React,{useState, useEffect} from 'react'
import CurrencyRow from './CurrencyRow'
import './BTCmarket.css'


const BTCmarket = () => {
    const apuUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' 
   

    const[data, setData] = useState()
    const [api, setApi] = useState()
    const[api2, setApi2] = useState()
    const[Mcap, setMcap] = useState()
    const[high, setHigh] = useState() 
    const [low, setLow ] = useState()
    const[supply, setSupply] = useState()
    // ------------------------------------------------------------------------
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState (1)
    const [amountInFromCurrency, setAmountInFromCurrency ] = useState (true)

    const currencyApi = async () =>{
        const response = await fetch(apuUrl)
        const data = await response.json() 

        setExchangeRate(data[0].current_price)

        setApi2(data[0].image)
        setApi(data[0].current_price)
        setMcap(data[0].market_cap)
        setHigh(data[0].high_24h)
        setLow(data[0].low_24h)
        setSupply(data[0].circulating_supply)
        console.log(data)
        setData(data[0].price_change_percentage_24h.toFixed(2))
    }
        
    useEffect(()=>{
        currencyApi()
    }, [])

  

// conversor -----------
    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else{
        toAmount = amount
        fromAmount = amount / exchangeRate
    }    

 function handleFromAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
 }
 function handleToAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
 }
 

 const percentageChange = (data) =>{
    return(
        <p >
            { (data ) > 0 ? <p className="green"> {data }% </p> : <p className="red" > {data}% </p>  } 
         </p>
    )
}


  return (
     <div className="bitcoin">

         <div className="one">
              <div>
                     <img src={api2}  alt="BTC" className="btc-logo" />  <div data-name> Bitcoin</div> (BTC)
                       <br></br>
                       <br></br>
              </div>

              <div data-price> ${api}  </div> <p data-per> {percentageChange(data)}</p>
             
         </div>

             <div className="two">

             <h2> Market cap: {Mcap}</h2>
             <h2>low & high 24h {high} - {low}</h2>
             <h2> circulating supply: {supply}</h2>
             
        
             </div>
                   
            <div className="three">

                <h4>BTC to USDT</h4>
                     <CurrencyRow  

                    onChangeAmount={handleFromAmountChange}
                    amount={fromAmount}
                    />

                    <div className="equal">=</div>

                    <CurrencyRow  

                    onChangeAmount={handleToAmountChange}
                    amount={toAmount}
                    />

                    
            </div>

         <div className="four">
       
         </div>
            
               
     </div>
    )
}
export default BTCmarket
