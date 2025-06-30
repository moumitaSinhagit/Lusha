import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { useWishlist } from '../../Context/WishlistContext';
import { Link } from 'react-router';
import './Wishlist.css'

const Wishlist = () => {
  const { wishlist, dispatch } = useWishlist();
  return (
    <div>
        <Banner/>
        <div className="wishlist-page">
          <div className="container">
            {wishlist.length === 0 ? (
              <h2 class="text-center">Your wishlist is empty.</h2>
            ) : (
              <div className="table-responsive">
                <table className="table mb-0 cart-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Name</th>
                      <th>View</th>
                      <th>Review</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.map(item => (
                      <tr key={item.id}>
                        <td>
                          <img className="img-fluid cartpdtImg" src={item.image} alt={item.title}/>
                        </td>
                        <td>{item.title}</td>
                        <td>
                          <Link to={`/product/${item.id}`} className="shopbtn">View</Link>
                        </td>
                        <td>
                          <button className="shopbtn" onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', payload: item })}>Remove form Wishlist</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Wishlist