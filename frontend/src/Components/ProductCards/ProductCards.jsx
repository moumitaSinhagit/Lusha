import React, { useEffect, useState } from 'react'
import './ProductCards.css';
import ProductCard from '../ProductCard/ProductCard';
  
const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [hotDeals, setHotDeals] = useState([]);
  const [bestsellerFilter, setBestsellerFilter] = useState(false);
  
  useEffect(() => {
    fetch('/product.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        const hotItems = data.filter(product => product.isHotDeal);
        setHotDeals(hotItems);
      });
  }, []);

  return (
    <div className="product-cards">
        <div className="container">
            <div className="all-heading text-center">
                <h2>HOT DEALS</h2>
                <p>Limited-Time Offers on Our Most Loved Styles</p>
            </div>
            <div className="row">
                {hotDeals.map((product) => (
                  <div key={product.id} className="col-md-3">
                    
                      <ProductCard product={product} />
                    
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductCards