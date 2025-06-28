import React from 'react'
import { Link } from 'react-router-dom';
import './ProductCard.css';
import viewIcon from '../../assets/view-icon.svg';
import heartIcon from '../../assets/heart-icon.svg';
import { useWishlist } from '../../Context/WishlistContext';

const ProductCard = ({ product }) => {

  const { wishlist, dispatch } = useWishlist();

  const isWishlisted = wishlist.some(item => item.id === product.id);

  const toggleWishlist = () => {
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {product.bestseller && (
          <span className="bestseller-badge">Bestseller</span>
        )}
        <img className="img-fluid main-img" src={product.image} alt={product.title} />
        <img
          className="img-fluid hover-img"
          src={
            Array.isArray(product.thumbnail) && product.thumbnail[1]
              ? product.thumbnail[1]
              : product.image
          }
          alt={product.title}
        />
        <div className="icon-badges">
          <div className="view-icon">
            <Link to={`/product/${product.id}`}>
              <img className="img-fluid" src={viewIcon} alt="Eye Icon" />
            </Link>
          </div>
          <div className="wishlist-icon" onClick={toggleWishlist}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"  xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3C9 3 9 3 9.76 2C10.64 0.84 11.94 0 13.5 0C15.99 0 18 2.01 18 4.5C18 5.43 17.72 6.29 17.24 7C16.43 8.21 9 16 9 16C9 16 1.57 8.21 0.76 7C0.28 6.29 0 5.43 0 4.5C0 2.01 2.01 0 4.5 0C6.06 0 7.37 0.84 8.24 2C9 3 9 3 9 3Z" fill={isWishlisted ? '#EE7B7B' : '#999'}/>
            </svg>
          </div>
        </div>
      </div>
      <h3 className="text-center">{product.title}</h3>
      <div className="d-flex justify-content-center product-card-price">
        <strike>${product.oldPrice.toFixed(2)}</strike>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard