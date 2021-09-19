import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Pijamas from './pages/pijamas';
import Conjuntos from './pages/conjuntos';
import Disfraces from './pages/disfraces';
import Footer from './components/footer';
import { useState } from 'react';
import Cart from './pages/Cart';


function App() {

  const [cart, setCart] = useState([])


  return (
    <Router>
      <NavBar 
        cart={cart}
        setCatr={setCart}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pijamas" component={() => <Pijamas cart={cart} setCart={setCart}/>}  />
        <Route path="/conjuntos" component={() => <Conjuntos cart={cart} setCart={setCart}/>} />
        <Route path="/disfraces" component={() => <Disfraces cart={cart} setCart={setCart}/>} />
        <Route path="/cart" component={() => <Cart cart={cart} setCart={setCart}/>} />
        <Route path="/facebook" component={() => { 
            window.location.href = 'https://www.facebook.com/Enchantee.Vip'; 
            return null;
        }}/>
        <Route path="/instagram" component={() => { 
            window.location.href = 'https://www.instagram.com/enchantee.vip/'; 
            return null;
        }}/>
        <Route path="/whatsapp" component={() => { 
            window.location.href = 'https://wa.me/+573013972058'; 
            return null;
        }}/>
      </Switch>
      <Footer/>
      
    </Router>

  );
}

export default App;
