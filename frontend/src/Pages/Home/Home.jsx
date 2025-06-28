import React from 'react'
import HeroSlider from '../../Components/HeroSlider/HeroSlider'
import ProductCards from '../../Components/ProductCards/ProductCards';
import './Home.css';
import { Link } from 'react-router-dom';
import Testimonials from '../../Components/Testimonials/Testimonials';
import PaymentBadges from '../../Components/PaymentBadges/PaymentBadges';

const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <div className="home-category-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="cat-bg-inr">
                  <h4>Effortless Charm</h4>
                  <h2>Pouch Bags</h2>
                  <Link className="shopbtn" to="/shop">Shop Now</Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cat-bg-inr">
                  <h4>Everyday Elegance</h4>
                  <h2>Chic Totes</h2>
                  <Link className="shopbtn" to="/shop">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductCards/>
        <div className="welcome-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2>WELCOME TO LUSHA</h2>
                <p>Discover timeless style with Lusha. Our handcrafted handbags blend modern design with classic sophistication, offering versatile pieces for every moment. Crafted with care, carried with confidence.</p>
                <Link className="shopbtn" to="/about">Know More</Link>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src="images/bags-combo.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="bags-cat">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="bag-cat-innr">
                  <div className="bag-cat-img">
                    <img className="img-fluid" src="images/hobo.jpg" alt=""/>
                  </div>
                  <div className="bag-cat-title">
                    <h2>Hobo</h2>
                    <Link className="shopbtn" to="/shop">View More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bag-cat-innr">
                  <div className="bag-cat-img">
                    <img className="img-fluid" src="images/pouch.jpg" alt=""/>
                  </div>
                  <div className="bag-cat-title">
                    <h2>Pouch</h2>
                    <Link className="shopbtn" to="/shop">View More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bag-cat-innr">
                  <div className="bag-cat-img">
                    <img className="img-fluid" src="images/saddle.jpg" alt=""/>
                  </div>
                  <div className="bag-cat-title">
                    <h2>Saddle</h2>
                    <Link className="shopbtn" to="/shop">View More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta">
          <div className="container">
            <div className="col-md-6 mx-auto text-center">
              <h2>New Arrivals</h2>
              <img className="img-fluid handbagTxt d-md-block d-none" src="images/handbags-text.png" alt=""/>
              <img className="img-fluid handbagTxt d-md-none d-block" src="images/handbags-text-mobile.png" alt=""/>
              <Link className="shopbtn" to="/shop">Shop Now</Link>
            </div>
          </div>
        </div>
        <Testimonials/>
        <PaymentBadges/>
    </div>
  )
}

export default Home