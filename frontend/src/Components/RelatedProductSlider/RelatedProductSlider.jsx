import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard/ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './RelatedProductSlider.css';

const RelatedProductSlider = ({ relatedProducts }) => {
  return (
    <div className="product-cards related-products-slider">
     <div className="container">
      <div className="all-heading text-center">
        <h2>RELATED BAGS</h2>
        <p>Bags you may also like to see</p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        modules={[Pagination]}
        pagination={{ clickable: true }}
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
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  )
}

export default RelatedProductSlider