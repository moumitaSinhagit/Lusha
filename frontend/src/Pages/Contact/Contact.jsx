import React from 'react'
import Banner from '../../Components/Banner/Banner'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <Banner/>
        <div className="contactUs">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="all-heading">
                            <h2>GET IN TOUCH</h2>
                            <p>We’d love to hear from you! Reach out with any questions, feedback, or just to say hello — the Lusha team is always here to help.</p>
                        </div>
                        <div className="contactCol">
                            <svg width="29" height="45" viewBox="0 0 29 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 21.0312C17.7447 21.0312 20.375 18.4009 20.375 15.1562C20.375 11.9116 17.7447 9.28125 14.5 9.28125C11.2553 9.28125 8.625 11.9116 8.625 15.1562C8.625 18.4009 11.2553 21.0312 14.5 21.0312Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M26.2507 21.0312C21.8444 31.3125 14.5007 43.0625 14.5007 43.0625C14.5007 43.0625 7.15691 31.3125 2.75066 21.0312C-1.65559 10.75 5.68816 1.9375 14.5007 1.9375C23.3132 1.9375 30.6569 10.75 26.2507 21.0312Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div>
                                <h3>Address</h3>
                                <p>222 E Mitchell St, Petoskey, Michigan <br/> Post-Code - 49770 U.S.A</p>
                            </div>
                        </div>
                        <div className="contactCol">
                            <svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.91146 0.916687C3.80777 0.916687 2.74929 1.35513 1.96886 2.13555C1.18844 2.91597 0.75 3.97446 0.75 5.07815V35.9219C0.75 37.0256 1.18844 38.0841 1.96886 38.8645C2.74929 39.6449 3.80777 40.0834 4.91146 40.0834H20.0885C21.1922 40.0834 22.2507 39.6449 23.0311 38.8645C23.8116 38.0841 24.25 37.0256 24.25 35.9219V5.07815C24.25 3.97446 23.8116 2.91597 23.0311 2.13555C22.2507 1.35513 21.1922 0.916687 20.0885 0.916687H4.91146ZM3.19792 5.07815C3.19792 4.13227 3.96558 3.3646 4.91146 3.3646H20.0885C21.0354 3.3646 21.8021 4.13227 21.8021 5.07815V35.9219C21.8021 36.3764 21.6216 36.8122 21.3002 37.1336C20.9788 37.4549 20.543 37.6354 20.0885 37.6354H4.91146C4.457 37.6354 4.02115 37.4549 3.6998 37.1336C3.37845 36.8122 3.19792 36.3764 3.19792 35.9219V5.07815ZM9.80729 31.7604C9.48268 31.7604 9.17136 31.8894 8.94182 32.1189C8.71229 32.3485 8.58333 32.6598 8.58333 32.9844C8.58333 33.309 8.71229 33.6203 8.94182 33.8499C9.17136 34.0794 9.48268 34.2084 9.80729 34.2084H15.1927C15.5173 34.2084 15.8286 34.0794 16.0582 33.8499C16.2877 33.6203 16.4167 33.309 16.4167 32.9844C16.4167 32.6598 16.2877 32.3485 16.0582 32.1189C15.8286 31.8894 15.5173 31.7604 15.1927 31.7604H9.80729Z" fill="black"/>
                            </svg>
                            <div>
                                <h3>Phone Number</h3>
                                <p>(231) 347-3255</p>
                            </div>
                        </div>
                        <div className="contactCol">
                            <svg width="37" height="29" viewBox="0 0 37 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.125 0.546875H0.875C0.680232 0.546875 0.493441 0.624247 0.355719 0.761969C0.217997 0.899691 0.140625 1.08648 0.140625 1.28125V26.25C0.140625 26.8343 0.372739 27.3947 0.785905 27.8078C1.19907 28.221 1.75944 28.4531 2.34375 28.4531H34.6562C35.2406 28.4531 35.8009 28.221 36.2141 27.8078C36.6273 27.3947 36.8594 26.8343 36.8594 26.25V1.28125C36.8594 1.08648 36.782 0.899691 36.6443 0.761969C36.5066 0.624247 36.3198 0.546875 36.125 0.546875ZM18.5 16.4406L2.76234 2.01562H34.2377L18.5 16.4406ZM14.2094 14.5L1.60938 26.0499V2.95012L14.2094 14.5ZM15.2963 15.4969L18.0043 17.9883C18.1397 18.1121 18.3165 18.1808 18.5 18.1808C18.6835 18.1808 18.8603 18.1121 18.9957 17.9883L21.7037 15.5061L34.2377 26.9844H2.76234L15.2963 15.4969ZM22.7906 14.5L35.3906 2.95012V26.0499L22.7906 14.5Z" fill="black"/>
                            </svg>

                            <div>
                                <h3>Email Adress</h3>
                                <p>buyatlusha@gmail.com</p>
                            </div>
                        </div>
                        <div className="contactCol">
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.6139 19.5C37.6139 24.3043 35.7054 28.9118 32.3083 32.309C28.9111 35.7061 24.3036 37.6146 19.4993 37.6146C14.6951 37.6146 10.0875 35.7061 6.6904 32.309C3.29326 28.9118 1.38477 24.3043 1.38477 19.5C1.38477 14.6957 3.29326 10.0882 6.6904 6.69108C10.0875 3.29393 14.6951 1.38544 19.4993 1.38544C24.3036 1.38544 28.9111 3.29393 32.3083 6.69108C35.7054 10.0882 37.6139 14.6957 37.6139 19.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.0312 9.21875V20.9688H25.8646" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div>
                                <h3>Open Hours</h3>
                                <p className="mb-0">Monday to Friday 09:30 - 17:30</p>
                                <p>Saturday & Sunday 10:00 - 15:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="cntHd">SEND US A MESSAGE</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder='Your Name' required/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" placeholder='Email' required/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="number" className="form-control" placeholder='Phone' required/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder='Subject (Optional)' required/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <textarea className="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button className="shopbtn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact