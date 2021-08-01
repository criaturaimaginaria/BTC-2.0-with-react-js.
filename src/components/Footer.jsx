import React from 'react'
import './Footer.css'



const Footer = () => {
    const crypto = <img src="https://getvectorlogo.com/wp-content/uploads/2019/10/crypto-com-vector-logo.png" className="mail"/>

    return (
      
            <footer >
            
                <div className="one-e">
                    <div className="contacto">
                         Contact 
                          <p> valkjavalkja@gmail.com</p>
                          <p> +54 221 6257635</p>
                     </div>

                    <div className="segundo"> 
                           
                    </div>
                </div>

                <div className="two-e"> 

                     <div className="Redes">
                           Networks & Music
                           <p>
                               <a href="https://github.com/criaturaimaginaria" target="_BLANK"> GitHub </a> <br></br>
                               <a href="https://www.youtube.com/channel/UCSJQMZALjc4pqR5FTnsn8TA" target="_BLANK"> YouTube </a>    
                          </p>
                     </div>                          
                    
                </div>
                

            </footer>    
 
    )
}

export default Footer
