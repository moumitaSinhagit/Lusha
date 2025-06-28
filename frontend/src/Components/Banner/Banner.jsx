import React from 'react'
import './Banner.css'
import { Link, useLocation  } from 'react-router'

const pageTitles = {
  '/': 'Home',
  '/shop': 'Products',
  '/cart': 'Your Cart',
  '/about': 'About Lusha',
  '/contact': 'Contact Us',
  '/checkout': 'Checkout',
  '/wishlist': 'Your Wishlist',
  '/privacy-policy': 'Privacy Policy',
  '/return-policy': 'Return Policy',
  '/terms-conditions': 'Terms & Conditions',
};

const breadcrumbLabels = {
  '/': null,
  '/shop': 'Products',
  '/cart': 'Cart',          
  '/about': 'About Us',
  '/contact': 'Contact Us',
  '/checkout': 'Checkout',
  '/privacy-policy': 'Privacy Policy',
  '/terms-conditions': 'Terms & Conditions',
};

const Banner = () => {
  const location = useLocation();
  const path = location.pathname;
  const title = pageTitles[path] || 'Page';
  const breadcrumb = breadcrumbLabels[path];
  const pageClass = path.replace('/', '') || 'home';

  return (
    <div className={`banner-area ${pageClass}-banner`}>
        <div className="container">
            <div className="col-md-6 mx-auto text-center">
                <h2>{title}</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {breadcrumb && <li>{breadcrumb}</li>}
                </ul>
            </div>
        </div>    
    </div>
  )
}

export default Banner