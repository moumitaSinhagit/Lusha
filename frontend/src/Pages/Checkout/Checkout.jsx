import React from 'react'
import './Checkout.css'
import Banner from '../../Components/Banner/Banner'
import { useCart } from '../../Context/CartContext';
import { Link } from 'react-router';
import visaicon from "../../assets/visa-icon.svg";
import paypalicon from "../../assets/paypal-logo.svg";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = subtotal + 5;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
        toast.warning("No items in the cart");
        return;
    }
    const form = e.target;

    if (!form.checkValidity()) {
        e.stopPropagation();
    } else {
        dispatch({ type: 'CLEAR_CART' });
        navigate('/thankyou');
    }

    form.classList.add('was-validated');
    };
  return (
    <div>
        <Banner/>
        <div className="checkout-area">
            <div className="container">
                <form onSubmit={handleSubmit} noValidate >
                    <div className="row">
                        <div className="col-md-7">
                            <div className="all-heading">
                                <h2>Shipping Address</h2>
                            </div>
                            <div className="row">
                                
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder='First Name' required/>
                                        <div className="invalid-feedback">First name is required.</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder='Last Name' required/>
                                        <div className="invalid-feedback">Last name is required.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder='Company (Optional)'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder='Country/Region' required/>
                                        <div className="invalid-feedback">Country/Region is required.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder='Address' required/>
                                        <div className="invalid-feedback">Address is required.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder='Apartment, Suite, Etc (Optional)'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" placeholder='Email Address' required/>
                                        <div className="invalid-feedback">Address is required.</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder='Post Code' required/>
                                        <div className="invalid-feedback">Postcode is required.</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder='City' required/>
                                        <div className="invalid-feedback">City</div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="number" className="form-control" placeholder='Phone' required/>
                                        <div className="invalid-feedback">Phone</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                    <textarea className="form-control" placeholder="Order Notes (Optional)"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="save-info" type="checkbox" required/>
                                <label className="form-check-label" htmlFor="save-info">Save this information for the next time</label>
                            </div>
                            <div className="all-heading pt-5">
                                <h2>Shipping Method</h2>
                            </div>
                            <div className="ship-method">
                                <h2>Free Shipping on All Orders! </h2>
                                <p>No minimum purchase required. We’ll deliver straight to your door—on us!</p>
                            </div>
                            <div className="all-heading pt-4">
                                <h2>Payment Method</h2>
                            </div>
                            <div className="payment-methods">
                                <div className="pay-col">
                                    <p>Cash On Delivery</p>
                                </div>
                                <div className="pay-col">
                                    <img className="img-fluid" src={visaicon} alt="" width="" height="" />
                                </div>
                                <div className="pay-col">
                                    <img className="img-fluid" src={paypalicon} alt="" width="" height="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="cart-summary order-details">
                                <h2>Order Details</h2>
                                {cart.map(item => (
                                    <div key={item.id} className="d-flex align-items-center checkoutpdt-col">
                                        <div className="checkout-pdt-col1">
                                            <div className="checkout-pdtImg">
                                                <img className="img-fluid" src={item.image} alt={item.title}/>
                                                <span className="checkout-pdt-count">{item.quantity}</span>
                                            </div>
                                            <div className="checkout-pdtContent">
                                                <h3>{item.title}</h3>
                                                <p>{item.selectedColor}</p>
                                            </div>
                                        </div>
                                        <div className="checkout-pdt-col2">
                                            <p>${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
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
                                    <p>Your personal data will be used to process your order, support your experience throughout this website and for other purpose described in our <Link to="/privacy-policy"><span>privacy policy</span></Link></p>

                                    <div className="form-check">
                                        <input className="form-check-input" id="terms" type="checkbox" required/>
                                        <label className="form-check-label mb-3" htmlFor="terms">I have read and agree to the website <Link to="/terms-conditions"><span>terms and conditions</span></Link></label>
                                    </div>
                                </div>
                                <div className="all-btns">
                                    <button type="submit" className="shopbtn" disabled={cart.length === 0}>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Checkout