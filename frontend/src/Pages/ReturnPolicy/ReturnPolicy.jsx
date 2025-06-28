import React from 'react'
import Banner from '../../Components/Banner/Banner'
import './ReturnPolicy.css'

const ReturnPolicy = () => {
  return (
    <div>
        <Banner/>
        <div className="return-policy"> 
            <div className="container">
                <p>Effective Date: 06.26.2025</p>
                <h2>Return & Exchange Policy</h2>
                <p>At Lusha, we take pride in the craftsmanship and care that go into each of our products. If, for any reason, you’re not fully satisfied with your purchase, we’re here to make things right.</p>
                <p>We accept returns and exchanges within 14 days of delivery. To be eligible, items must be unused, in their original condition, and returned with all original tags and packaging intact. Returns that do not meet these conditions may not be accepted.</p>
                <p>To initiate a return, please email us at <a href="mailto:returns@lusha.com">returns@lusha.com</a> with your order number and reason for return. Once your request is approved, we’ll provide return instructions and a shipping address. Please note that return shipping costs are the responsibility of the customer, unless the item arrived damaged or was sent in error.</p>
                <p>We recommend using a trackable shipping method, as we cannot be held responsible for items lost in transit. Once we receive and inspect your return, we’ll issue your refund to the original method of payment within <b>5–7 business days</b>. You’ll receive a confirmation email once your refund has been processed.</p>
                <p>If you received a damaged or defective item, please contact us within <b>48 hours</b> of delivery with photos of the issue, and we’ll arrange a replacement or full refund at no extra cost to you.</p>
                <p>Please note: We do not offer refunds on <b>final sale items, gift cards,</b> or <b>customized products,</b> unless they arrive damaged.</p>
                <p>Our goal is to ensure that every experience with Lusha feels thoughtful and worry-free. If you have any questions about sizing, materials, or how to care for your item before purchasing, we encourage you to reach out—we’re always happy to help.</p>
                <p>For all return or exchange inquiries, contact us at:</p>
                <p><b>Email:</b> <a href="mailto:returns@lusha.com">returns@lusha.com</a></p>
                <p><b>Phone Number:</b> (231) 347-3255</p>
                <p><b>Address:</b> 222 E Mitchell St, Petoskey, Michigan Post-Code - 49770 U.S.A</p>
            </div>
        </div>
    </div>
  )
}

export default ReturnPolicy