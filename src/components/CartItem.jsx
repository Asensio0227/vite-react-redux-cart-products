import React from 'react'
import { ChevronDown, ChevronUp } from "../icons"
import {useDispatch } from 'react-redux'
import {increaseCart,decreaseCart,removeCart } from "../features/cart/cartSlice"

const CartItem = ({ id, amount, img, price, title }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5 className="item-price">${price}</h5>
        <button type="button" className="remove-btn" onClick={() => {
          dispatch(removeCart(id))
        }}>
          remove
        </button>
      </div>
      <div>
        <button type="button" className="amount-btn" onClick={() => {
          dispatch(increaseCart(id))
        }} >
          <ChevronUp/>
        </button>
        <p className="amount">{amount}</p>
        <button type="button" className="amount-btn" onClick={() => {
          if (amount === 1) {
            dispatch(removeCart(id));
            return
          }
          dispatch(decreaseCart(id))
         }}>
          <ChevronDown/>
        </button>
      </div>
    </article>
  )
}

export default CartItem
