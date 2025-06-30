import React from 'react';
import './Cart.css';
import { useCart } from '../../Context/CartContext';
import Banner from '../../Components/Banner/Banner';
import { Link } from 'react-router';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = subtotal + 5;
  return (
    <div>
      <Banner/>
      <div className="cartContent">
        <div className="container">
          {cart.length === 0 ? (
            <div className="row">
              <div className="col-md-12 text-center py-5">
                <h2>Your cart is empty.</h2>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-8">
                <div className="table-responsive">
                  <table className="table mb-0 cart-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map(item => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center gap-4 cartpdtcol1">
                              <img className="img-fluid cartpdtImg" src={item.image} alt={item.title}/>
                              <div>
                                <h4>{item.title}</h4>
                                {item.selectedColor && (
                                  <p>{item.selectedColor.charAt(0).toUpperCase() + item.selectedColor.slice(1)}</p>
                                )}
                              </div>
                              
                            </div>
                            
                          </td>
                          <td>₹{item.price.toFixed(2)}</td>
                          <td>
                            <div className="input-group qty-picker">
                              <button className="btn btn-outline-secondary qty-minus" type="button" onClick={() => dispatch({type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: Math.max(1, item.quantity - 1) },})}>−</button>
                              <input
                                className="form-control text-center qty-input"
                                type="number"
                                min="1"
                                max="10"
                                value={item.quantity}
                                onChange={(e) => {
                                  const value = Math.min(10, Math.max(1, parseInt(e.target.value) || 1));
                                  dispatch({
                                    type: 'UPDATE_QUANTITY',
                                    payload: { id: item.id, quantity: value },
                                  });
                                }}
                              />
                              <button
                                className="btn btn-outline-secondary qty-plus"
                                type="button"
                                onClick={() =>
                                  dispatch({
                                    type: 'UPDATE_QUANTITY',
                                    payload: { id: item.id, quantity: Math.min(10, item.quantity + 1) },
                                  })
                                }
                                disabled={item.quantity >= 10}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-between align-items-center">
                              ₹{(item.price * item.quantity).toFixed(2)}
                              <svg  className="removeIcon" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4446 10.4444L1.55566 1.55554M10.4446 1.55554L1.55566 10.4444" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-4">
               <div className="cart-summary">
                <h2>Cart Summary</h2>
                <div className="summary-items">
                  <p>Sub-Total ({totalItems} {totalItems === 1 ? 'Item' : 'Items'})</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="summary-items">
                  <p>Tax</p>
                  <p>$5.00</p>
                </div>
                <div className="summary-items">
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">Free</p>
                </div>
                <hr/>
                <div className="summary-items total-items">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <div className="disclaimTxt">
                  <p>The total amount you pay includes all applicable custom duties & taxes. We do not add additional charges on delivery</p>
                </div>
                <div className="all-btns">
                  <Link to="/checkout"><span className="shopbtn mb-2">Proceed to Checkout</span></Link>
                  <Link to="/shop"><span className="shopbtn mb-2">Continue Shipping</span></Link>
                </div>
                
               </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Cart;
