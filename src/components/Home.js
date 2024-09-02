import React, { useState } from 'react';
import '../App.css';
import { useLocation ,useNavigate} from 'react-router-dom';
const ShoppingCart = () => {
  const navigate=useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
    { id: 3, name: 'Product 3', price: 9.99, quantity: 1 },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  const location=useLocation()
  console.log(location.pathname)

  const view=()=>{
    navigate("/about")
  }
  return (
    <div className="shopping-cart">
      <h2 onClick={view}>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="item-quantity">
              <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <div className="item-total">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
