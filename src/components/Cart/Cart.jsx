import { IoClose } from "react-icons/io5";
import "./Cart.css";
// eslint-disable-next-line react/prop-types
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-container">
      <header>
        <h3>Cart</h3> <IoClose onClick={() => setShowCart(false)} />
      </header>
      <div className="cart-body">
        <p>Your Cart is empty</p>
      </div>
    </div>
  );
};

export default Cart;
