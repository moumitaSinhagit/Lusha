import React from 'react'
import './About.css'
import Banner from '../../Components/Banner/Banner'
import { Link } from 'react-router'
import Testimonials from '../../Components/Testimonials/Testimonials'
import PaymentBadges from '../../Components/PaymentBadges/PaymentBadges'

const About = () => {
  return (
    <div class="abtPge">
        <Banner/>
        <div className="about-col">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p>Born from a passion for timeless design and everyday elegance, Lusha was created to offer women beautifully crafted accessories that blend style, function, and conscious living. Each piece is thoughtfully designed to empower your daily journey</p>
                        <p>At Lusha, we believe that fashion should feel good inside and out. That’s why we focus on sustainable materials, ethical production, and versatile designs that elevate your everyday.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="all-heading d-md-none d-block">
                            <h2>OUR STORY</h2>
                        </div>
                        <img className="img-fluid" src="images/aboutone.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-col about-col2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="all-heading">
                            <h2>WHO WE ARE?</h2>
                        </div>
                        <p>We take pride in our commitment to ethical craftsmanship, using cruelty-free materials and sustainable practices to bring our vision to life. Every Lusha bag is thoughtfully made to be more than just an accessory it’s a reflection of who you are.</p>
                        <p>At Lusha, we are a team of passionate creators, designers, and dreamers dedicated to redefining everyday elegance. Our mission is to craft timeless accessories that are as functional as they are fashionable pieces that seamlessly fit into your lifestyle while making you feel confident and empowered.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="images/abouttwo.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="collections">
            <div className="container">
                <div className="col-md-10 mx-auto">
                    <div className="all-heading text-center">
                        <h2>OUR COLLECTIONS</h2>
                         <p className="text-center">At Lusha, our collections are thoughtfully curated to blend timeless style with everyday functionality. From elegant totes to chic shoulder bags, each piece is designed with versatile silhouettes, premium materials, and refined details to complement your lifestyle. Whether you're dressing up or down, Lusha offers the perfect bag for every moment.</p>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/shop?category=Tote+Bags"><img className="img-fluid" src="images/collections-one.jpg" alt="" /></Link>
                    </div>
                    <div className="col-md-6">
                         <Link to="/shop?category=Sling+Bags"><img className="img-fluid" src="images/collections-two.jpg" alt="" /></Link>
                        <Link to="/shop?category=BackPacks"><img className="img-fluid" src="images/collections-three.jpg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
        <Testimonials/>
        <PaymentBadges/>
    </div>
  )
}

export default About