// import logo from './logo.svg';
import './App.css';
// import RouterCompo from './Route/RouterCompo';
import "../src/style.css"
import NavbarMenu from './Route/NavbarMenu';
// import Footer from './Route/Footer';
// import FooterCompo from './Component/FooterCompo';
import Footer from "../src/Route/Footer"
// import FooterCompo from './Component/FooterCompo';

function App() {
  // console.log(<FooterCompo /> )
  return (
    <div className="App">
     {/* <RouterCompo />  */}
     <p className="the"><span className="text-The">The</span> Siren</p>
     <NavbarMenu/>
     <Footer />
     {/* <FooterCompo /> */}
    
    </div>
  );
}

export default App;
