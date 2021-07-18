import React,{useState, useEffect} from 'react'


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
    
        return (
            <div className="bitcoin">

                   <h1> Bitcoin </h1>
                   <h1>Current price: {api} USD</h1>
                   
                   <h1> Market cap: {Mcap}</h1>
                   <img src={api2}  alt="BTC"/>

               

            <h2>BTC to USD </h2>
            <form >   
                <input type="text" name="satoshi" placeholder="BTC"/>

                <input  type="text" name="dollar2" placeholder="USD"/>

                <input type="button" value="convert"/>
            </form> 

            <h2>USD to BTC </h2>
            <form>   
                <input type="text" name="satoshi" placeholder="USD"/>

                <input  type="text" name="dollar2" placeholder="BTC"/>

                <input type="button" value="convert" />
            </form> 


                   
            </div>
        )
    }
    export default BTCmarket
