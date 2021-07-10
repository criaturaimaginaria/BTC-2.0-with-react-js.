import React from 'react'

const FetchBtc = () => {

   
    const getPrice = () => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.bpi.USD.rate_float)
         
        })
    }

    return (
        <div>
            <h1>price BTC</h1>
            <button onClick={getPrice}>Get Bitcoin price</button>
            <h2>price:</h2>
        </div>
    )
}

export default FetchBtc
