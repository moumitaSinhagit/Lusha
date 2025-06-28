import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';

const getInitialCart = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const CartContext = createContext();

const initialState = {
  cart: getInitialCart(),
  status: null,
  message: ''
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      const existingQty = existingItem ? existingItem.quantity : 0;
      const totalRequestedQty = existingQty + action.payload.quantity;

      if (totalRequestedQty > 10) {
        return {
          ...state,
          status: 'warning',
          message: 'You can add a maximum of 10 items of this product.'
        };
      }

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: totalRequestedQty, selectedColor: action.payload.selectedColor }
              : item
          ),
          status: 'success',
          message: 'Quantity updated in cart.'
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, selectedColor: action.payload.selectedColor }],
        status: 'success',
        message: 'Product added to cart.'
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
        status: 'success',
        message: 'Product removed from cart.'
      };

    case 'CLEAR_CART':
      return { ...state, cart: [], status: 'success', null: '' };

    case 'CLEAR_STATUS':
      return { ...state, status: null, message: '' };

    case 'UPDATE_QUANTITY':
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ),
    };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    if (state.status && state.message) {
      if (state.status === 'success') toast.success(state.message);
      if (state.status === 'warning') toast.warning(state.message);
      dispatch({ type: 'CLEAR_STATUS' });
    }
  }, [state.status, state.message]);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
