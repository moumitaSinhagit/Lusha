import React from 'react'
import './PaymentBadges.css'
import cubeicon from "../../assets/cubeicon.svg"
import sheildicon from "../../assets/sheildicon.svg"
import truckicon from "../../assets/truckicon.svg"
import recycleicon from "../../assets/recycleicon.svg"

const PaymentBadges = () => {
  return (
    <div className="payment-badges">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-6">
                    <div className="payment-badges-innr">
                        <img className="img-fluid" src={cubeicon} alt=""/>
                        <h3>Express Delivery</h3>
                        <p>Express delivery worldwide from our blog company</p>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="payment-badges-innr">
                        <img className="img-fluid" src={sheildicon} alt=""/>
                        <h3>Safe payments</h3>
                        <p>Payment in without fees from $100 of purchase</p>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="payment-badges-innr">
                        <img className="img-fluid" src={truckicon} alt=""/>
                        <h3>Shipping delivery</h3>
                        <p>Express delivery worldwide from our blog company</p>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="payment-badges-innr">
                        <img className="img-fluid" src={recycleicon} alt=""/>
                        <h3>Free return</h3>
                        <p>Free return for 7 days for any order delivered</p>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default PaymentBadges