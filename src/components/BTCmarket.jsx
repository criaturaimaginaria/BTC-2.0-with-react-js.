import React,{useState, useEffect} from 'react'
import BtcCurrencyRow from './BtcCurrencyRow'

const BTCmarket = () => {
    const BtcUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' 
   

    const [api, setApi] = useState()
    const[api2, setApi2] = useState()
    const[Mcap, setMcap] = useState()

    const marketapi = async () =>{
        const response = await fetch(BtcUrl)
        const data = await response.json() 

        const number = (data[0].current_price) 
        const data2 = (data[0].image)
        const marketCapital = (data[0].market_cap)

        setApi2(data2)
        setApi(number)
        setMcap(marketCapital)

    }

  useEffect(()=>{
        // setInterval(fetchBtcApi, 1000 )   
        marketapi()

    }, )

    // ------------------------------------------------------------------------
    
    const [currencyOptions, setcurrencyOptions] = useState ([])
    const [fromCurrency, setFromCurrency] = useState ()
    const [toCurrency, setToCurrency] = useState ()
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
        const response = await fetch(BtcUrl)
        const data = await response.json() 
        
        setcurrencyOptions([ data.map((name)=>name.symbol), data.map((price)=>price.current_price)])
        setFromCurrency(data[0])
        setToCurrency(data[2])
        setExchangeRate(data[0].current_price)
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
            <div className="bitcoin">

                   <h1> Bitcoin </h1>
                   <h1>Current price: {api} USD</h1>
                   
                   <h1> Market cap: {Mcap}</h1>
                   <img src={api2}  alt="BTC" className="btc-logo"/>

               
            
                   <BtcCurrencyRow 
                currencyOptions={currencyOptions} 
                selectCurrency={fromCurrency} 
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
                />
                
                <div>=</div>
                
                <BtcCurrencyRow  
                currencyOptions={currencyOptions}  
                selectedCurrency={toCurrency} 
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
                />
               
            </div>
        )
    }
    export default BTCmarket
