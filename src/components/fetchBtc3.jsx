import React,{useState, useEffect} from 'react'


const FetchBtc3 = () => {
    const BtcUrl  = 'https://api.coindesk.com/v1/bpi/currentprice.json' 
    const gif = 'https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif'
    const [api, setApi] = useState([])


    const fetchBtcApi = async () =>{
        const response = await fetch(BtcUrl)
        const data = await response.json()
        const number = (JSON.parse(data.bpi.USD.rate_float))    
        setApi(number)
    }

  useEffect(()=>{
        setInterval(fetchBtcApi, 1000 )   

    }, )
    
        return (
            <div >
                    <h1> { api == 0  ?  <img src={gif} className="gif"/> : Math.trunc(api)  }  </h1>       
                   
            </div>
        )
    }
    export default FetchBtc3

    
