import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.png"
import helpicon from "../../assets/helpicon.svg"
import phoneicon from "../../assets/phoneicon.svg"
import envelopicon from "../../assets/envelopicon.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import envelope from "../../assets/envelope.svg"
import paymenticon from "../../assets/paymenticon.png"
import { Link } from 'react-router'

function Footer() {
  return (
    <div>
        <div className="help-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="all-heading pb-0">
                            <h2>WE’RE ALWAYS HERE TO HELP</h2>
                            <p>You can get help by choosing from any these options</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4 col-6">
                                <div className="iconBagdes">
                                    <img className="img-fluid" src={helpicon} alt=""/>
                                    <div>
                                        <h3>Help Center</h3>
                                        <a href="#">lusha.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="iconBagdes">
                                    <img className="img-fluid" src={phoneicon} alt=""/>
                                    <div>
                                        <h3>Phone</h3>
                                        <a href="tel:800-000-000">800-000-000</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="iconBagdes">
                                    <img className="img-fluid" src={envelopicon} alt=""/>
                                    <div>
                                        <h3>Email</h3>
                                        <a href="mailto:helplusha@gmail.com">helplusha@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ftr-col1">
                        <img src={logo} alt="Logo" className="img-fluid ftrLogo" />
                        <p>Timeless style, crafted for the modern woman. Discover handbags that blend elegance, and everyday luxury.</p>
                        <ul>
                            <li><a href="#"><img className="img-fluid" src={facebook} alt=""/></a></li>
                            <li><a href="#"><img className="img-fluid" src={instagram} alt=""/></a></li>
                            <li><a href="#"><img className="img-fluid" src={twitter} alt=""/></a></li>
                            <li><a href="#"><img className="img-fluid" src={envelope} alt=""/></a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <div className="all-heading">
                            <h2>HELP INFORMATION</h2>
                            <ul className="ftrLinks">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/return-policy">Return Policy</Link></li>
                                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="all-heading">
                            <h2>DISCOVER LUSHA</h2>
                            <ul className="ftrLinks">
                                <li><Link to="/shop">Shop All</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/shop?bestseller=true" onClick={() => {
                                    if (window.location.pathname === '/shop') {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}>Best Sellers</Link></li>
                                <li><Link to="/wishlist">Wishlist</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="all-heading">
                            <h2>LUSHA FAVS</h2>
                            <ul className="ftrLinks">
                                <li><Link to="/shop?category=Tote+Bags">Tote Bags</Link></li>
                                <li><Link to="/shop?category=Sling+Bags">Slings Bags</Link></li>
                                <li><Link to="/shop?category=Clutches+%26+Evening+Bags">Cluthes</Link></li>
                                <li><Link to="/shop?category=Handbags">Hand Bags</Link></li>
                                <li><Link to="/shop?category=BackPacks">Backpacks</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="copyRght">
                    <p>© Copyright 2025 Lusha. All rights reserved.</p>
                    <img className="img-fluid" src={paymenticon} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer