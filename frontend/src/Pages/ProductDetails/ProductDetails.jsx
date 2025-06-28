import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import PaymentBadges from '../../Components/PaymentBadges/PaymentBadges';
import ProductTestimonialSlider from '../../Components/ProductTestimonialSlider/ProductTestimonialSlider';
import RelatedProductSlider from '../../Components/RelatedProductSlider/RelatedProductSlider';
import { useCart } from '../../Context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const maxQty = 10;
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = storedCart.find(item => item.id.toString() === id);
    if (existing) {
      setQuantity(existing.quantity);
    }
  }, [id]);

  useEffect(() => {
    fetch('/product.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id.toString() === id);
        setProduct(found);
        if (found && found.imagesByColor) {
          const colors = Object.keys(found.imagesByColor);
          if (colors.length) setSelectedColor(colors[0]);
        }

        if (found && found.relatedProductIds) {
          const related = data.filter(p => found.relatedProductIds.includes(p.id));
          setRelatedProducts(related);
        }

      });
  }, [id]);

  

  if (!product) return <p>Loading...</p>;

  const primaryCategory =
    Array.isArray(product.categories) && product.categories.length > 0
      ? product.categories[0]
      : 'Uncategorized';

  const slides =
    product.imagesByColor && product.imagesByColor[selectedColor]
      ? product.imagesByColor[selectedColor]
      : Array.isArray(product.thumbnail) && product.thumbnail.length > 0
      ? product.thumbnail
      : [product.image];


  const handleMinus = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handlePlus = () => {
    setQuantity(prev => (prev < maxQty ? prev + 1 : maxQty));
  };

  const handleInputChange = (e) => {
    const value = Math.max(1, Math.min(maxQty, Number(e.target.value)));
    setQuantity(value);
  };

  
  const handleAddToCart = () => {
    const selectedImage =
    product.imagesByColor && product.imagesByColor[selectedColor]
      ? product.imagesByColor[selectedColor][0]
      : product.image;
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity, selectedColor, image: selectedImage, } });
  };

  

  return (
    <div>
      <div className="productDetails">
        <div className="container">
          <ul className="cat-breadcrumbs">
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to={`/shop?category=${encodeURIComponent(primaryCategory)}`}>
                {primaryCategory}
              </Link>
            </li>
            <li>{product.title}</li>
          </ul>
          <div className="pdt-main">
            <div className="row">
              <div className="col-md-6">
                <Swiper
                  style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                  spaceBetween={10}
                  navigation
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {slides.map((src, idx) => (
                    <SwiperSlide key={`main-${idx}`}><img className="img-fluid" src={src} alt={`${product.title} view ${idx+1}`} /></SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode
                  watchSlidesProgress
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {slides.map((src, idx) => (
                    <SwiperSlide key={`thumb-${idx}`}><img className="img-fluid" src={src} alt={`Thumbnail ${idx+1}`} /></SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-md-6">
                <div className="details-right">
                  <h2 className="product-title">{product.title}</h2>
                  <div className="price-area">
                    <div className="price-col1">
                      <p className="mb-0"><strike>${product.oldPrice.toFixed(2)}</strike> <strong>${product.price.toFixed(2)}</strong></p>
                    </div>
                    <div className="price-col2">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99984 14.275L4.84984 16.775C4.66651 16.8917 4.47484 16.9417 4.27484 16.925C4.07484 16.9083 3.89984 16.8417 3.74984 16.725C3.59984 16.6083 3.48317 16.4627 3.39984 16.288C3.31651 16.1133 3.29984 15.9173 3.34984 15.7L4.44984 10.975L0.774841 7.80001C0.608174 7.65001 0.504174 7.47901 0.462841 7.28701C0.421507 7.09501 0.433841 6.90768 0.499841 6.72501C0.565841 6.54235 0.665841 6.39235 0.799841 6.27501C0.933841 6.15768 1.11717 6.08268 1.34984 6.05001L6.19984 5.62501L8.07484 1.17501C8.15817 0.975012 8.28751 0.825012 8.46284 0.725012C8.63817 0.625012 8.81717 0.575012 8.99984 0.575012C9.18251 0.575012 9.36151 0.625012 9.53684 0.725012C9.71217 0.825012 9.84151 0.975012 9.92484 1.17501L11.7998 5.62501L16.6498 6.05001C16.8832 6.08335 17.0665 6.15835 17.1998 6.27501C17.3332 6.39168 17.4332 6.54168 17.4998 6.72501C17.5665 6.90835 17.5792 7.09601 17.5378 7.28801C17.4965 7.48001 17.3922 7.65068 17.2248 7.80001L13.5498 10.975L14.6498 15.7C14.6998 15.9167 14.6832 16.1127 14.5998 16.288C14.5165 16.4633 14.3998 16.609 14.2498 16.725C14.0998 16.841 13.9248 16.9077 13.7248 16.925C13.5248 16.9423 13.3332 16.8923 13.1498 16.775L8.99984 14.275Z" fill="#EE7B7B"/>
                      </svg>
                      <p>{product.rating} ( {product.ratingNo} Reviews )</p>
                    </div>
                  </div>
                  <hr />
                  <div className="short-description">
                    <p>{product.shortDescription}</p>
                  </div>

                  {/* Color Selection */}
                  {product.imagesByColor && (
                    <div className="pdt-color">
                      <p>Select Color:</p>
                      <div className="colortabs">
                        {Object.keys(product.imagesByColor).map(color => (
                          <div
                            key={color}
                            className={`colorDivs ${selectedColor === color ? 'active' : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="qty-main">
                    <div className="input-group qty-picker my-3" data-max={maxQty}>
                      <button className="btn btn-outline-secondary qty-minus" type="button" onClick={handleMinus}>−</button>
                      <input className="form-control text-center qty-input" type="number" value={quantity} onChange={handleInputChange}/>
                      <button className="btn btn-outline-secondary qty-plus" type="button" onClick={handlePlus} disabled={quantity >= maxQty}>+</button>
                    </div>
                    <div className="addcrtMain">
                      <button onClick={handleAddToCart} id="add-to-cart-btn" className="shopbtn">
                        <span className="btn-text">Add To Cart</span>
                      </button>
                    </div>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Product Dimensions & Care
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: product.accordianOneContent }}/>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Shipping & Return Policy
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          All orders are processed within 1-2 business days. Standard shipping (3-5 business days) is free on orders over $100; a flat $5 fee applies otherwise. Expedited options (1-2 business days) are available at checkout. You'll receive a tracking number as soon as your package ships.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Manufacturing Details
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: product.accordianThreeContent }}/>
                      </div>
                    </div>
                  </div>
                  <div className="freeshipTxt">
                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.9998 17.5834C19.5357 17.5834 19.0906 17.399 18.7624 17.0708C18.4342 16.7426 18.2498 16.2975 18.2498 15.8334C18.2498 15.3692 18.4342 14.9241 18.7624 14.5959C19.0906 14.2677 19.5357 14.0834 19.9998 14.0834C20.464 14.0834 20.9091 14.2677 21.2373 14.5959C21.5655 14.9241 21.7498 15.3692 21.7498 15.8334C21.7498 16.2975 21.5655 16.7426 21.2373 17.0708C20.9091 17.399 20.464 17.5834 19.9998 17.5834ZM21.7498 7.08335L24.0365 10H18.8332V7.08335M5.99984 17.5834C5.53571 17.5834 5.09059 17.399 4.7624 17.0708C4.43421 16.7426 4.24984 16.2975 4.24984 15.8334C4.24984 15.3692 4.43421 14.9241 4.7624 14.5959C5.09059 14.2677 5.53571 14.0834 5.99984 14.0834C6.46397 14.0834 6.90909 14.2677 7.23727 14.5959C7.56546 14.9241 7.74984 15.3692 7.74984 15.8334C7.74984 16.2975 7.56546 16.7426 7.23727 17.0708C6.90909 17.399 6.46397 17.5834 5.99984 17.5834ZM22.3332 5.33335H18.8332V0.666687H2.49984C1.20484 0.666687 0.166504 1.70502 0.166504 3.00002V15.8334H2.49984C2.49984 16.7616 2.86859 17.6518 3.52496 18.3082C4.18134 18.9646 5.07158 19.3334 5.99984 19.3334C6.92809 19.3334 7.81833 18.9646 8.47471 18.3082C9.13109 17.6518 9.49984 16.7616 9.49984 15.8334H16.4998C16.4998 16.7616 16.8686 17.6518 17.525 18.3082C18.1813 18.9646 19.0716 19.3334 19.9998 19.3334C20.9281 19.3334 21.8183 18.9646 22.4747 18.3082C23.1311 17.6518 23.4998 16.7616 23.4998 15.8334H25.8332V10L22.3332 5.33335Z" fill="#EE7B7B"/>
                    </svg>
                    <p>Free Shipping above $100.00</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tabs">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">DESCRIPTION</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">ADDITIONAL INFORMATION</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">REVIEWS</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
              <div className="container">
                <div className="all-heading">
                    <h2>PRODUCT DETAILS</h2>
                    <p>Info About {product.title}</p>
                </div>
                <div className="row tabContent-para">
                  <div className="col-md-7">
                    <p>{product.descriptionTab}</p>
                  </div>
                  <div className="col-md-5">
                    <h5>Key Features</h5>
                    <ul>
                      {product.keyFeatures && product.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
              <div className="container">
                <div className="all-heading">
                  <h2>MORE INFO TO YOU</h2>
                  <p>Things you need to know</p>
                </div>
                <div className="row tabContent-para">
                  <div className="col-md-5">
                    <p className="mb-3">{product.addInfoTab}</p>
                    <h5>Why You'll Love It</h5>
                    <ul>
                      {product.whyLoveit && product.whyLoveit.map((whylove,index) => (
                        <li key={index}>{whylove}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h5>Materials</h5>
                    <ul className="mb-4">
                      {product.materials && product.materials.map((materials, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: materials }}></li>
                      ))}
                    </ul>
                    <h5>What Fits Inside</h5>
                    <ul>
                      {product.whatsInside && product.whatsInside.map((whatsInside,index) => (
                        <li key={index}>{whatsInside}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <img className="img-fluid tabpdtImg" src={product.image} alt="{product.title}"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
              <div className="container">
                <div className="all-heading">
                  <h2>PRODUCT STORIES</h2>
                  <p>What are people saying about {product.title}</p>
                </div>
              </div>
              {Array.isArray(product.testimonials) && product.testimonials.length > 0 && (
                <ProductTestimonialSlider testimonials={product.testimonials} />
              )}
            </div>
          </div>
        </div>
        {relatedProducts.length > 0 && (
          <RelatedProductSlider relatedProducts={relatedProducts} />
        )}
      </div>
      <PaymentBadges/>
    </div>
  );
};

export default ProductDetails;
