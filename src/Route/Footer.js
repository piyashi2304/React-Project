import React from "react"
import {Link} from "react-router-dom"

function Footer(){
    return(
        
         <div className="parentfooter">
          <i class="fa-solid fa-blog blog"></i>
            <p>The Siren</p>
            <div>
               <h6> <Link to='/'>Home</Link></h6>
                <h6><Link to='/bollywood'>Bollywood</Link></h6>
                <h6><Link to='/technology'>Technology</Link></h6>
              
            </div>
            <div>
            <h6><Link to='/hollywood'>Hollywood</Link></h6>
            <h6><Link to='/fitness'>Fitness</Link></h6>
            <h6><Link to='/food'>Food</Link></h6>
            </div>
            
            <div className="icon">
          <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
         </div>
         <div className="icon">
         <i class="fa-brands fa-twitter"></i> 
         <i class="fa-brands fa-youtube"></i>
         <i class="fa-brands fa-snapchat"></i>
         </div>

        </div>
        
    )
}
export default Footer