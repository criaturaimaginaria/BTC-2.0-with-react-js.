import React, {useState, useEffect} from 'react'

const Ethereum = () => {
    const BtcUrl  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' 
    
    const [api, setApi] = useState()
    const[Mcap, setMcap] = useState()
    const[img, setImg] = useState()


    const marketapi = async () =>{
        const response = await fetch(BtcUrl)
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
    
    return (
        <div className="ETH">
            <h1>Ethereum </h1>
            <h1>Current price: {Math.trunc(api)} USD </h1>
            <h1>Market cap: {Mcap} </h1>
            <img src={img}  alt="ETH"/>


            <h2>ETH to USD </h2>
            <form>   
                <input type="text" name="satoshi" placeholder="ETH"/>

                <input  type="text" name="dollar2" placeholder="USD"/>

                <input type="button" value="convert" />
            </form> 

            <h2>USD to ETH </h2>
            <form>   
                <input type="text" name="satoshi" placeholder="USD"/>

                <input  type="text" name="dollar2" placeholder="ETH"/>

                <input type="button" value="convert" />
            </form> 

        </div>
    )
}

export default Ethereum
