import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Route,Link } from 'react-router-dom';
import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
    const userSignin =useSelector(state=> state.userSignin);
    const {userInfo} =userSignin;
  const openMenu =() =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu =() =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/"> Trà sữa quán Son</Link>
                    
                </div>
                <div>
                   
                <img className="logo" src="https://github.com/sontran2k0/trasua-reactjs.git/images/logo3.png" alt="logo"/>
                    </div>
                <div className="header-links">
                    <Link to="/cart/2?qty=1">Giỏ hàng</Link>
                    {
                        userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                         <Link to="/signin">Đăng nhập</Link>
                    }
                   
                    
                </div>
            </header>
            <aside className="sidebar">
                <h3>Các danh mục trà sữa</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                    <Link to="/"> Trà sữa latte</Link>
                        
                    </li>
                    <li>
                    <Link to="/"> Trà sữa đặt biệt</Link>
                        
                    </li>
                    <li>
                    <Link to="/"> Các loại đá xay</Link>
                       
                    </li>
                </ul>
            </aside>

            <main className="main">
                
                <div className="content">
                  <Route path="/signin" component={ SigninScreen}/>
                  <Route path="/shipping" component={ ShippingScreen}/>
                  <Route path="/payment" component={ PaymentScreen}/>
                  <Route path="/placeorder" component={ PlaceOrderScreen}/>
                  <Route path="/products" component={ ProductsScreen}/>
                  <Route path="/register" component={ RegisterScreen}/>
                  <Route path="/product/:id"  component={ProductScreen} />
                  <Route path="/cart/:id?"  component={CartScreen} />
                  <Route path="/" exact={true} component={HomeScreen} />
                    
                </div>
                
            </main>
            <footer className="footer">
                Giao hàng tận nơi.
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
