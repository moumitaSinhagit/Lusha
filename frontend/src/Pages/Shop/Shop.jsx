import React, { useEffect, useState } from 'react'
import './Shop.css'
import Banner from '../../Components/Banner/Banner'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import viewIcon from '../../assets/view-icon.svg';
import heartIcon from '../../assets/heart-icon.svg';
import { useWishlist } from '../../Context/WishlistContext';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState(() => {
    const saved = localStorage.getItem('shopFilters');
    return saved ? JSON.parse(saved).category || '' : '';
  });
  const [occasionFilter, setOccasionFilter] = useState(() => {
    const saved = localStorage.getItem('shopFilters');
    return saved ? JSON.parse(saved).occasion || '' : '';
  });
  const [colorFilter, setColorFilter] = useState(() => {
    const saved = localStorage.getItem('shopFilters');
    return saved ? JSON.parse(saved).color || '' : '';
  });

  const [priceFilter, setPriceFilter] = useState(() => {
    const saved = localStorage.getItem('shopFilters');
    return saved ? JSON.parse(saved).price || [] : [];
  });

  const [bestsellerFilter, setBestsellerFilter] = useState(false);

  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filteredProducts = products.filter(product => {
  const matchesCategory = categoryFilter ? product.categories.includes(categoryFilter) : true;
  const matchesOccasion = occasionFilter ? product.occasion.includes(occasionFilter) : true;
  const matchesColor = colorFilter ? product.color === colorFilter : true;
  const matchesBestseller = bestsellerFilter ? product.bestseller === true : true;

  const matchesPrice = priceFilter.length > 0
      ? priceFilter.some(range => {
          const [min, max] = range.split('-').map(Number);
          return product.price >= min && product.price <= max;
        })
      : true;

    return matchesCategory && matchesOccasion && matchesColor && matchesPrice && matchesBestseller;
  });

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const [animateClass, setAnimateClass] = useState("product-list-animated");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/product.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const isAnyFilterApplied = categoryFilter !== '' || occasionFilter !== '' || colorFilter !== '' || priceFilter.length > 0;
    const togglePriceFilter = (range) => {
      setPriceFilter(prev =>
        prev.includes(range)
          ? prev.filter(p => p !== range)
          : [...prev, range]
      );
  };
  useEffect(() => {
    const filters = {
      category: categoryFilter,
      occasion: occasionFilter,
      color: colorFilter,
      price: priceFilter,
    };
    localStorage.setItem('shopFilters', JSON.stringify(filters));
  }, [categoryFilter, occasionFilter, colorFilter, priceFilter]);

  useEffect(() => {
    setAnimateClass("product-list-animated");
    const timer = setTimeout(() => {
      setAnimateClass("product-list-animated show");
    }, 50);
    return () => clearTimeout(timer);
  }, [currentPage, categoryFilter, occasionFilter, colorFilter, priceFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, occasionFilter, colorFilter, priceFilter]);

  const location = useLocation();
  const navigate = useNavigate();

  const clearAllFilters = () => {
    const params = new URLSearchParams(location.search);
    params.delete('category');
    params.delete('color');
    params.delete('occasion');
    params.delete('price');
    params.set('page', 1); 
    params.delete('bestseller');

    navigate({ search: params.toString() });

    setCategoryFilter('');
    setColorFilter('');
    setOccasionFilter('');
    setPriceFilter([]);
    setBestsellerFilter('');
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cat = queryParams.get('category');
    const color = queryParams.get('color');
    const occasion = queryParams.get('occasion');
    setCategoryFilter(cat || '');
    setColorFilter(color || '');
    setOccasionFilter(occasion || '');
    setBestsellerFilter(queryParams.get('bestseller') === 'true');
    setCurrentPage(1);
  }, [location.search]);

  const handleCategoryClick = (cat) => {
    const params = new URLSearchParams(location.search);
    const current = params.get('category');

    if (current === cat) {
      params.delete('category');
    } else {
      params.set('category', cat);
    }

    params.set('page', 1);
    navigate({ search: params.toString() });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get('page');

    if (!page || Number(page) > 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setAnimateClass('product-list-animated');
    const timer = setTimeout(() => {
      setAnimateClass('product-list-animated show');
    }, 50);

    return () => clearTimeout(timer);
  }, [location.search]);
  
  const mobileFilter = () => {
    let mobileMenu = document.querySelector(".pdt-list-left");
    mobileMenu.style.transform = "translateX(0%)";
  }

  const closeFilter = () => {
    let mobileMenu = document.querySelector(".pdt-list-left");
    mobileMenu.style.transform = "translateX(100%)";
  }

  return (
    <div>
      <Banner/>
      <div className="product-listing">
        <div className="container">
          <div className="row">
            <div className="filter-mob d-md-none d-block">
              <div onClick={mobileFilter} className="filter-mob-innr">
                <img className="img-fluid" src="images/filter-icon.svg" alt="" />
                <span>FILTER</span>
              </div>
            </div>
            <div className="col-md-3 pdt-list-left">
              <div className="pdt-list-innr">
                <div onClick={closeFilter} className="closeIcn d-md-none d-block">
                  <img className="img-fluid" src="images/close-icon.svg" alt=""/>
                </div>
                <div className="filterCol">
                  <div className="filterHeading">
                    <h2>Categories</h2>
                  </div>
                  <ul>
                    {['Tote Bags', 'Handbags', 'Sling Bags', 'Clutches & Evening Bags', 'BackPacks', 'Wallets & Pouches','Laptop Bags & Work Bags'].map(cat => (
                      <li
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={categoryFilter === cat ? 'active' : ''}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="filterCol">
                  <div className="filterHeading">
                    <h2>BY OCCASION</h2>
                  </div>
                  <div className="occasiontabs">
                    {['Casual', 'Work', 'Party', 'Travel', 'Formal'].map(occasion => (
                      <button
                        key={occasion}
                        onClick={() => setOccasionFilter(prev => prev === occasion ? '' : occasion)}
                        className={occasionFilter === occasion ? 'active' : ''}
                      >
                        {occasion}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="filterCol">
                  <div className="filterHeading">
                    <h2>COLOR</h2>
                  </div>
                  <div className="colortabs">
                    {['Black', 'White', 'Yellow', 'Red', 'Blue', 'Brown','Pink'].map(color => (
                      <div
                        key={color}
                        className={`colorDivs ${colorFilter === color ? 'active' : ''}`}
                        onClick={() => setColorFilter(prev => (prev === color ? '' : color))}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="filterCol">
                  <div className="filterHeading">
                    <h2>PRICE</h2>
                  </div>
                  <div className="filter-form-check">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="price-one"
                        checked={priceFilter.includes('10-20')}
                        onChange={() => togglePriceFilter('10-20')}
                      />
                      <label className="form-check-label" htmlFor="price-one">
                        $10 - $20
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="price-two"
                        checked={priceFilter.includes('20-30')}
                        onChange={() => togglePriceFilter('20-30')}
                      />
                      <label className="form-check-label" htmlFor="price-two">
                        $20 - $30
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="price-three"
                        checked={priceFilter.includes('30-50')}
                        onChange={() => togglePriceFilter('30-50')}
                      />
                      <label className="form-check-label" htmlFor="price-three">
                        $30 - $50
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="price-four"
                        checked={priceFilter.includes('50-100')}
                        onChange={() => togglePriceFilter('50-100')}
                      />
                      <label className="form-check-label" htmlFor="price-four">
                        $50 - $100
                      </label>
                    </div>
                  </div>
                </div>
                {(categoryFilter || colorFilter || occasionFilter || priceFilter.length > 0 || bestsellerFilter) && (
                  <button className="shopbtn" onClick={clearAllFilters}>
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
            <div className="col-md-9 list-right">
              <div className="product-cards">
                <div className={`row ${animateClass}`}>
                  
                  {loading ? (
                      <div className="col-12 text-center">
                        <h4 className="mt-4">Loading products...</h4>
                      </div>
                    ) : currentProducts.length === 0 ? (
                      <div className="col-12 text-center">
                        <h4 className="mt-4">No products found.</h4>
                      </div>
                    ) : (
                    currentProducts.map((product,index) => (
                      <div key={product.id} className={`col-md-4 ${animateClass}`} style={{ animationDelay: `${index * 0.1}s` }}>
                          <ProductCard
                          key={product.id}
                          product={product}
                          index={index}
                        />
                      </div>
                      
                    ))
                  )}
                </div>
              </div>
              {filteredProducts.length > productsPerPage && (
              <nav className="page-navigation" aria-label="Page navigation">
                 <ul className="pagination justify-content-center mt-4">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} id="prev-page">
                      <button className="page-link" onClick={() => setCurrentPage(prev => prev - 1)}>
                        <img src="images/pagination-arrow1.svg" alt="Prev" />
                      </button>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                      <li
                        key={index}
                        className={`page-item page-number ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        <button className="page-link">{index + 1}</button>
                      </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`} id="next-page">
                      <button className="page-link" onClick={() => setCurrentPage(prev => prev + 1)}>
                        <img src="images/pagination-arrow2.svg" alt="Next" />
                      </button>
                    </li>
                  </ul>
              </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop