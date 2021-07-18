import React from 'react'

export const CurrencyRow = (props) => {

    const {currencyOptions, onChangeCurrency} = props
     
    let  symbols =  (currencyOptions[0]) 
 
    return (
        <div>
        
           <input type="number" className="input" />
           <select>
               {symbols.map( option =>(
                   <option key={option} value={option} > {option}</option>
               ))}
               
           </select>
        
        </div>
    )
}

export default CurrencyRow
