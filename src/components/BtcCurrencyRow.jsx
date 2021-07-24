import React from 'react'

export const BtcCurrencyRow = (props) => {

    // const {currencyOptions, onChangeCurrency} = props
    //  console.log(props.currencyOptions[0 , 0 ])
    const priceAmount = (props.amount)


    const amountChange = (props.onChangeAmount)

    // console.log(selectedCurr)
    return (
        <div>
        
           <input type="number" className="input" value={priceAmount} onChange={amountChange} />
 
        </div>
    )
}

export default BtcCurrencyRow
