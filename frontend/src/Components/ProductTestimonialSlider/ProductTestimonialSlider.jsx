import React from 'react';
import './ProductTestimonialSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import orangeStar from "../../assets/orange-star-icon.svg"

const ProductTestimonialSlider = ({ testimonials }) => {
  if (!Array.isArray(testimonials)) return null;

  return (
    <div className="testimonials-slider pdt-slider">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={false}
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonialsInr">
                <div className="testiImg">
                  <img className="img-fluid clientImg" src={testimonial.clientImage} alt="" />
                  <div>
                    <h2>{testimonial.client}</h2>
                    <img className="img-fluid" src={orangeStar} alt="" />
                  </div>
                </div>
                <p>{testimonial.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductTestimonialSlider;
