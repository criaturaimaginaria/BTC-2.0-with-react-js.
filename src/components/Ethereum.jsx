import React, {useState, useEffect} from 'react'
import BtcCurrencyRow from './BtcCurrencyRow'


const Ethereum = () => {
    const apuUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' 
    
    const [api, setApi] = useState()
    const[Mcap, setMcap] = useState()
    const[img, setImg] = useState()


    const marketapi = async () =>{
        const response = await fetch(apuUrl)
        const data = await response.json() 
        const number = (data[1].current_price) 
        const marketCapital = (data[1].market_cap)
        const img = (data[1].image)
        
        setApi(number)
        setMcap(marketCapital)
        setImg(img)
    }

  useEffect(()=>{
        // setInterval(fetchBtcApi, 1000 )   
        marketapi()

    }, )


        // ------------------------------------------------------------------------
    
 
   
    
        const [exchangeRate, setExchangeRate] = useState()
        const [amount, setAmount] = useState (1)
        const [amountInFromCurrency, setAmountInFromCurrency ] = useState (true)
    
        
        
    
        let toAmount, fromAmount
        if (amountInFromCurrency) {
            fromAmount = amount
            toAmount = amount * exchangeRate
        } else{
            toAmount = amount
            fromAmount = amount / exchangeRate
        }    
    
    
        const currencyApi = async () =>{
            const response = await fetch(apuUrl)
            const data = await response.json() 
    
            setExchangeRate(data[1].current_price.toFixed(0))
            // console.log(data.map((price)=> price.current_price))
            // console.log(data.map((price)=> price.symbol))
        }
        
    
                
        useEffect(()=>{
            currencyApi()
           
        }, [])
    
      
    
    
    
     function handleFromAmountChange(e){
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
     }
     function handleToAmountChange(e){
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
     }
     
    
    return (
        <div className="ETH">
            <h1>Ethereum </h1>
            <h1>Current price: {Math.trunc(api)} USD </h1>
            <h1>Market cap: {Mcap} </h1>
            <img src={img}  alt="ETH" className="eth-logo"/>


            <BtcCurrencyRow 

            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
            />

            <div>=</div>

            <BtcCurrencyRow  

            onChangeAmount={handleToAmountChange}
            amount={toAmount}
            />

        </div>
    )
}

export default Ethereum
