import Header from './Components/Home/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Item from './Components/Products/Item';
import About from './Components/Footer/About';
import Wishlist from './Components/Home/Wishlist';
import Cart from './Components/Home/Cart';
import Footer from './Components/Footer/Footer' ;
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="products" element={<Products />} />
          <Route path='/item' element ={<Item/>} />
          <Route path='/about' element = {<About/>} />  
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='cart' element={<Cart />} />   
          <Route path="/products/:id" element={<Item />} />
        </Routes>
        <br></br><br></br>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
