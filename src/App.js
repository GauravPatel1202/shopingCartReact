import React from 'react';
import './index.css';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div class="header">
                    <a href="#default" class="logo">React+Redux Shopping Cart</a>
                      <div class="header-right">
                         <a class="active" href="#home">Home</a>
                         <a href="#contact">Contact</a>
                         <a href="#about">About</a>
                        </div>
                </div>
             </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
            </footer>
        </div>
    );
}

export default App;
