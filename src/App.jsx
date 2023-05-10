import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateCartTotal } from './features/cart/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isModalOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateCartTotal());
  },[cartItems])

  return <main>
    {isModalOpen && <Modal/>}
    <Navbar />
    <CartContainer />
  </main>;
}
export default App;
