import React,  {useState, useEffect} from 'react'
import  CurrencyRow  from './CurrencyRow'



const OtherCurrency = () => {
    const cryptoUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

//   -------------------------LIST------------------------------  
    const [api, setApi] = useState([])

    const marketapi = async () =>{
        const response = await fetch(cryptoUrl)
        const data = await response.json() 

        const number = (data) 
        // console.log(number.map((precio)=>precio.current_price))    
        setApi(number)   
    }

    useEffect(()=>{  
        marketapi()
    },[] )
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
            const response = await fetch(cryptoUrl)
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

   
        <div className="currencies">
            <h1>other currencies</h1>

            <select name="currencies" >
                {api.map(element=>(
                    <option key={element.id} value={element.current_price}  > {element.name}</option>
                ))
                }

               
            </select>
            
                <CurrencyRow 
                currencyOptions={currencyOptions} 
                selectCurrency={fromCurrency} 
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
                />
                
                <div>=</div>
                
                <CurrencyRow  
                currencyOptions={currencyOptions}  
                selectedCurrency={toCurrency} 
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
                />

                 

            </div>

           
              
    )
}

export default OtherCurrency
