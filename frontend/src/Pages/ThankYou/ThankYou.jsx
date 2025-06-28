import React from 'react'
import succesIcon from "../../assets/succes-icon.svg"
import { Link } from 'react-router'
import './ThankYou.css'

const ThankYou = () => {
  return (
    <div className="thank-you">
      <div className="container">
        <div className='col-md-8 text-center mx-auto'>
          <img className="img-fluid" src={succesIcon} alt="" />
          <h2>Payment Successful</h2>
          <p>Thank You For Choosing Lusha, Your Order Will Be Generated Based On Your Delivery Request </p>
          <p>The Receipt Has Been Sent To Your Email</p>
          <Link to="/shop" className="shopbtn">Continue Shopping</Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYou