import Home from "../Component/Home"
import Bollywood from "../Component/Bollywood"
import Technology from "../Component/Technology"
import Hollywood from "../Component/Hollywood"
import Fitness from "../Component/Fitness"
import Food from "../Component/Food"
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import StoreCompo from "../Component/StoreCompo"
import DynamicCompo from "./DynamicCompo"
// import FooterCompo from "../Component/FooterCompo"
import Footer from "./Footer"


function RouterCompo(){
    return(
        <>
        <p className="the"><span className="text-The">The</span> Siren</p>
        <BrowserRouter>
        <div className="navbar">
        <Link style={{color:"black", textDecoration:"none"}} to='/'>Home</Link>
        <Link style={{color:"black", textDecoration:"none"}} to='/bollywood'>Bollywood</Link>
        <Link style={{color:"black", textDecoration:"none"}} to='/technology'>Technology</Link>
        <Link style={{color:"black", textDecoration:"none"}} to='/hollywood'>Hollywood</Link>
        <Link style={{color:"black", textDecoration:"none"}} to='/fitness'>Fitness</Link>
        <Link style={{color:"black", textDecoration:"none"}} to='/food'>Food</Link>
        </div>
        <StoreCompo>
          <Routes>
            <Route path='/' element ={<Home />} />
            <Route path='/bollywood' element ={<Bollywood />}  />
            <Route path='/technology' element ={<Technology />} />
            <Route path='/hollywood' element ={<Hollywood />}/>
            <Route path='/fitness'  element ={<Fitness />}/>
            <Route path='/food' element ={<Food />}/>
            <Route path='/details/:id' element={<DynamicCompo />} />
          </Routes>
          </StoreCompo>
          <Footer /> 
          {/* <FooterCompo /> */}
        </BrowserRouter>
        {/* <Footer /> */}
        </>
    )
}
export default RouterCompo