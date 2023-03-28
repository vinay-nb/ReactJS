import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items.length);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h3>Cart</h3>
      <p className="font-bold text-xl text-red-500">
        Number of Items - {cartItems}
      </p>
      <button
        className="bg-red-500 p-2 m-2 text-white rounded-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </>
  );
};

export default Cart;
