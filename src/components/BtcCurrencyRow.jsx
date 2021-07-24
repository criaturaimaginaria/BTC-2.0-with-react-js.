import React from 'react'

export const BtcCurrencyRow = (props) => {

    // const {currencyOptions, onChangeCurrency} = props
    //  console.log(props.currencyOptions[0 , 0 ])
    let  symbols =  (props.currencyOptions[0]) 
    const selectedCurr = (props?.selectedCurrency)
    const selectCurr = (props?.selectCurrency)
    const priceAmount = (props.amount)

    const onChangeCurr = (props.onChangeCurrency)

    const amountChange = (props.onChangeAmount)

    // console.log(selectedCurr)
    return (
        <div>
        
           <input type="number" className="input" value={priceAmount} onChange={amountChange} />
           <select value= {selectedCurr?.symbol}  onChange={onChangeCurr}>
               {symbols?.map( option =>(
                   <option key={option} value={option} > {option} </option>
               ))}
            
           </select>
        
        </div>
    )
}

export default BtcCurrencyRow
