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
      
                
        useEffect(()=>{
            fetch(cryptoUrl)
                .then(response => response.json())
                .then(data => 
                    
                    setcurrencyOptions([ data.map((name)=>name.symbol), data.map((price)=>price.current_price)])
                )

        }, [])

     

    return (

   
        <div className="currencies">
            <h1>other currencies</h1>

            <select name="currencies" >
                {api.map(element=>(
                    <option key={element.id} value={element.current_price}  > {element.name}</option>
                ))
                }

               
            </select>
            
                <CurrencyRow currencyOptions={currencyOptions} />
                
                <div>=</div>
                <CurrencyRow  currencyOptions={currencyOptions}  />

            </div>
              
    )
}

export default OtherCurrency
