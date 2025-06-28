import React from 'react'
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import OrangeIcon from '../../assets/orange-star-icon.svg';

const Testimonials = () => {
  return (
    <div className="testimonials-slider">
        <div className="container">
            <div className="all-heading">
                <h2>TESTIMONIALS</h2>
                <p>What Our Customers Are Saying</p>
            </div>
            <div className="custom-nav">
                <div className="custom-prev">
                    <img className="img-fluid" src="images/prev-icon.svg" alt="" />
                    <img className="img-fluid d-none" src="images/next-icon-hover.svg" alt="" />
                </div>
                <div className="custom-next">
                    <img className="img-fluid" src="images/next-icon.svg" alt="" />
                    <img className="img-fluid d-none" src="images/prev-icon-hover.svg" alt="" />
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev'
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                    576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                    },
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    }
                }}
                >
                <SwiperSlide>
                    <div className="testimonialsInr">
                        <div className="testiImg">
                            <img className="img-fluid clientImg" src="images/britney-jones.jpg" alt="" />
                            <div>
                                <h2>Britney Jones</h2>
                                <img className="img-fluid" src={OrangeIcon} alt="" />
                            </div>
                        </div>
                        <p>The bag looks even better in person and goes with everything. The craftsmanship is top-notch. It’s the perfect size, super versatile, and adds a touch of elegance to any outfit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonialsInr">
                        <div className="testiImg">
                            <img className="img-fluid clientImg" src="images/emily-wilson.jpg" alt="" />
                            <div>
                                <h2>Britney Jones</h2>
                                <img className="img-fluid" src={OrangeIcon} alt="" />
                            </div>
                        </div>
                        <p>It pairs beautifully with both casual and formal outfits, making it my go-to bag. The material feels premium and holds up well even with daily use , couldn’t be happier with this purchase!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonialsInr">
                        <div className="testiImg">
                            <img className="img-fluid clientImg" src="images/audie-dewey.jpg" alt="" />
                            <div>
                                <h2>Audie Dewey</h2>
                                <img className="img-fluid" src={OrangeIcon} alt="" />
                            </div>
                        </div>
                        <p>The design is both practical and stylish — it fits everything I need without compromising on looks.The strap is super comfortable, and the structure holds its shape beautifully.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonialsInr">
                        <div className="testiImg">
                            <img className="img-fluid clientImg" src="images/david-williams.png" alt="" />
                            <div>
                                <h2>David Williams</h2>
                                <img className="img-fluid" src={OrangeIcon} alt="" />
                            </div>
                        </div>
                        <p>It instantly elevates any outfit and makes me feel so put-together. The leather is soft yet durable, and the interior is thoughtfully designed for everyday essentials.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonialsInr">
                        <div className="testiImg">
                            <img className="img-fluid clientImg" src="images/britney-jones.jpg" alt="" />
                            <div>
                                <h2>Britney Jones</h2>
                                <img className="img-fluid" src={OrangeIcon} alt="" />
                            </div>
                        </div>
                        <p>The bag looks even better in person and goes with everything. The craftsmanship is top-notch. It’s the perfect size, super versatile, and adds a touch of elegance to any outfit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonialsInr">
                        <div className="testiImg">
                            <img className="img-fluid clientImg" src="images/emily-wilson.jpg" alt="" />
                            <div>
                                <h2>Britney Jones</h2>
                                <img className="img-fluid" src={OrangeIcon} alt="" />
                            </div>
                        </div>
                        <p>It pairs beautifully with both casual and formal outfits, making it my go-to bag. The material feels premium and holds up well even with daily use , couldn’t be happier with this purchase!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonialsInr">
                        <div className="testiImg">
                            <img className="img-fluid clientImg" src="images/audie-dewey.jpg" alt="" />
                            <div>
                                <h2>Audie Dewey</h2>
                                <img className="img-fluid" src={OrangeIcon} alt="" />
                            </div>
                        </div>
                        <p>The design is both practical and stylish — it fits everything I need without compromising on looks.The strap is super comfortable, and the structure holds its shape beautifully.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonialsInr">
                        <div className="testiImg">
                            <img className="img-fluid clientImg" src="images/david-williams.png" alt="" />
                            <div>
                                <h2>David Williams</h2>
                                <img className="img-fluid" src={OrangeIcon} alt="" />
                            </div>
                        </div>
                        <p>It instantly elevates any outfit and makes me feel so put-together. The leather is soft yet durable, and the interior is thoughtfully designed for everyday essentials.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials