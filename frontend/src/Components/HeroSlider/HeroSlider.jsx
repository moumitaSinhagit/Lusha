import React, { useEffect, useState } from 'react';
import './HeroSlider.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    pretitle: 'New Collection',
    title: 'Where Sophistication<br/> Everyday Elegance',
    subtitle: 'Discover handcrafted bags designed to carry confidence and style — wherever you go.',
    image: '/images/slider-one.jpg',
    mobileImage: '/images/slider-one-mobile.jpg'
  },
  {
    id: 2,
    pretitle: 'New Arrival',
    title: 'Simple Luxury,<br/>Naturally Yours',
    subtitle: 'Explore artisan-crafted bags that blend timeless design with everyday functionality.',
    image: '/images/slider-two.jpg',
    mobileImage: '/images/slider-two-mobile.jpg'
  },
];

const transition = { duration: 1, ease: 'easeInOut' };

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="hero-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="hero-slide-bg"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            style={{
              backgroundImage: `url(${isMobile ? slides[index].mobileImage : slides[index].image})`,
            }}
          />
          <div className="container">
            <div className="hero-text offset-md-6">
              <motion.h5 initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.3, duration: 0.8 }}>{slides[index].pretitle}</motion.h5>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                dangerouslySetInnerHTML={{ __html: slides[index].title }}
              />
              <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.9, duration: 0.8 }}>{slides[index].subtitle}</motion.p>
              <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 1.2, duration: 0.8 }}>
                <Link className="shopbtn" to="/shop">Shop Now</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="hero-slider-dots">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={`dot ${index === dotIndex ? 'active' : ''}`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
