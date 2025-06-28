import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';

const getInitialWishlist = () => {
  const stored = localStorage.getItem('wishlist');
  return stored ? JSON.parse(stored) : [];
};

const WishlistContext = createContext();

const initialState = {
  wishlist: getInitialWishlist(),
  status: '',
  message: ''
};

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
          status: 'warning',
          message: 'Removed from wishlist'
        };
      } else {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
          status: 'success',
          message: 'Added to wishlist'
        };
      }
    }

    case 'CLEAR_STATUS':
      return {
        ...state,
        status: '',
        message: ''
      };

    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  useEffect(() => {
    if (state.status && state.message) {
      if (state.status === 'success') toast.success(state.message);
      if (state.status === 'warning') toast.warning(state.message);
      dispatch({ type: 'CLEAR_STATUS' });
    }
  }, [state.status, state.message]);

  return (
    <WishlistContext.Provider value={{ wishlist: state.wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
