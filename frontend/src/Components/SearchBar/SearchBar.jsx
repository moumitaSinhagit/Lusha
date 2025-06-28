import React,{ useState } from 'react'
import './SearchBar.css';
import { Link } from 'react-router';

const SearchBar = ({ products }) => {
    
  const [query, setQuery] = useState('');
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        autoFocus
      />
      <div className="search-results">
        {query && filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            
            <div key={product.id} className="result-item">
                <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <span>{product.title}</span>
                </Link>
            </div>
          ))
        ) : query ? (
          <p className="no-results">No products found.</p>
        ) : null}
      </div>
    </div>
  )
}

export default SearchBar