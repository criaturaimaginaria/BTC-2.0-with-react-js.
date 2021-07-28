import React,{useState, useEffect} from 'react'
import CurrencyRow from './CurrencyRow'
import './Box.css'

const Box = (props) => {
   
    const image =  (props?.image)
    const name = (props.name)
    const symbol = (props.symbol)
    const price = (props.price)
    const marketCap = (props.Mcap)
    const high = (props.high)
    const low = (props.low)
    const supply = (props.supply)
    const data = (props.valueChange)
    const exchangeRate = (props.exchangeRate)
   
// -----------------------------------------------------------
    
    
    const [amount, setAmount] = useState (1)
    const [amountInFromCurrency, setAmountInFromCurrency ] = useState (true)

  
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
 

 

  return (
     <div className="box">

         <div className="one">
              <div>
                     <img src={image}  alt="BTC" className="logo-box" />  <div data-name> {name} </div> ({symbol}) 
                       <br></br>
                       <br></br>
              </div>

              <div data-price> ${price}  </div> <p data-per> {(data)}</p>
             
         </div>
 
             <div className="two">
                <div>
                  <h4> Market cap </h4> <h3> ${marketCap}</h3>
                  <h4>low & high 24h </h4> <h3> ${low?.toFixed(0)} - ${high?.toFixed(0)} </h3>
                  

                   </div>
                   <h4> circulating supply </h4> <h3>{supply} </h3>
                   <div>

                   </div>

        
             </div>
                   
            <div className="three">

                <h4>BTC to USD</h4>
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
export default Box
