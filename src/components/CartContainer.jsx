import React from 'react'
import CartItem from './CartItem'
import { useSelector,useDispatch } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  

  if (cartItems.length === 1) {
    return (
      <article className="cart">
        <header>
          <h2>your bag</h2>
          <p className="empty-cart">is currently empty</p>
        </header>
      </article>
    )
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <CartItem key={cartItem.id} {...cartItem}/>
          )
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total
            <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button type='button' className="clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
