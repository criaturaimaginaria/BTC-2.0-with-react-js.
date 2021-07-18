import React from 'react'

export const CurrencyRow = (props) => {

    // const {currencyOptions, onChangeCurrency} = props
    //  console.log(props.currencyOptions[0 , 0 ])
    let  symbols =  (props.currencyOptions[0]) 
    console.log(symbols)
    return (
        <div>
        
           <input type="number" className="input" />
           <select>
               {symbols?.map( option =>(
                   <option key={option} value={option} > {option}</option>
               ))}
               
           </select>
        
        </div>
    )
}

export default CurrencyRow
